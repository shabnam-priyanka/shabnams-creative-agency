import React, { useEffect } from 'react';
import './Icons.css';
import { useState } from 'react';

const Icons = () => {
    const [icons, setIcons] = useState([])
    useEffect(()=>{
        fetch('https://serene-temple-56394.herokuapp.com/icon')
        .then(response => response.json())
        .then(data => setIcons(data))
    },[])


    return (
        <div className='text-center'>
            {
                icons.map(con => <img src={con.icon} alt="" className="mt-5 ml-5 icons img-fluid"  /> )
            }
        </div>
    );
};

export default Icons;
