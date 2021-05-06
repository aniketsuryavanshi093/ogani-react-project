import { combineReducers } from "redux";
import { cartReducer } from "./cartReducer";
import { ProductReducer } from "./reducer";



const  rootReducer = combineReducers({
   ProductReducer,
     cartReducer,
})
export default rootReducer;