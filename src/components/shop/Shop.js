import React, { useEffect } from "react";
import BreadCrumb from "../common components/BreadCrumb";
import ShopProducts from "./ShopProducts";
import SideBar from "./SideBar";
import { useDispatch } from "react-redux";
import { FETCH_ALL_PRODUCTS } from "../../saga/action.types";
import { useHistory } from "react-router";

function Shop() {
  const dispatch = useDispatch()
  const history =  useHistory()

  const loaddata = async()=>{
    dispatch({type:FETCH_ALL_PRODUCTS})
    if(history.action==="PUSH"){
      window.location.hash = "shop" 

    }
  }
  useEffect(()=>{
    loaddata()

  },[])
  
  return (
    <>
      <BreadCrumb title="Shop"></BreadCrumb>

      <section class="product spad">
        <div class="container">
          <div class="row">
            <SideBar></SideBar>
            <ShopProducts></ShopProducts>
          </div>
        </div>
      </section>
    </>
  );
}

export default Shop;
