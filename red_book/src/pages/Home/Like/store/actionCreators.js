import * as actionTypes from './constants'

import { getListRequest } from '../../../../api/request'

export const changeList = (data) => ({
    type: actionTypes.CHANGE_List,
    data
  })

export const changeEnterLoading = (data) =>({
    type:actionTypes.CHANGE_ENTER_LOADING_THREE,
    data
})

export const getList= () => {
    return (dispatch) => {
      getListRequest().then(data => {
        dispatch(changeList(data))
        dispatch(changeEnterLoading(false))
      })
    }
  }
