import {
   CREATE_SHOPPING_LIST_ITEM,
   RETRIEVE_SHOPPING_LIST,
   UPDATE_SHOPPING_LIST_ITEM,
} from "../actions/shoppingList";

export default function shoppingListReducer (state = {}, action) {
   switch (action.type) {
      case CREATE_SHOPPING_LIST_ITEM:
         return {
            ...state,
            [action.id] : {
               id: action.id,
               ...action.shoppingListItem
            }
         }
      case RETRIEVE_SHOPPING_LIST:
         return {
            ...state,
            ...action.shoppingList
         }
      case UPDATE_SHOPPING_LIST_ITEM:
         return {
            ...state,
            [action.shoppingListItem.id]: {
               ...action.shoppingListItem
            }
         }
      default:
         return state;
   }
}