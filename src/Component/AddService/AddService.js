import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import logo from '../../images/logos/logo.png';
import { UserContext } from '../../App';


const AddService = () => {
    const {loggedInUser, setLoggedInUser} = useContext(UserContext);
    const { register, handleSubmit, watch, errors } = useForm();
    
    const onSubmit = data => {
        const info = { ...loggedInUser, ...data };
        fetch('http://localhost:5002/addService', {
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
            <img src={logo} alt=""  className='logo mt-5'/>

<div className="m-5">
    
<aside style={{ marginTop: '10vh', zIndex: '-1' }}>
                <Link to="/servicedetails">
                    <div className="d-flex mt-3" style={{ cursor: 'pointer' }}>
                    <i class="fas fa-shopping-basket pl-5 mr-2"></i>
                        <h6>Service List</h6>
                    </div>
                </Link>
            
                <Link to='/admin' style={{ textDecoration: 'none' }}>
                    <div className="d-flex">
                    <i class="fas fa-plus pl-5 mr-2"></i>  
                        <h6>Add services</h6>
                    </div>
                </Link>
                
                <Link to='/admin' style={{ textDecoration: 'none' }}>
                    <div className="d-flex">
                    <i class="fas fa-user-shield pl-5 mr-2"></i>    
                        <h6>Make Admin</h6>
                    </div>
                </Link>
            
            </aside>
            </div>
            <div>
            <form className="container container-fluid" onSubmit={handleSubmit(onSubmit)}>
                    <input name="Name" className="p-4 form-control"placeholder="Service Title"  defaultValue={loggedInUser.name} ref={register} /> <br />
                    
                    <br />
                    <input name="description" className="form-control" placeholder='Description' style={{ height: "20vh" }} ref={register} /> 
                    <br />
                    <input className="pr-5 pl-5 bg-dark text-white pt-2 pb-2" style={{ borderRadius: "5px" }} type="submit" /><input type = 'file'/>
                </form>
            </div>
        </div>
    );
};

export default AddService;