import { SHOW_LOADING, HIDE_LOADING, ADD_ALERT_STATUS, HIDE_ALERT_STATUS } from "../actions/appStatus";

export default function appStatusReducer (state = {loading: false, alertText: ""}, action) {
   switch (action.type) {
      case SHOW_LOADING:
         return {
            ...state,
            loading: true
         }
      case HIDE_LOADING:
         return {
            ...state,
            loading: false
         }
      case ADD_ALERT_STATUS:
         return {
            ...state,
            alertText: action.statusText
         }
      case HIDE_ALERT_STATUS:
         return {
            ...state,
            alertText: ""
         }
      default:
         return state;
   }
}