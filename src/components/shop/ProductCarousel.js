import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { SHOW_PROD } from "../../saga/action.types";
import "./shop.css"
function ProductCarousel() {
  const [latest, setlatest] = useState([]);
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    setlatest(state.ProductReducer.Product);
    // window.location.hash = "shop";
  }, [state]);
    // console.log(latest.slice(0,5));
    console.log(latest);
  return (
    <div className="row">
      <div className="product__discount__slider owl-carousel">
      <div className=" col-lg-4">
          <div className="product__discount__item">
            <div className="product__discount__item__pic">
              <img
                src={latest && latest[0]?.image}
                alt={latest && latest[0]?.title}
                srcset=""
              />
              <div className="product__discount__percent">-20%</div>
              <ul className="product__item__pic__hover">
                <li>
                  <a href="#">
                    <i className="fa fa-heart"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-retweet"></i>
                  </a>
                </li>
                <li>
                  <NavLink
                    onClick={() =>
                      dispatch({ type: SHOW_PROD, id: latest && latest[0]?.id })
                    }
                    to={`/productdetail/${latest && latest[0]?.id}`}
                  >
                    <i className="fa fa-shopping-cart"></i>
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="product__discount__item__text">
              <span>{latest && latest[0]?.category}</span>
              <h5>
                <NavLink
                  onClick={() =>
                    dispatch({ type: SHOW_PROD, id: latest && latest[0]?.id })
                  }
                  to={`/productdetail/${latest && latest[0]?.id}`}
                >
                  {latest && latest[0]?.title}
                </NavLink>
              </h5>
              <div className="product__item__price">
                ${latest && latest[0]?.price} <span>$36.00</span>
              </div>
            </div>
          </div>
        </div>
        <div className=" col-lg-4">
          <div className="product__discount__item">
            <div className="product__discount__item__pic">
              <img
                src={latest && latest[1]?.image}
                alt={latest && latest[1]?.title}
                srcset=""
              />
              <div className="product__discount__percent">-20%</div>
              <ul className="product__item__pic__hover">
                <li>
                  <a href="#">
                    <i className="fa fa-heart"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-retweet"></i>
                  </a>
                </li>
                <li>
                  <NavLink
                    onClick={() =>
                      dispatch({ type: SHOW_PROD, id: latest && latest[1]?.id })
                    }
                    to={`/productdetail/${latest && latest[1]?.id}`}
                  >
                    <i className="fa fa-shopping-cart"></i>
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="product__discount__item__text">
              <span>{latest && latest[1]?.category}</span>
              <h5>
                <NavLink
                  onClick={() =>
                    dispatch({ type: SHOW_PROD, id: latest && latest[1]?.id })
                  }
                  to={`/productdetail/${latest && latest[1]?.id}`}
                >
                  {latest && latest[1]?.title}
                </NavLink>
              </h5>
              <div className="product__item__price">
                ${latest && latest[1]?.price} <span>$36.00</span>
              </div>
            </div>
          </div>
        </div><div className=" col-lg-4">
          <div className="product__discount__item">
            <div className="product__discount__item__pic">
              <img
                src={latest && latest[2]?.image}
                alt={latest && latest[2]?.title}
                srcset=""
              />
              <div className="product__discount__percent">-20%</div>
              <ul className="product__item__pic__hover">
                <li>
                  <a href="#">
                    <i className="fa fa-heart"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-retweet"></i>
                  </a>
                </li>
                <li>
                  <NavLink
                    onClick={() =>
                      dispatch({ type: SHOW_PROD, id: latest && latest[2]?.id })
                    }
                    to={`/productdetail/${latest && latest[2]?.id}`}
                  >
                    <i className="fa fa-shopping-cart"></i>
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="product__discount__item__text">
              <span>{latest && latest[2]?.category}</span>
              <h5>
                <NavLink
                  onClick={() =>
                    dispatch({ type: SHOW_PROD, id: latest && latest[2]?.id })
                  }
                  to={`/productdetail/${latest && latest[2]?.id}`}
                >
                  {latest && latest[2]?.title}
                </NavLink>
              </h5>
              <div className="product__item__price">
                ${latest && latest[2]?.price} <span>$36.00</span>
              </div>
            </div>
          </div>
        </div><div className=" col-lg-4">
          <div className="product__discount__item">
            <div className="product__discount__item__pic">
              <img
                src={latest && latest[3]?.image}
                alt={latest && latest[3]?.title}
                srcset=""
              />
              <div className="product__discount__percent">-20%</div>
              <ul className="product__item__pic__hover">
                <li>
                  <a href="#">
                    <i className="fa fa-heart"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-retweet"></i>
                  </a>
                </li>
                <li>
                  <NavLink
                    onClick={() =>
                      dispatch({ type: SHOW_PROD, id: latest && latest[3]?.id })
                    }
                    to={`/productdetail/${latest && latest[3]?.id}`}
                  >
                    <i className="fa fa-shopping-cart"></i>
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="product__discount__item__text">
              <span>{latest && latest[3]?.category}</span>
              <h5>
                <NavLink
                  onClick={() =>
                    dispatch({ type: SHOW_PROD, id: latest && latest[3]?.id })
                  }
                  to={`/productdetail/${latest && latest[3]?.id}`}
                >
                  {latest && latest[3]?.title}
                </NavLink>
              </h5>
              <div className="product__item__price">
                ${latest && latest[3]?.price} <span>$36.00</span>
              </div>
            </div>
          </div>
        </div><div className=" col-lg-4">
          <div className="product__discount__item">
            <div className="product__discount__item__pic">
              <img
                src={latest && latest[4]?.image}
                alt={latest && latest[4]?.title}
                srcset=""
              />
              <div className="product__discount__percent">-20%</div>
              <ul className="product__item__pic__hover">
                <li>
                  <a href="#">
                    <i className="fa fa-heart"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-retweet"></i>
                  </a>
                </li>
                <li>
                  <NavLink
                    onClick={() =>
                      dispatch({ type: SHOW_PROD, id: latest && latest[4]?.id })
                    }
                    to={`/productdetail/${latest && latest[4]?.id}`}
                  >
                    <i className="fa fa-shopping-cart"></i>
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="product__discount__item__text">
              <span>{latest && latest[4]?.category}</span>
              <h5>
                <NavLink
                  onClick={() =>
                    dispatch({ type: SHOW_PROD, id: latest && latest[4]?.id })
                  }
                  to={`/productdetail/${latest && latest[4]?.id}`}
                >
                  {latest && latest[4]?.title}
                </NavLink>
              </h5>
              <div className="product__item__price">
                ${latest && latest[4]?.price} <span>$36.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCarousel;
