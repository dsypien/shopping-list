export const CREATE_SHOPPING_LIST_ITEM = "CREATE_SHOPPING_LIST_ITEM";
export const RETRIEVE_SHOPPING_LIST = "CREATE_SHOPPING_LIST";
export const UPDATE_SHOPPING_LIST_ITEM = "UPDATE_SHOPPING_LIST_ITEM";

export function createShoppingListItem (shoppingListItem) {
   return {
      type: CREATE_SHOPPING_LIST_ITEM,
      id: Date.now(),
      shoppingListItem,
   }
}

export function retrieveShoppingList (shoppingList) {
   return {
      type: RETRIEVE_SHOPPING_LIST,
      shoppingList,
   };
}

export function updateShoppingListItem (shoppingListItem) {
   return {
      type: UPDATE_SHOPPING_LIST_ITEM,
      shoppingListItem,
   }
}