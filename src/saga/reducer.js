import {
  ADD_TO_CART,
  CHANGE_CART,
  FETCH_CART,
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_SUCCESS,
  GET_BY_PRODUCT_CAT,
  REMOVE_ITEM,
  SET_PRICE,
  SHOW_PROD,
} from "./action.types";

// reducer with initial state
const initialState = {
  Product: null,
  error: null,
  singleProd: {
    title: null,
    image: null,
    price: null,
    description: null,
    id: null,
  },
  ProductCat: null,
  setPrice: null,
  CartProd: null,
};

export function ProductReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS_SUCCESS:
      const setcart = localStorage.getItem("product");

      return {
        ...state,
        CartProd: JSON.parse(setcart),
        Product: action.product,
      };
    case FETCH_PRODUCTS_FAILURE:
      return { ...state, Product: null, error: action.error };
    case SHOW_PROD:
      const product = state.Product && state.Product.filter((elem) => elem.id == action.id);
      return {
        ...state,
        singleProd: {
          title: product[0].title,
          image: product[0].image,
          id: product[0].id,
          description: product[0].description,
          price: product[0].price,
          count : product[0].count,
        },
      };
    case GET_BY_PRODUCT_CAT:
      const catProducts = state.Product.filter(
        (elem) => elem.category == action.category
      );
      return {
        ...state,
        ProductCat: catProducts,
      };
    case SET_PRICE:
      console.log(action.payload.max);
      const setprice = state.Product.filter(
        (elem) =>
          elem.price < action.payload.max && elem.price > action.payload.min
      );
      return {
        ...state,
        setPrice: setprice,
      };
   
    
    default:
      return state;
  }
}
