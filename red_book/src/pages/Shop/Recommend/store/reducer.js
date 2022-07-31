import * as actionTypes from './constants'

const defaultState = {
  shop: [],
  enterLoading: true
}

const reducer = (state=defaultState, action) => {
    switch(action.type) {
      case actionTypes.CHANGE_SHOP:
        return {
          ...state,
          shop: action.data
        }
      case actionTypes.CHANGE_ENTER_LOADING_ONE:
        return{
            ...state,
            enterLoading:action.data
        }
      default:
        return state;
    }
  }

  export default reducer