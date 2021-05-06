
import { takeLatest, call, put } from "redux-saga/effects";
import { ADD_TO_CART,  CHANGE_CART,  FETCH_ALL_PRODUCTS  , FETCH_CART, GET_BY_PRODUCT_CAT, REMOVE_ITEM, SET_PRICE, SHOW_PROD} from "./action.types";
import { fetchProdSaga ,changecart  ,fetchcart,showProdSaga , getByCat,setPrice , addTocart} from "./sagaHandlers";

export function* watcherSaga() {
    yield takeLatest(FETCH_ALL_PRODUCTS, fetchProdSaga);
    yield takeLatest(SHOW_PROD, showProdSaga());
    yield takeLatest(GET_BY_PRODUCT_CAT, getByCat());
    yield takeLatest(SET_PRICE , setPrice());
    yield takeLatest(ADD_TO_CART , addTocart);
    yield takeLatest(CHANGE_CART , changecart);



    
  }