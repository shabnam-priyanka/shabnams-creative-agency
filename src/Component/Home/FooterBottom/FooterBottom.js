import React from 'react';
import { Button } from 'react-bootstrap';
import './FooterBottom.css';

const FooterBottom = () => {
    return (
        <div style={{ backgroundColor: '#FBD062' }}>

           <div>
           <div className='d-flex' style={{ margin: '40px', padding: '40px' }}>
                <div className ='d-flex align-items-center' >
                    <div>
                    <h1>Let us handle your project, professionally. </h1>
                    <p>With well written codes, we build amazing apps for
                    all platforms, mobile and web apps in general.</p>
                    </div>
                    
                </div>
                

                <form style={{ margin: '40px', padding: '40px' }}>

                    <input type='email' name='email' placeholder='Your email address' className='long' required />
                    <br />
                    <br />
                    <input type='text' name='name' placeholder=' Your name/company name' className='long' />
                    <br />
                    <br />
                    <input type='text' name='msg' placeholder='Your message ' className='long p-5' required />

                    <br />
                    <br />
                    <Button variant='dark' >Send </Button>
                    <br />
                    <br />
                </form>
            </div>
            
    
           </div>

           <p className = 'text-center p-3 mt-0' >Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
        </div>
    );
};

export default FooterBottom;