import React, { useContext, useEffect, useState } from 'react';
import logo from '../../images/logos/logo.png';
import { Link } from "react-router-dom";
import { UserContext } from '../../App';

//this is order status after customer has chosen the category
///NOT WORKING 
const OrderStatus = () => {
    const {loggedInUser, setLoggedInUser} = useContext(UserContext);
    const [status, setStatus] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:5002/orderstatus?email=${loggedInUser.email} `)
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
                <h1>Order </h1>
                    {
                        status.map(tus => <div>
                            <h1>Name: {tus.Name}</h1>
                            <h2>E-mail: {tus.email}</h2>
                            <h3>Project: {tus.project}</h3>
                        </div> )
                    }
                
            </div>
            </div>
        </div>
    );
};

export default OrderStatus;