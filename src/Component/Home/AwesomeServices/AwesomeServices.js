import React, { useEffect, useState } from 'react';
import { Card} from 'react-bootstrap';
import './AwesomeServices.css';
import { Link } from "react-router-dom";

//this is in home page where provide awesome service located
const AwesomeServices = () => {

    const [service, setService] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5002/allService')
        .then(response => response.json())
        .then(data => setService(data))
    },[])

    return (
        <div className='services container '>
            <h2>Provide awesome <span className='text-color' >services</span> </h2>

            <div className='d-flex flex-wrap justify-content-around container mt-5 mb-5' >
            {
                service.map(awesome =><Link to="/servicedetails" style={{textDecoration:"none", color:'black'}}>
                    <div className='col-md-4 m-3'>
                    <Card style={{ width: '18rem' }}  className='box' >
                    <Card.Body className='text-center'>
                        <Card.Img variant="top" src={awesome.image} className='w-25 ' />
                        <Card.Title>{awesome.title} </Card.Title>
                        <Card.Text>
                        {awesome.description}
                        </Card.Text>
                        
                    </Card.Body>
                </Card>
                    </div>
                </Link>  )
            }
            </div>

        </div>
    );
};

export default AwesomeServices;