import * as actionTypes from './constants'

const defaultState = {
  food: [],
  enterLoading: true
}

const reducer = (state=defaultState, action) => {
    switch(action.type) {
      case actionTypes.CHANGE_FOOD:
        return {
          ...state,
          food: action.data
        }
      case actionTypes.CHANGE_ENTER_LOADING_FOUR:
        return{
          ...state,
          enterLoading:action.data
        }
      default:
        return state;
    }
  }

  export default reducer