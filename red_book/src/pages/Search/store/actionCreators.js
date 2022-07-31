import * as actionTypes from './constants'

import { getSearchRequest } from '../../../api/request'

export const changeSearch = (data) => ({
    type: actionTypes.CHANGE_SEARCH,
    data
  })

export const changeEnterLoading = (data) => ({
    type: actionTypes.ENTER_LOADING,
    data
  })

export const getSearch= () => {
    return (dispatch) => {
      getSearchRequest().then(data => {
        dispatch(changeSearch(data))
        dispatch(changeEnterLoading(false))
      })
    }
  }
