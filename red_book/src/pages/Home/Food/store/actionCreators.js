import * as actionTypes from './constants'

import { getFoodRequest } from '../../../../api/request'

export const changeFood = (data) => ({
    type: actionTypes.CHANGE_FOOD,
    data
  })

export const changeEnterLoading = (data) =>({
    type:actionTypes.CHANGE_ENTER_LOADING_FOUR,
    data
})

export const getFood= () => {
    return (dispatch) => {
      getFoodRequest().then(data => {
        dispatch(changeFood(data))
        dispatch(changeEnterLoading(false))
      })
    }
  }
