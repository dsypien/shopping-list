import { combineReducers } from "redux";
import authedUserReducer from "./authedUser";
import shoppingListReducer from "./shoppingList";

export default combineReducers({
   authedUser: authedUserReducer,
   shoppingList: shoppingListReducer,
})