import { ADD_TO_CART } from "./action.types";

const initialState = {
    cartItems : localStorage.getItem( 'cartitems') ? JSON.parse(localStorage.getItem( 'cartitems')):[],

} 

  export const  cartReducer = (state = initialState  , action)=>{
    switch (action.type) {
        case ADD_TO_CART:
            const item = action.payload.id;
            const existitem = state.cartItems.find(x=> x.id == item)
            if(existitem){
//    window.localStorage.setItem('cartitems' , JSON.stringify(state.cartItems))

                return {
                    ...state , 
                    cartItems: state.cartItems.map((x)=>
                        x.id == item ? action.payload : x 
                    ),
                }
            }
            else{

                return {...state , cartItems:[...state.cartItems , action.payload]}
            }
    
        default:
            return state
    }
}
// case ADD_TO_CART:
//     const cartprod = window.localStorage.getItem("product");
//     const cart = JSON.parse(cartprod);
//     if (state.CartProd == null) {
//       window.localStorage.setItem(
//         "product",
//         JSON.stringify([action.payload])
//       );
//     } else {
//       const data = window.localStorage.setItem(
//         "product",
//         JSON.stringify([...state.CartProd, action.payload])
//       );
//     } 
//     const cartdata = window.localStorage.getItem("product");
//     return {
//       ...state,

//       CartProd: [...state.CartProd, action.payload],
//     };