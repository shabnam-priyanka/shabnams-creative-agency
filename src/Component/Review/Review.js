import React, { createContext, useContext, useState } from 'react';
import logo from '../../images/logos/logo.png';
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { UserContext } from '../../App';


//this page is for customer to give review
//and submit. this will update in home page review section


const Review = () => {
    const { loggedInUser } = useContext(UserContext);
    const { register, handleSubmit, watch, errors } = useForm();
    
    const onSubmit = data => {
        const info = { ...loggedInUser, ...data };
        fetch('http://localhost:5002/addReview', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(info)
        })
            .then(res => res.json(info))
            .then(result => {
                if (result) {
                    alert('successfully submitted')
                }
            })


    };
    return (
        <div>
            <div className="d-flex container-fluid p-3 ">
                <img className="img-fluid " style={{ height: '8vh' }} src={logo} alt="" />
                <h4 style={{ marginLeft: "10vw" }}>Review</h4>
                <h5 className="ml-auto">{loggedInUser.name}</h5>
            </div>
            <aside className='mt-5 sidebar'>
                <div className="d-flex mt-3">
                    <i class="fa fa-shopping-cart pl-5 mr-2"></i>
                    <Link to="/orderstatus"> <h6> Order</h6></Link>
                </div>
                <div className="d-flex mt-3">
                    <i class="fas fa-shopping-basket pl-5 mr-2"></i>
                    <Link to="/servicedetails"> <h6> Service list</h6></Link>
                </div>
                <div className="d-flex mt-3">
                    <i class="fas fa-comment-dots fa-flip-horizontal pr-5 mr-2"></i>
                    <Link to="/review"> <h6> Review</h6></Link>
                </div>
            </aside>
            <main >
                <form className="container container-fluid" onSubmit={handleSubmit(onSubmit)}>
                    <input name="Name" className="p-4 form-control" defaultValue={loggedInUser.name} ref={register} /> <br />
                    <input name="company" className="p-4 form-control" placeholder="Your Company's name, designation" ref={register({ required: true })} />
                    <br />
                    <input name="description" className="form-control" placeholder='Description' style={{ height: "20vh" }} ref={register} /> 
                    <br />
                    <input className="pr-5 pl-5 bg-dark text-white pt-2 pb-2" style={{ borderRadius: "5px" }} type="submit" />
                </form>
            </main>
        </div>
    );
};


export default Review;