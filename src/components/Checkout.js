import React, {useEffect, useState} from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useNavigate} from 'react-router-dom';
import { updateRedirect, resetState } from './actions/cartActions';
import '../index.css'
 const Checkout = ()=>{
     const isLoggedin = useSelector((state) => state.isLoggedin);
     const totalCount = useSelector((state) => state.totalCount);
     const total = useSelector((state) => state.total);
     const userAddress = useSelector((state) => state.userAddress);
     let history = useNavigate();
     const disPatch = useDispatch();
     

     const goToLoginPage = (e)=>{
        disPatch(updateRedirect("updateRedirect"));
        history('/login');
     }
     const handeCheckout= (e)=>{
         disPatch(resetState('resetState'));
        history('/');
     }
    return(

        <div className="app login-app">
          
            { isLoggedin ?  <div className="login-form">
                
                <div className="title">
                    <h5>Checkout page</h5>
                </div>

                <div className="container">
                <div className="collection">
                        <li className="collection-item"><b>Total Count: {totalCount}</b></li>
                        <li className="collection-item"><b>Total Amount: {total} $</b></li>
                        <li className="collection-item"><b>Address: {userAddress} $</b></li>
                    </div>
                    <div className="checkout">
                        <button className="waves-effect waves-light btn" onClick={handeCheckout}>Confirm</button>
                    </div>
                 </div>

            </div> : <div className="login-form">
                <h4>You are not logged in please click here to login</h4>
                <button className="btn-small" onClick={goToLoginPage}>Go to Login page</button>
                </div>}
           
        </div>
    )
}

export default connect()(Checkout);
