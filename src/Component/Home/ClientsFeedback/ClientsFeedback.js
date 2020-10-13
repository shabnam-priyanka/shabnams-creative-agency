import React from 'react';
import { Card} from 'react-bootstrap';
import cus1 from '../../../images/customer-1.png';
import cus2 from '../../../images/customer-2.png';
import cus3 from '../../../images/customer-3.png';



const Feedback = [
    {
        image: cus1,
        title: 'Web & Mobile design',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, ad omnis! Excepturi temporibus labore iusto molestias nesciunt accusamus voluptate corporis beatae laudantium tenetur esse est aspernatur, sunt ab tempora numquam!',
    },
    {
        image: cus2,
        title: 'Web & Mobile design',
        description: 'We Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, ad omnis! Excepturi temporibus labore iusto molestias nesciunt accusamus voluptate corporis beatae laudantium tenetur esse est aspernatur, sunt ab tempora numquam! stunning and amazing web UI, using a well drafted UX to fit your product.',
    },
    {
        image: cus3,
        title: 'Web & Mobile design',
        description:'We Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, ad omnis! Excepturi temporibus labore iusto molestias nesciunt accusamus voluptate corporis beatae laudantium tenetur esse est aspernatur, sunt ab tempora numquam! stunning and amazing web UI, using a well drafted UX to fit your product.',

    }
]


const ClientsFeedback = () => {
    return (
        <div className='services  '>
        <h2>Provide awesome services</h2>

        <div className='d-flex justify-content-center mt-5 mb-5' >
        {
            Feedback.map(client => <Card style={{ width: '18rem' }} >
                
                <Card.Body className='text-center'>
                    <Card.Img variant="top" src={client.image} className='w-25 ' />
                    <Card.Title>{client.title} </Card.Title>
                    <Card.Text>
                    {client.description}
                    </Card.Text>
                    
                </Card.Body>
            </Card>)
        }
        </div>

    </div>
    );
};

export default ClientsFeedback;