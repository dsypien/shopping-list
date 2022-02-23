import { SHOW_LOADING, HIDE_LOADING } from "../actions/loading";

export default function loadingReducer (state = true, action) {
   switch (action.type) {
      case SHOW_LOADING:
         return true
      case HIDE_LOADING:
         return false;
      default:
         return state;
   }
}