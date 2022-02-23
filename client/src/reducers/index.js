import { combineReducers } from "redux";
import shoppingListReducer from "./shoppingList";
import paginationReducer from "./pagination";
import loadingReducer from "./loading";

export default combineReducers({
   shoppingList: shoppingListReducer,
   pagination: paginationReducer,
   loading: loadingReducer
})