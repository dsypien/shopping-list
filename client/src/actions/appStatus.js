export const SHOW_LOADING = "SHOW_LOADING";
export const HIDE_LOADING = "HIDE_LOADING";
export const ADD_ALERT_STATUS = "ADD_ALERT_STATUS";
export const HIDE_ALERT_STATUS = "HIDE_ALERT_STATUS";

export function showLoading () {
   return {
      type: SHOW_LOADING
   };
}

export function hideLoading () {
   return {
      type: HIDE_LOADING
   };
}

export function showAlertStatus (statusText) {
   return {
      type: ADD_ALERT_STATUS,
      statusText,  
   }
}

export function hideAlertStatus () {
   return {
      type: HIDE_ALERT_STATUS
   }
}