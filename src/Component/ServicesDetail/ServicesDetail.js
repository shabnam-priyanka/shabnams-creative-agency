import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import AdminPanel from '../AdminPanel/AdminPanel';
import UserPanel from '../UserPanel/UserPanel';

const ServicesDetail = () => {
    const {loggedInUser, setLoggedInUser} = useContext(UserContext);
    const [admin, setAdmin] = useState([])
    useEffect(()=>{
        fetch(`https://serene-temple-56394.herokuapp.com/adminEmail?email=${loggedInUser.email}`)
        .then(response => response.json())
        .then(data => setAdmin(data))
    },[])


    return (
        <div>
            
            {admin.length ? <AdminPanel></AdminPanel> : <UserPanel></UserPanel> }
        </div>
    );
};

export default ServicesDetail;