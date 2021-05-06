import React, { useEffect } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/home/Home";
import { BrowserRouter , Route , Link , Switch } from "react-router-dom";
import Shop from "./components/shop/Shop";
import Blog from "./components/Blog/Blog";
import Contact from "./components/contact/Contact";
import Cart from "./components/shop/Cart";
import Shopdetail from "./components/shop/details/Shopdetail";
import axios from "axios";
import { FETCH_ALL_PRODUCTS, FETCH_CART } from "./saga/action.types";
import { useDispatch } from "react-redux";
import { fetchallProduct } from "./saga/actions";


function App() {
  const dispatch = useDispatch()
 
  const loaddata = async()=>{
    dispatch(fetchallProduct())

  }
  useEffect(()=>{
    loaddata()
  },[])
  return (
    <div>
      <Header></Header>
   
          <Route exact path="/" ><Home/></Route>
          <Route exact path="/shop" >
            <Shop></Shop>
          </Route>
          <Route path="/blog"><Blog/></Route>
            <Route path="/contact"><Contact/></Route>
            <Route path = "/productdetail/:id" > <Shopdetail/></Route>
      
            <Route path = "/cart" > <Cart/></Route>
      
      <Footer/>
    </div>
  );
}

export default App;
