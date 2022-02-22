import {
   CREATE_SHOPPING_LIST_ITEM,
   RETRIEVE_SHOPPING_LIST,
   UPDATE_SHOPPING_LIST_ITEM,
   DELETE_SHOPPING_LIST_ITEM,
   TOGGLE_ITEM_PURCHASED,
} from "../actions/shoppingList";

export default function shoppingListReducer (state = {}, action) {
   switch (action.type) {
      case CREATE_SHOPPING_LIST_ITEM:
         return {
            ...state,
            [action.shoppingListItem.id] : {
               ...action.shoppingListItem
            }
         }
      case RETRIEVE_SHOPPING_LIST:
         return action.shoppingList.reduce( (reducer, item, idx) => { 
            reducer[item.id] = action.shoppingList[idx];
            return reducer;
          }, {})
      case UPDATE_SHOPPING_LIST_ITEM:
         return {
            ...state,
            [action.id]: {
               ...action.shoppingListItem
            }
         }
      case DELETE_SHOPPING_LIST_ITEM:
         const { [action.id]: deleted, ...newState } = state;
         return newState;
      case TOGGLE_ITEM_PURCHASED:
         return {
            ...state,
            [action.id]: {
               ...state[action.id],
               purchased: !state[action.id].purchased
            }
         }
      default:
         return state;
   }
}