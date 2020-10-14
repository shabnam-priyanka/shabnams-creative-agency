import React from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/logo.png';



const Header = () => {
    return (
    
        <div className=''>

            <Navbar>
                <Navbar.Brand href="#home"><img style={{ height: '60px' }} src={logo} alt="" /> </Navbar.Brand>
                <Nav className="mr-auto" style={{ marginLeft: '800px' }}>
                    <Nav.Link href="/home">Home</Nav.Link>
                    <Nav.Link href="#our portfolio">Our Portfolio</Nav.Link>
                    <Nav.Link href="#our team">Our Team</Nav.Link>
                    <Nav.Link href="#Contact us">Contact Us</Nav.Link>
    
                    <Link to='/login'>
                        <Button variant='dark' className='ml-3' >Login</Button>
                    </Link>
                </Nav>

            </Navbar>



        </div>
    );
};

export default Header;