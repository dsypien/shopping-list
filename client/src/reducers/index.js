import { combineReducers } from "redux";
import shoppingListReducer from "./shoppingList";
import paginationReducer from "./pagination";

export default combineReducers({
   shoppingList: shoppingListReducer,
   pagination: paginationReducer
})