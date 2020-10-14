import React, { useEffect, useState } from 'react';
import { Card} from 'react-bootstrap';
import { Link } from "react-router-dom";

//this page is in home page when clicked customer 
//can review but this is in home component

const ClientsFeedback = () => {

    const [feedback, setFeedback] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5002/feedback')
        .then(response => response.json())
        .then(data => setFeedback(data))
    },[])
    return (
        <div className='services  container'>
        <h2>Clients <span className='text-color'>Feedback</span> </h2>

        <div className='d-flex justify-content-around container mt-5 mb-5' >
        {
            feedback.map(client => <Link to="/review"> <Card style={{ width: '18rem' }} className='box' >
                
                <Card.Body className='text-center'>
                    <Card.Img variant="top" src={client.image} className='w-25 ' />
                    <Card.Title>{client.title} </Card.Title>
                    <Card.Text>
                    {client.description}
                    </Card.Text>
                    
                </Card.Body>
            </Card></Link> )
        }
        </div>

    </div>
    );
};

export default ClientsFeedback;