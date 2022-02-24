import { combineReducers } from "redux";
import shoppingListReducer from "./shoppingList";
import paginationReducer from "./pagination";
import appStatusReducer from "./appStatus";

export default combineReducers({
   shoppingList: shoppingListReducer,
   pagination: paginationReducer,
   appStatus: appStatusReducer
})