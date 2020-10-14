import React from 'react';
import logo from '../../images/logos/logo.png';
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";

//this page is for customer to give review
//and submit. this will update in home page review section


const Review = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data =>{
        fetch('http://localhost:5002/review', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data) 
        })
        .then(response=> response.json())
        .then(data => alert('review') )
        console.log(data)
    };

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
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type='text' name="Name" placeholder='Your Name' ref={register} className ='long'/>
                    <br/>
                    <br/>
                    <input type="text" name="company" placeholder = 'Company Name' ref={register} className='long' />
                    <br/>
                    <br/>
                    <input type="text" name="description" placeholder = 'description' ref={register} className ='long pt-5'/>
                    <br/>
                    <br/>
    
                    <button type="submit" class="btn btn-dark">Submit</button>
                </form>
                </div>
            </div>
        </div>
    );
};

export default Review;