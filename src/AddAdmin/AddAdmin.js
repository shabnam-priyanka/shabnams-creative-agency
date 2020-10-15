import React from 'react';
import logo from '../images/logos/logo.png';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";


const AddAdmin = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data =>{
        fetch('http://localhost:5002/addadmin', {
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

                <aside style={{ marginTop: '10vh', zIndex: '-1' }}>
                <Link to="adminpanel">
                    <div className="d-flex mt-3" style={{ cursor: 'pointer' }}>
                    <i class="fas fa-shopping-basket pl-5 mr-2"></i>
                        <h6>Service List</h6>
                    </div>
                </Link>
            
                <Link to='/addservice' style={{ textDecoration: 'none' }}>
                    <div className="d-flex">
                    <i class="fas fa-plus pl-5 mr-2"></i>  
                        <h6>Add services</h6>
                    </div>
                </Link>
                
                <Link to='/addadmin' style={{ textDecoration: 'none' }}>
                    <div className="d-flex">
                    <i class="fas fa-user-shield pl-5 mr-2"></i>    
                        <h6>Make Admin</h6>
                    </div>
                </Link>
            
            </aside>
                </div>
                <div className='style p-5 mb-5 mr-5' >
                <form onSubmit={handleSubmit(onSubmit)} className="container container-fluid">
                    
                    <input type="email" name="email" placeholder = 'Your email address' ref={register} className='long' />
                    <br/>
                    <br/>
                    <button type="submit" class="btn btn-dark">Submit</button>
                </form>
                </div>
            </div>
            
        </div>

    );
};

export default AddAdmin;