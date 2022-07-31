import { combineReducers } from "redux";
import { reducer as recommendReducer } from '../pages/Shop/Recommend/store/index'
import { reducer as sportlistReducer } from "../pages/Shop/Sport/store/index";
import { reducer as likelistReducer } from "../pages/Home/Like/store/index";
import { reducer as foodlistReducer } from "../pages/Home/Food/store/index";
import { reducer as searchlistReducer } from "../pages/Search/store/index";

export default combineReducers({
    recommend: recommendReducer,
    sportlist: sportlistReducer,
    likelist: likelistReducer,
    foodlist: foodlistReducer,
    searchlist: searchlistReducer
})