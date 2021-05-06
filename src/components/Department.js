import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from 'react-router-dom'
import { getproductbycategory } from "../saga/actions";

function Department() {
    const dispatch = useDispatch()
  return (
    <div className="hero__categories">
      <div className="hero__categories__all">
        <i className="fa fa-bars"></i>
        <span>All departments</span>
      </div>
      <ul>
        <li>
          <NavLink onClick={()=>dispatch(getproductbycategory("men's clothing"))}  to="/shop">men's clothing </NavLink>
        </li>
        <li>
          <NavLink onClick={()=>dispatch(getproductbycategory(`women's clothing`))} to="/shop">womens clothing</NavLink>
        </li>
        <li>
          <NavLink onClick ={()=>dispatch(getproductbycategory(`jewelery`))}to="/shop">jwellery</NavLink>
        </li>
        <li>
          <NavLink onClick ={()=>dispatch(getproductbycategory(`electronics`))} to="/shop">electronics</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Department;
