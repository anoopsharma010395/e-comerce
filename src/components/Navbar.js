import React, {useEffect, useState} from 'react';
import { connect, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../index.css'
 const Navbar = ()=>{
     const count = useSelector((state) => state.totalCount);
     const isLoggedin = useSelector((state) => state.isLoggedin);

     useEffect(()=>{
         console.log(count);
     })
    return(
            <nav className="nav-wrapper">
                <div className="container">
                    <Link to="/" className="brand-logo">Shopping</Link>
                    <ul className="right">
                        {isLoggedin ? <li><Link to="/my-account">My Account</Link></li> : <li><Link to="/login">Login</Link></li> }
                        <li><Link to="/cart"><i className="material-icons">shopping_cart</i></Link>  <span className="count">{count}</span></li>
                    </ul>
                </div>
            </nav>
    )
}

const mapStateToProps = (state)=>{
    return{
        items: state.addedItems,
        //addedItems: state.addedItems
    }
}

export default connect(mapStateToProps)(Navbar);
