import React from 'react';
import './ServicesDetail.css';
import logo from '../../images/logos/logo.png';
import { Link } from "react-router-dom";

//this page is once customer click on home page 
//on which service they want they have to fill up form


const ServicesDetail = () => {
    return (
        <div>
            <img src={logo} alt="" className='logo mt-5' />

            <div className ='d-flex' >
            <div className ='details' >
            
            <Link to="/orderstatus"> <h6>Order</h6></Link>
            <Link to="/orderstatus"> <h6>Service list</h6></Link>
            <Link to="/review"> <h6>Review</h6></Link>
            </div>
            <form className ='style p-5 mb-5 mr-5' >
                <input type="text"  placeholder = 'Your Name/company name' className ='long' />
                <br/>
                <br/>
                <input type="email"  placeholder = 'Your email address'  className='long' />
                <br/>
                <br/>
                <input type="text"  placeholder = 'Graphic Design' className ='long'/>
                <br/>
                <br/>
                <input type="email"  placeholder = 'Project Details' className =' long pt-5'/>
                <br/>
                <br/>
                <input type="text"  placeholder = 'Price' /><input type='file' />
                <br/>
                <br/>
                <button type="submit" class="btn btn-dark">Submit</button>
            </form>
        </div>
        </div>
        
    );
};

export default ServicesDetail;