import * as actionTypes from './constants'

const defaultState = {
  sport: [],
  enterLoading: true
}

const reducer = (state=defaultState, action) => {
    switch(action.type) {
      case actionTypes.CHANGE_SPORT:
        return {
          ...state,
          sport: action.data
        }
      case actionTypes.CHANGE_ENTER_LOADING_TWO:
        return{
            ...state,
            enterLoading:action.data
        }
      default:
        return state;
    }
  }


  export default reducer