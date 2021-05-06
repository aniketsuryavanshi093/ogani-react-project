import { Button } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { getproductbycategory } from '../../saga/actions'
import "./shop.css"
function SideBar() {
    const dispatch = useDispatch()
    const state = useSelector(state => state.ProductReducer.Product);
    const [latest, setlatest] = useState([]) 
    useEffect(()=>{
      if(state){
        setlatest(state.slice(0,3))

      }
    },[state])
    console.log(latest);
    const [min, setmin] = useState()
    const [max, setmax] = useState()
    console.log(min , max);
    return (
       
            <div className="col-lg-3 col-md-5">
                    <div className="sidebar">
                        <div className="sidebar__item">
                            <h4>Department</h4>
                            <ul>
                                <li><NavLink   className="department" onClick={()=>dispatch(getproductbycategory("men's clothing"))} to="#"><a href="#filter__item">Mens Clothing</a></NavLink></li>
                                <li><NavLink className="department" onClick = {()=>dispatch(getproductbycategory(`jewelery`))} to="#"><a href="#filter__item">Jwellery</a></NavLink></li>
                                <li><NavLink className="department" onClick = {()=>dispatch(getproductbycategory("electronics"))} to="#"><a href="#filter__item">Electronics</a></NavLink></li>
                                <li><NavLink className="department" onClick = {()=>dispatch(getproductbycategory("women's clothing"))} to="#"><a href="#filter__item">Women's Clothing</a></NavLink></li>
                               
                            </ul>
                        </div>
                        <div className="sidebar__item">
                            <h4>Price</h4>
                            <div className="price-range-wrap">
                              
                                <div className="range-slider">
                                    <div className="">
                                        <input type="number" value = {min} placeholder="min" onChange={(e)=>setmin(e.target.value)}/>
                                        <input type="number" value = {max} placeholder="max" onChange={(e)=>setmax(e.target.value)} />
                                    </div>
                                </div>
                                <Button variant="outlined" onClick={()=>dispatch({type:"SET_PRICE" , payload:{max:max, min:min}})} p="3">Search</Button>
                                
                            </div>
                        </div>
                        <div className="sidebar__item sidebar__item__color--option">
                            <h4>Colors</h4>
                            <div className="sidebar__item__color sidebar__item__color--white">
                                <label for="white">
                                    White
                                    <input type="radio" id="white"/>
                                </label>
                            </div>
                            <div className="sidebar__item__color sidebar__item__color--gray">
                                <label for="gray">
                                    Gray
                                    <input type="radio" id="gray"/>
                                </label>
                            </div>
                            <div className="sidebar__item__color sidebar__item__color--red">
                                <label for="red">
                                    Red
                                    <input type="radio" id="red"/>
                                </label>
                            </div>
                            <div className="sidebar__item__color sidebar__item__color--black">
                                <label for="black">
                                    Black
                                    <input type="radio" id="black"/>
                                </label>
                            </div>
                            <div className="sidebar__item__color sidebar__item__color--blue">
                                <label for="blue">
                                    Blue
                                    <input type="radio" id="blue"/>
                                </label>
                            </div>
                            <div className="sidebar__item__color sidebar__item__color--green">
                                <label for="green">
                                    Green
                                    <input type="radio" id="green"/>
                                </label>
                            </div>
                        </div>
                       
                        <div className="sidebar__item">
                            <div className="latest-product__text">
                                <h4>Latest Products</h4>
                                <div className="latest-product__slider owl-carousel">
                                    <div className="latest-prdouct__slider__item">
                                      {latest.map((elem)=>(
                                        <a href="#" className="latest-product__item">
                                            <div className="latest-product__item__pic">
                                                <img src={elem?.image} alt={elem?.title}/>
                                            </div>
                                            <div className="latest-product__item__text">
                                                <h6>{elem?.title}</h6>
                                                <span>{elem?.price}</span>
                                            </div>
                                        </a>
                                      ))
                                        
                                      }
                                        
                                    
                                    </div>
                                    <div className="latest-prdouct__slider__item">
                                        <a href="#" className="latest-product__item">
                                            <div className="latest-product__item__pic">
                                                <img src={latest[0]?.image} alt=""/>
                                            </div>
                                            <div className="latest-product__item__text">
                                                <h6>{latest[0]?.title}</h6>
                                                <span>$30.00</span>
                                            </div>
                                        </a>
                                        <a href="#" className="latest-product__item">
                                            <div className="latest-product__item__pic">
                                                <img src="img/latest-product/lp-2.jpg" alt=""/>
                                            </div>
                                            <div className="latest-product__item__text">
                                                <h6>Crab Pool Security</h6>
                                                <span>$30.00</span>
                                            </div>
                                        </a>
                                        <a href="#" className="latest-product__item">
                                            <div className="latest-product__item__pic">
                                                <img src="img/latest-product/lp-3.jpg" alt=""/>
                                            </div>
                                            <div className="latest-product__item__text">
                                                <h6>Crab Pool Security</h6>
                                                <span>$30.00</span>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                            </div>
                        </div>
                  
              
               
      
    )
}

export default SideBar

                    