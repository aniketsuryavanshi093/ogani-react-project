import React from 'react'
import { NavLink } from 'react-router-dom'
import img from "../../breadcrumb.jpg"
function BreadCrumb({title}) {
    return (
             <section className="breadcrumb-section set-bg" data-setbg={img}>
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <div className="breadcrumb__text">
                        <h2>Organi {title}</h2>
                        <div className="breadcrumb__option">
                            <NavLink to="/">Home</NavLink>
                            <span>{title}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default BreadCrumb
