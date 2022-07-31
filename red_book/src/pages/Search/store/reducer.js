import * as actionTypes from './constants'

const defaultState = {
  search: [],
  enterLoading:false
}

const reducer = (state=defaultState, action) => {
    switch(action.type) {
      case actionTypes.CHANGE_SEARCH:
        return {
          ...state,
          search: action.data
        }
      case actionTypes.ENTER_LOADING:
        return {
          ...state,
          enterLoading: action.data,
        }
      default:
        return state;
    }
  }

  export default reducer