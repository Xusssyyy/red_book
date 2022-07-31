import * as actionTypes from './constants'

const defaultState = {
  like: [],
  enterLoading: true
}

const reducer = (state=defaultState, action) => {
    switch(action.type) {
      case actionTypes.CHANGE_List:
        return {
          ...state,
          like: action.data
        }
      case actionTypes.CHANGE_ENTER_LOADING_THREE:
        return{
          ...state,
          enterLoading:action.data
        }
      default:
        return state;
    }
  }

  export default reducer