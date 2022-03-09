import React, { useEffect, useState } from 'react'
import { connect, useSelector, useDispatch } from 'react-redux'
import {  useNavigate } from 'react-router-dom';

const DscountAndCartTotal = ()=>{ 
    const disPatch = useDispatch();
    const addedItems = useSelector((state) => state.addedItems);
    const total = useSelector((state) => state.total);
    const totalCount = useSelector((state) => state.totalCount);
    const [discount, setDiscount] = useState(0);
    const [discountCode, setDiscountCode] = useState("");
    const history = useNavigate();
    const handeCheckout = (e)=>{
        history('/checkout');
    }

    const handleOnChange = (e)=>{
        setDiscountCode(e.target.value);
    }
    const handeDiscount = (e)=>{
        if(discountCode == 'TEN'){
            setDiscount(10);
        }
        else if(discountCode == 'TWENTY'){
            setDiscount(20);
        }
        else if(discountCode == 'FOURTY'){
            setDiscount(40);
        }
        else{
            alert('Invalid coupon code');
        }
    }
    const getAmount = (totalAmount, discount)=>{
        return totalAmount - totalAmount*discount/100;
    }

    useEffect(()=>{

    },[discount,total])
        return(
            <div className="container">
                <div className="collection">
                    <li className="collection-item">
                            <label>
                                <h6>Discount Coupon(case sensitive)</h6>
                                <input type="input" className="input-field" onChange={(e)=>handleOnChange(e)} />
                                
                                <button className="waves-effect waves-light btn" onClick={handeDiscount}>Apply</button>
                            </label>
                        </li>
                        <li className="collection-item"><b>Total Count: {totalCount}</b></li>
                        <li className="collection-item"><b>Total Amount: {getAmount(total,discount)} $</b></li>
                    </div>
                    <div className="checkout">
                        <button className="waves-effect waves-light btn" onClick={handeCheckout}>Checkout</button>
                    </div>
                 </div>
        )
}

export default connect()(DscountAndCartTotal)
