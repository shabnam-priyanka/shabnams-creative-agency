import React, { useEffect, useState } from 'react';
import logo from '../../images/logos/logo.png';
import { Link } from "react-router-dom";

//this is order status after customer has chosen the category
///NOT WORKING 
const OrderStatus = () => {

    const [status, setStatus] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5002/status')
        .then(response => response.json())
        .then(data => setStatus(data))
    },[])

    return (
        <div>
            
            <img src={logo} alt="" className='logo mt-5'/>
            <div className ='d-flex' >
            <div className ='details'>
            <Link to="/servicedetails"> <h6>Order</h6></Link>
            <Link to="/servicedetails"> <h6>Service list</h6></Link>
            <Link to="/review"> <h6>Review</h6></Link>
            </div>
            <div className ='style p-5 mb-5 mr-5' >
                
                    {
                        status.map(tus => <h1>{tus.title}{tus.image} {tus.description} </h1> )
                    }
                
            </div>
            </div>
        </div>
    );
};

export default OrderStatus;