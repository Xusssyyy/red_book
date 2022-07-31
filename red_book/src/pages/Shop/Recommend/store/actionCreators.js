import * as actionTypes from './constants'

import { getShopRequest } from '../../../../api/request'

export const changeShop = (data) => ({
    type: actionTypes.CHANGE_SHOP,
    data
  })

export const changeEnterLoading = (data) =>({
    type:actionTypes.CHANGE_ENTER_LOADING_ONE,
    data
})

export const getShop= () => {
    return (dispatch) => {
      getShopRequest().then(data => {
        dispatch(changeShop(data))
        dispatch(changeEnterLoading(false))
      })
    }
  }
