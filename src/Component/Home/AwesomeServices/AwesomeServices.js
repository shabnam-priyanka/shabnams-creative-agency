import React from 'react';
import service1 from '../../../images/icons/service1.png';
import service2 from '../../../images/icons/service2.png';
import service3 from '../../../images/icons/service3.png';
import { Card} from 'react-bootstrap';
import './AwesomeServices.css';


const services = [
    {
        image: service1,
        title: 'Web & Mobile design',
        description: 'We craft stunning and amazing web UI, using a well drafted UX to fit your product.',


    },
    {
        image: service2,
        title: 'Web & Mobile design',
        description: 'We craft stunning and amazing web UI, using a well drafted UX to fit your product.',

    },
    {
        image: service3,
        title: 'Web & Mobile design',
        description: 'We craft stunning and amazing web UI, using a well drafted UX to fit your product.',

    }
]

const AwesomeServices = () => {



    return (
        <div className='services  '>
            <h2>Provide awesome services</h2>

            <div className='d-flex justify-content-center mt-5 ' >
            {
                services.map(awesome => <Card style={{ width: '18rem' }} >
                    
                    <Card.Body className='text-center'>
                        <Card.Img variant="top" src={awesome.image} className='w-25 ' />
                        <Card.Title>{awesome.title} </Card.Title>
                        <Card.Text>
                        {awesome.description}
                        </Card.Text>
                        
                    </Card.Body>
                </Card>)
            }
            </div>

        </div>
    );
};

export default AwesomeServices;