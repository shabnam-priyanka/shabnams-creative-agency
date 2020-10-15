import React from 'react';
import './ServicesDetail.css';
import logo from '../../images/logos/logo.png';
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

//this page is once customer click on home page 
//on which service they want they have to fill up form
// info is submitting in backend shabnam file

const ServicesDetail = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data =>{
        fetch('http://localhost:5002/addOrder', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data) 
        })
        .then(response=> response.json())
        .then(data => alert('data gase') )
        console.log(data)
    };


    return (
        <div>
            <img src={logo} alt="" className='logo mt-5 img-fluid' />

            <div className='d-flex' >
                <div className='details' >

                    <Link to="/orderstatus"> <h6 >Order</h6></Link>
                    <Link to="/orderstatus"> <h6>Service list</h6></Link>
                    <Link to="/review"> <h6>Review</h6></Link>
                </div>
                <div className='style p-5 mb-5 mr-5' >
                <form onSubmit={handleSubmit(onSubmit)} className="container container-fluid">
                    <input type='text' name="Name" placeholder='Your Name' ref={register} className ='long'/>
                    <br/>
                    <br/>
                    <input type="email" name="email" placeholder = 'Your email address' ref={register} className='long' />
                    <br/>
                    <br/>
                    <input type="text" name="graphic" placeholder = 'Graphic Design' ref={register} className ='long'/>
                    <br/>
                    <br/>
                    <input type="text" name="project" placeholder = 'Project Details' ref={register} className =' long pt-5'/>
                    <br/>
                    <br/>
                    <input type="text" name="price" placeholder = 'Price' /><input type='file' />
                    <br/>
                    <br/>
                    <button type="submit" class="btn btn-dark">Submit</button>
                </form>
                </div>
            </div>
            
        </div>

    );
};

export default ServicesDetail;