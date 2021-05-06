import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import { FETCH_ALL_PRODUCTS, SHOW_PROD } from "../../../saga/action.types";
import { addtocart } from "../../../saga/actions";
import BreadCrumb from "../../common components/BreadCrumb";
// import { SHOW_PROD } from "../../../action.types";
import ProdQuant from "./ProdQuant";
import ShopRelatedProd from "./ShopRelatedProd";

function Shopdetail() {
  window.location.hash = "detail";
  const [cartitems, setcartitems] = useState([]);
  const dispatch = useDispatch();
  const [setail, setsetail] = useState([]);
  let [quantity, setquantity] = useState(1);
  const maxhandler = (e) => {
    setquantity(quantity + 1);
  };
  const minhandler = (e) => {
    setquantity(quantity - 1);
  };
  const state = useSelector((state) => state);
  const cartItems = useSelector((state) => state.cartReducer.cartItems);

  useEffect(() => {
    setcartitems(cartItems);
    setsetail(state.ProductReducer.singleProd);
  }, [state]);

  const product = {
    title: setail.title,
    image: setail.image,
    price: setail.price,
    count: setail.count,

    quantity: quantity,
    id: setail.id,
  };
  // window.localStorage.setItem('products' , JSON.stringify())
  // const addtocart = ()=>{
  //   dispatch(addtocart(product));
  // console.log('hello');
  // }
  const localcart = () => {
    dispatch(addtocart(product));
     cartitems.length>0 && localStorage.setItem("cartitems", JSON.stringify(cartitems));
  };
  return (
    <>
      <BreadCrumb title={setail.title}></BreadCrumb>

      <div>
        <section className="product-details spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="product__details__pic">
                  <div className="product__details__pic__item">
                    <img
                      className="product__details__pic__item--large"
                      src={setail.image}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="product__details__text">
                  <h3>{setail.title}</h3>
                  <div className="product__details__rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-half-o"></i>
                    <span>(18 reviews)</span>
                  </div>
                  <div className="product__details__price">${setail.price}</div>
                  <p>{setail.description}</p>
                  <div className="product__details__quantity">
                    <ProdQuant
                      inpval={quantity}
                      clickmin={minhandler}
                      clickmax={maxhandler}
                    ></ProdQuant>
                  </div>
                  <button onClick={() => localcart()} className="primary-btn">
                    ADD TO CART
                  </button>
                  <ul>
                    <li>
                      <b>Availability</b> <span>In Stock</span>
                    </li>
                    <li>
                      <b>Shipping</b>
                      <span>
                        01 day shipping. <samp>Free pickup today</samp>
                      </span>
                    </li>
                    <li>
                      <b>Weight</b> <span>0.5 kg</span>
                    </li>
                    <li>
                      <b>Share on</b>
                      <div className="share">
                        <a href="#">
                          <i className="fa fa-facebook"></i>
                        </a>
                        <a href="#">
                          <i className="fa fa-twitter"></i>
                        </a>
                        <a href="#">
                          <i className="fa fa-instagram"></i>
                        </a>
                        <a href="#">
                          <i className="fa fa-pinterest"></i>
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <ShopRelatedProd></ShopRelatedProd>
      </div>
    </>
  );
}

export default Shopdetail;
