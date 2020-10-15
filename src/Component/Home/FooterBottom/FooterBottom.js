import React from 'react';
import { Button } from 'react-bootstrap';
import './FooterBottom.css';

const FooterBottom = () => {
    return (
        <div style={{ backgroundColor: '#FBD062' }} className='container-fluid'>

            <div>
                <div className='d-flex' style={{ margin: '40px', padding: '40px' }}>
                    <div className='d-flex align-items-center col-md-6' >
                        <div>
                            <h1>Let us handle your project, professionally. </h1>
                            <p>With well written codes, we build amazing apps for
                    all platforms, mobile and web apps in general.</p>
                        </div>

                    </div>
                    <div className='col-md-6'>
                        <form className='container-fluid' style={{ margin: '40px', padding: '40px' }} >

                            <input className='form-control' type='email' name='email' placeholder='Your email address' className='long' required />
                            <br />
                            <br />
                            <input className='form-control' type='text' name='name' placeholder=' Your name/company name' className='long' />
                            <br />
                            <br />
                            <input className='form-control' type='text' name='msg' placeholder='Your message ' className='long p-5' required />

                            <br />
                            <br />
                            <Button variant='dark' >Send </Button>
                            <br />
                            <br />
                        </form>
                    </div>


                </div>


            </div>

            <p className='text-center p-3 mt-0' >Copyright Orange labs {(new Date()).getFullYear()} </p>
        </div>
    );
};

export default FooterBottom;