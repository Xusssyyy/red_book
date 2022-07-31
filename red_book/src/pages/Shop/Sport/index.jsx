import React, { useState,useEffect } from "react";
import {ListWrapper} from './style'
import ListTwo from "../../../components/ListTwo";
import { connect } from 'react-redux'
import { actionCreators } from './store/index'
import { SpinLoading } from 'antd-mobile'
// import { PullToRefresh } from 'antd-mobile'
// import { sleep } from 'antd-mobile/es/utils/sleep'

const Sport = (props) =>{
  const {sport,enterLoading} = props
  const { getSportDispatch } = props
  useEffect(() => {
    getSportDispatch()
  }, [])
  // async function doRefresh() {
  //   await sleep(1000);
  //   getSportDispatch();
  // }
    return(
      // <PullToRefresh
      // onRefresh={doRefresh}
      // canReleaseText={<h4>用力拉</h4>}
      // completeText={ <h4>好啦</h4>}
      // refreshingText={<h4>玩命加载中</h4>}
      // >
      <ListWrapper>
        <div className="container">
          {sport.map(item=>(
              <ListTwo spofo={item} key={item.id}/>
              ))
          }
        </div>
        {enterLoading && <SpinLoading style={{'--color':'#ed2b43'}} className='load'/>}
      </ListWrapper>
      // </PullToRefresh>
    )
 }

const mapStateToProps = (state) => {
  return {
    sport:state.sportlist.sport,
    enterLoading:state.sportlist.enterLoading,
  } 
}
const mapDispatchToProps = (dispatch) => {
  return {
    getSportDispatch() {
      dispatch(actionCreators.getSport())
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(React.memo(Sport))