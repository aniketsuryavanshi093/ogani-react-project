import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Department from './Department'
function Header() {
const [settotal, setsettotal] = useState(0)
        const  getlocal = ()=> {
            const data =  window.localStorage.getItem("product")
         const response = JSON.parse(data)
         let totalitem = 0;
         if(response){response.map((elem , index)=>(
             setsettotal(settotal+  index)
         ))}
         console.log(settotal);
           
        }
    useEffect(()=>{
         getlocal()
    },[])
    return (
        <>
        <div className="humberger__menu__overlay">
        
        <header className="header">
            <div className="header__top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="header__top__left">
                                <ul>
                                    <li><i className="fa fa-envelope"></i> hello@colorlib.com</li>
                                    <li>Free Shipping for all Order of $99</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="header__top__right">
                                <div className="header__top__right__social">
                                    <a href="#"><i className="fa fa-facebook"></i></a>
                                    <a href="#"><i className="fa fa-twitter"></i></a>
                                    <a href="#"><i className="fa fa-linkedin"></i></a>
                                    <a href="#"><i className="fa fa-pinterest-p"></i></a>
                                </div>
                                <div className="header__top__right__language">
                                    <img src="img/language.png" alt=""/>
                                    <div>English</div>
                                    <span className="arrow_carrot-down"></span>
                                    <ul>
                                        <li><a href="#">Spanis</a></li>
                                        <li><a href="#">English</a></li>
                                    </ul>
                                </div>
                                <div className="header__top__right__auth">
                                    <a href="#"><i className="fa fa-user"></i> Login</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="header__logo">
                            <a href="./index.html"><img src="img/logo.png" alt=""/></a>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <nav className="header__menu">
                            <ul>
                            <li> <NavLink  activeclassName="active" exact  to="/"> Home </NavLink></li>
                            <li>                <NavLink activeclassName="active"  to="/shop"> shop </NavLink>
</li>
                            <li><a href="#">Pages</a>
                                <ul className="header__menu__dropdown">
                                    <li><NavLink activeclassName="active" to="/productdetail">Shop Details</NavLink></li>
                                    <li><a href="/cart">Shoping Cart</a></li>
                                    <li><a href="./checkout.html">Check Out</a></li>
                                    <li><a href="./blog-details.html">Blog Details</a></li>
                                </ul>
                            </li>
                            <li><NavLink activeclassName="active" to="/blog"> Blog </NavLink></li>
                            <li><a href="/contact">Contact</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-lg-3">
                        <div className="header__cart">
                            <ul>
                                <li><a href="#"><i className="fa fa-heart"></i> <span>1</span></a></li>
                                <li><NavLink activeclassName="active" to="/cart">  <i className="fa fa-shopping-bag"></i> <span>{settotal+1}</span></NavLink></li>
                            </ul>
                            <div className="header__cart__price">item: <span>$150.00</span></div>
                        </div>
                    </div>
                </div>
                <div className="humberger__open">
                    <i className="fa fa-bars"></i>
                </div>
            </div>
        </header>
        <section className="hero hero-normal">
        <div className="container">
            <div className="row">
                <div className="col-lg-3">
                    
                    <Department></Department>
                </div>
                <div className="col-lg-9">
                    <div className="hero__search">
                        <div className="hero__search__form">
                            <form action="#">
                                <div className="hero__search__categories">
                                    All Categories
                                    <span className="arrow_carrot-down"></span>
                                </div>
                                <input type="text" placeholder="What do yo u need?"/>
                                <button type="submit" className="site-btn">SEARCH</button>
                            </form>
                        </div>
                        <div className="hero__search__phone">
                            <div className="hero__search__phone__icon">
                                <i className="fa fa-phone"></i>
                            </div>
                            <div className="hero__search__phone__text">
                                <h5>+65 11.188.888</h5>
                                <span>support 24/7 time</span>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </section>
       
        </div>
        </>
    )
}

export default Header
