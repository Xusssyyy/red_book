import * as actionTypes from './constants'

import { getSportRequest } from '../../../../api/request'


export const changeSport = (data) => ({
  type: actionTypes.CHANGE_SPORT,
  data
})

export const changeEnterLoading = (data) =>({
  type:actionTypes.CHANGE_ENTER_LOADING_TWO,
  data
})

export const getSport = ()=>{
  return (dispatch) => {
    getSportRequest().then(data=>{
      dispatch(changeSport(data))
      dispatch(changeEnterLoading(false))
    })
  }
}