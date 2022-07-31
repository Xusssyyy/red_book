import React,{useEffect} from "react";
import {ListWrapper} from './style'
import ListFour from '../../../components/ListFour'
import { connect } from 'react-redux'
import { actionCreators } from './store/index'
import { SpinLoading } from "antd-mobile";
// import { PullToRefresh } from 'antd-mobile'
// import { sleep } from 'antd-mobile/es/utils/sleep'

const Food = (props) =>{ 
   const {food,enterLoading} = props
   const {getFoodDispatch} = props
   useEffect(() => {
      getFoodDispatch()
    }, [])
    // async function doRefresh() {
    //   await sleep(1000);
    //   getFoodDispatch();
    // }
    return(
      // <PullToRefresh
      // onRefresh={doRefresh}
      // canReleaseText={<h5>用力拉</h5>}
      // completeText={ <h5>好啦</h5>}
      // refreshingText={<h5>玩命加载中</h5>}
      // >
          <ListWrapper>
            <div className="container">
           {food.map(item=>(
              <ListFour entry={item} key={item.id}/>
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
     food:state.foodlist.food,
     enterLoading:state.foodlist.enterLoading,
   } 
 }
const mapDispatchToProps = (dispatch) => {
   return {
     getFoodDispatch() {
       dispatch(actionCreators.getFood())
     }
   }
 }
 
export default connect(mapStateToProps,mapDispatchToProps)(React.memo(Food))
