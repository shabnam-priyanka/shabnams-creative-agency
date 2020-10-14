import React, { useEffect, useState } from 'react';
import { Card} from 'react-bootstrap';
import './AwesomeServices.css';
import { Link } from "react-router-dom";

//this is in home page where provide awesome service located
const AwesomeServices = () => {

    const [service, setService] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5002/service')
        .then(response => response.json())
        .then(data => setService(data))
    },[])

    return (
        <div className='services container '>
            <h2>Provide awesome <span className='text-color' >services</span> </h2>

            <div className='d-flex justify-content-around container mt-5 ' >
            {
                service.map(awesome =><Link to="/servicedetails"><Card style={{ width: '18rem' }}  className='box' >
                    
                    <Card.Body className='text-center'>
                        <Card.Img variant="top" src={awesome.image} className='w-25 ' />
                        <Card.Title>{awesome.title} </Card.Title>
                        <Card.Text>
                        {awesome.description}
                        </Card.Text>
                        
                    </Card.Body>
                </Card></Link>  )
            }
            </div>

        </div>
    );
};

export default AwesomeServices;