import React, { useState,useEffect } from "react";
import {ListWrapper} from './style'
import ListThree from "../../../components/ListThree";
import { connect } from 'react-redux'
import { actionCreators } from './store/index'
import { SpinLoading } from "antd-mobile";
import {forceCheck} from 'react-lazyload'
import Scroll  from '../../../components/common/Scroll'
import { PullToRefresh } from 'antd-mobile'
import { sleep } from 'antd-mobile/es/utils/sleep'

 const Like = (props) =>{
  const { like,enterLoading } = props
  const { getListDispatch } = props
  useEffect(() => {
    getListDispatch()
  }, [])
   async function doRefresh() {
    await sleep(1000);
    // getListDispatch();
  }
    return(
      <Scroll onScroll={forceCheck}>
      <ListWrapper>
      <PullToRefresh
      onRefresh={doRefresh}
      canReleaseText={<h4>用力拉</h4>}
      completeText={ <h4>好啦</h4>}
      refreshingText={<h4>玩命加载中</h4>}
      >
        <div className="container">
          {like.map(item=>(
              <ListThree source={item} key={item.id}/>
            ))
          } 
        </div>
        {enterLoading && <SpinLoading style={{'--color':'#ed2b43'}} className='load'/>}
        </PullToRefresh>
      </ListWrapper>
     </Scroll>
   
    )
 }
 
const mapStateToProps = (state) => {
  return {
    like:state.likelist.like,
    enterLoading:state.likelist.enterLoading,
  } 
}
const mapDispatchToProps = (dispatch) => {
  return {
    getListDispatch() {
      dispatch(actionCreators.getList())
    }
  }
}

 export default connect(mapStateToProps,mapDispatchToProps)(React.memo(Like))

