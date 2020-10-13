import React from 'react';
import airbnb from '../../../images/logos/airbnb.png';
import slack from '../../../images/logos/slack.png';
import google from '../../../images/logos/google.png';
import netflix from '../../../images/logos/netflix.png';
import uber from '../../../images/logos/uber.png';
import './Icons.css';

const Icons = () => {
    const icons = [
        {
            icon: airbnb,
        },
        {
            icon: slack,
        },
        
        {
            icon: netflix,
            
        },
        {
            icon: uber,
            
        },
        {
            icon: google,
            
        }
    ]



    return (
        <div className='text-center'>
            {
                icons.map(con => <img src={con.icon} alt="" className="mt-5 ml-5 icons"  /> )
            }
        </div>
    );
};

export default Icons;
