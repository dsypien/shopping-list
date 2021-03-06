import { addListItem, editListItem, deleteListItem, getShoppingList } from "../services/api";
import { showLoading, hideLoading, showAlertStatus, hideAlertStatus } from "./appStatus";
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
         .then( ({data}) => {
            dispatch(createShoppingListItem(data));
            dispatch(handleGetShoppingList(1));
            dispatch(hideAlertStatus());
         })
         .catch(() => {
            dispatch(showAlertStatus("Could not reach server, please contact your network administrator."));
         });
   }
}

export function retrieveShoppingList (shoppingList, pagination) {
   return {
      type: RETRIEVE_SHOPPING_LIST,
      shoppingList,
      pagination,
   };
}

export function handleGetShoppingList (pageNum) {
   return (dispatch) => {
      dispatch(showLoading());
      return getShoppingList(pageNum)
         .then( res => {
            const { 
               pagination,
               rows,} = res.data;
            dispatch(retrieveShoppingList(rows, pagination));
            dispatch(hideAlertStatus());
         })
         .catch(() => {
            dispatch(showAlertStatus("Could not reach server, please contact your network administrator."));
         })
         .finally(() => {
            dispatch(hideLoading());
         });
   }
}

export function updateShoppingListItem (shoppingListItem) {
   return {
      type: UPDATE_SHOPPING_LIST_ITEM,
      shoppingListItem,
      id : shoppingListItem.id
   }
}

export function handleEditItem (shoppingListItem) {
   return (dispatch) => {
      return editListItem(shoppingListItem)
         .then( () => {
            dispatch(updateShoppingListItem(shoppingListItem));
            dispatch(hideAlertStatus());
         })
         .catch(() => {
            dispatch(showAlertStatus("Could not reach server, please contact your network administrator."));
         });
   }
}

export function deleteShoppingListItem (id) {
   return {
      type: DELETE_SHOPPING_LIST_ITEM,
      id,
   }
} 

export function handleDeleteItem (id, page) {
   return (dispatch, getState) => {
      const { currentPage, pageSize, totalItems} = getState().pagination;
      // calculate how many pages will be left after we remove an item
      const newTotalPages = Math.ceil((totalItems - 1)/pageSize);

      return deleteListItem(id)
         .then( () => {
            dispatch(deleteShoppingListItem(id));
            if (currentPage > newTotalPages) {
               dispatch(handleGetShoppingList(newTotalPages));
            } else {
               dispatch(handleGetShoppingList(currentPage));
            }      
            dispatch(hideAlertStatus());      
         })
         .catch(() => {
            dispatch(showAlertStatus("Could not reach server, please contact your network administrator."));
         });
   }
}

export function toggleItemPurchased (id) {
   return {
      type: TOGGLE_ITEM_PURCHASED,
      id,
   }
}