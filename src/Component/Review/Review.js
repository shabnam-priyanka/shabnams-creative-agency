import React from 'react';
import logo from '../../images/logos/logo.png';
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';

//this page is for customer to give review
//and submit. this will update in home page review section

const Review = () => {
    return (
        <div>
            
            <img src={logo} alt="" className='logo mt-5' />
            <div className='d-flex' >
                <div className='details'>
                    <Link to="/servicedetails"> <h6>Order</h6></Link>
                    <Link to="/servicedetails"> <h6>Service list</h6></Link>
                    <Link to="/review"> <h6>Review</h6></Link>
                </div>
                <div className='style p-5 mb-5 mr-5' >
                    <form style={{ margin: '40px', padding: '40px' }}>

                        <input type='email' name='email' placeholder='Your email address' className='long' required />
                        <br />
                        <br />
                        <input type='text' name='name' placeholder=' Your name/company name' className='long' />
                        <br />
                        <br />
                        <input type='text' name='msg' placeholder='Your message ' className='long p-5' required />

                        <br />
                        <br />
                        <Button variant='dark' >Send </Button>
                        <br />
                        <br />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Review;