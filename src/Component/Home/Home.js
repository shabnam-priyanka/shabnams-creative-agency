import React from 'react';
import Header from './Header/Header';
import { Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import frame from '../../images/logos/Frame.png'
import Icons from './Icons/Icons';
import AwesomeServices from './AwesomeServices/AwesomeServices';
import OurWork from './OurWork/OurWork';
import ClientsFeedback from './ClientsFeedback/ClientsFeedback';
import FooterBottom from './FooterBottom/FooterBottom';

//first created navbar which is in headers
// then image and writing together in home component 
//then icons of google and etc 
// then awesome services component 
// then worked on our work 
// then clients feedback

const Home = () => {
    return (
        <main  >
            <div style={{backgroundColor: '#FBD062'}}>
            <Header></Header>
            <div className='d-flex container'>
            <div className='col-md-6 mt-5'>
            <h1>Let's Grow Your Brand To The Next Level</h1>
            <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, dicta?</small>
            <br/>
            <Link to='/login'>
                <Button variant='dark' className='ml-3' >Hire Us</Button>
            </Link> 
            </div>

            <div className='col-md-6 mt-5'>
                <img src={frame} alt="" className='w-75' />
            </div>
            </div>
            </div>
        

            <Icons></Icons>
            <AwesomeServices></AwesomeServices>
            <OurWork></OurWork>
            <ClientsFeedback></ClientsFeedback>
            <FooterBottom></FooterBottom>
        </main>
    );
};

export default Home;