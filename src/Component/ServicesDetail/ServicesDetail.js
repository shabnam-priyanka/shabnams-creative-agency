import React from 'react';
import './ServicesDetail.css';
import logo from '../../images/logos/logo.png';
const ServicesDetail = () => {
    return (
        <div className ='d-flex' >
            

            <div className ='details' >
            <img src={logo} alt="" className='w-50' />
                <h6>Order</h6>
                <h6>Service list</h6>
                <h6>Review</h6>
            </div>
            <form className ='style' >
                <input type="text"  placeholder = 'Your Name/company name' />
                <br/>
                <input type="email"  placeholder = 'Your email address' />
                <br/>
                <input type="text"  placeholder = 'Graphic Design' />
                <br/>
                <input type="email"  placeholder = 'Project Details' />
                <br/>
                <input type="text"  placeholder = 'Price' />
                <br/>
                <button type="submit" class="btn btn-dark">Submit</button>
            </form>
        </div>
    );
};

export default ServicesDetail;