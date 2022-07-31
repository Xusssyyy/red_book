import React, { useState,useEffect } from "react";
import {ListWrapper} from './style'
import ListOne from "../../../components/ListOne";
import { connect } from 'react-redux'
import { actionCreators } from './store/index'
import { SpinLoading } from 'antd-mobile'
// import { PullToRefresh } from 'antd-mobile'
// import { sleep } from 'antd-mobile/es/utils/sleep'

 const Recommend = (props) =>{
  const { shop,enterLoading } = props
  const { getShopDispatch } = props
  useEffect(() => {
    getShopDispatch()
  }, [])
  // async function doRefresh() {
  //   await sleep(1000);
  //   getShopDispatch();
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
           {shop.map(item=>(
              <ListOne info={item} key={item.id}/>
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
    shop:state.recommend.shop,
    enterLoading:state.recommend.enterLoading,
  } 
}
const mapDispatchToProps = (dispatch) => {
  return {
    getShopDispatch() {
      dispatch(actionCreators.getShop())
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(React.memo(Recommend))