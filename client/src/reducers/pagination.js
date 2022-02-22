import { RETRIEVE_SHOPPING_LIST } from "../actions/shoppingList";

export default function paginationReducer (state={}, action) {
   switch(action.type){
      case RETRIEVE_SHOPPING_LIST:
         return {
            ...action.pagination
         }
      default:
         return state;
   }
}