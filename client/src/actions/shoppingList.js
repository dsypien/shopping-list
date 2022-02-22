import { addListItem, editListItem, deleteListItem } from "../services/api";
export const CREATE_SHOPPING_LIST_ITEM = "CREATE_SHOPPING_LIST_ITEM";
export const RETRIEVE_SHOPPING_LIST = "CREATE_SHOPPING_LIST";
export const UPDATE_SHOPPING_LIST_ITEM = "UPDATE_SHOPPING_LIST_ITEM";
export const DELETE_SHOPPING_LIST_ITEM = "DELETE_SHOPPING_LIST_ITEM";
export const TOGGLE_ITEM_PURCHASED = "TOGGLE_ITEM_PURCHASED";


export function createShoppingListItem (shoppingListItem) {
   return {
      type: CREATE_SHOPPING_LIST_ITEM,
      shoppingListItem,
   }
}

export function handleAddItem (shoppingListItem) {
   return (dispatch) => {
      return addListItem(shoppingListItem)
         .then( item => {
            dispatch(createShoppingListItem(item.data))
         });
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

export function handleEditItem (shoppingListItem) {
   return (dispatch) => {
      return editListItem(shoppingListItem)
         .then( () => {
            dispatch(updateShoppingListItem(shoppingListItem));
         })
   }
}

export function deleteShoppingListItem (id) {
   return {
      type: DELETE_SHOPPING_LIST_ITEM,
      id,
   }
} 

export function handleDeleteItem (id) {
   return (dispatch) => {
      return deleteListItem(id)
         .then( () => {
            dispatch(deleteShoppingListItem(id))
         });
   }
}

export function toggleItemPurchased (id) {
   return {
      type: TOGGLE_ITEM_PURCHASED,
      id,
   }
}