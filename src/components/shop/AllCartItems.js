import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CHANGE_CART, REMOVE_ITEM } from "../../saga/action.types";
import { addtocart } from "../../saga/actions";
import ProdQuant from "./details/ProdQuant";
import "./shop.css";
function AllCartItems() {
  const dispatch = useDispatch();
  const [cart, setcart] = useState([]);
  const [quantity, setquantity] = useState(0);
  

  const removeitem = (index) => {
    console.log("hello");
    const olddata = JSON.parse(localStorage.getItem("cartitems"));
    console.log(olddata);
    console.log(index);
    // olddata.splice(index,1)
    console.log(olddata[index]);
    const newdata = olddata.filter((elem) => elem.id != index);
    localStorage.setItem("cartitems", JSON.stringify(newdata));
    window.location.reload();
  };
const cartproducts = useSelector(state => state.cartReducer.cartItems)
  useEffect(() => {
   
    

    setcart(cartproducts);
  }, [cartproducts]);

  
  return (
    <div className="col-lg-12">
      <div className="shoping__cart__table">
        <table>
          <thead>
            <tr>
              <th className="shoping__product">Products</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {cart &&
              cart.map((element, index) => {
                const {image , title , count , quantity , price , id}=element; 
                return (
                  <tr> 
                    <td key={id} className="shoping__cart__item cartimage">
                      <img className="img-fluid" src={image} alt="" />
                      <h5 className="title">{title}</h5>
                    </td>
                    <td className="shoping__cart__price">$ {price}</td>
                    <td className="shoping__cart__quantity">
                      {/* <div className="quantity">
                      <div class="pro-qty">
                        <span>-</span>
                                                <input type="number" value={quantity} />
                                            <span>+</span>
                                            </div>
                      </div> */}
                      {/* dispatch(addtocart({id , price , quantity:e.target.value , title , count , image})) */}
                      <select value={quantity}  onChange={(e) => dispatch(addtocart({id , price , quantity:e.target.value , title , count , image}) )} >
                      {[...Array(count).keys()].map(x =>
                        <option key={x + 1} value={x + 1}>{x + 1}</option>
                      )}

                      </select>
                    </td>
                    <td className="shoping__cart__total">
                      ${ Math.floor(price * quantity)  }
                    </td>
                    <td className="shoping__cart__item__close">
                      <button
                        onClick={() => removeitem(id)}
                        className="icon_close"
                      ></button>
                    </td>
                  </tr>
                );
              })}
            {/* {cart &&
              cart.forEach(function (elem){ 
                return (
                <tr>
                  <td className="shoping__cart__item cartimage">
                    <img className="img-fluid" src={elem.image} alt="" />
                    <h5 className="title">{elem.title}</h5>
                  </td>
                  <td className="shoping__cart__price">$ {elem.price}</td>
                  <td className="shoping__cart__quantity">
                    <div className="quantity">
                      <div className="pro-qty">
                        <span onClick={(e)=>setquantity(quantity-1)}>-</span>
                        <input type="text" value={quantity==0 ? elem.quantity : quantity} />
                        <span onClick={(e)=>setquantity(quantity+1)}>+</span>

                      </div>
                    </div>
                  </td>
                  <td className="shoping__cart__total">
                    $ {elem.price * elem.quantity}
                  </td>
                  <td className="shoping__cart__item__close">
                    <button
                      onClick={()=>removeitem(elem.id)}
                      className="icon_close"
                    ></button>
                  </td>
                </tr>
              )})} */}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AllCartItems;
