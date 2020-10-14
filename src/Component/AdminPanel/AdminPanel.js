import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logos/logo.png';
import plus from '../../images/logos/plus 1.png';
import trash from '../../images/logos/trash-2 9.png';
import users from '../../images/logos/users-alt 1.png';

const AdminPanel = () => {
    return (
<div>
        <img src={logo} alt=""  className='logo mt-5'/>

        <div className="m-5">
            
            <aside style={{ marginTop: '10vh', zIndex: '-1' }}>
                <Link to="addevent">
                    <div className="d-flex mt-3" style={{ cursor: 'pointer' }}>
                        <img style={{ height: '4vh' }} className="mr-3" src={trash} alt="" />
                        <h6>Service List</h6>
                    </div>
                </Link>
            
                <Link to='/admin' style={{ textDecoration: 'none' }}>
                    <div className="d-flex">
                        <img style={{ height: '4vh' }} className="mr-3" src={plus} alt="" />
                        <h6>Add services</h6>
                    </div>
                </Link>
                
                <Link to='/admin' style={{ textDecoration: 'none' }}>
                    <div className="d-flex">
                        <img style={{ height: '4vh' }} className="mr-3" src={users} alt="" />
                        <h6>Make Admin</h6>
                    </div>
                </Link>
            
            </aside>
            <main>
            
                <table className="table" style={{ marginLeft: '23vw', width: '70vw', marginTop: '-5vw' }}>
                    <thead className="thead-dark">
                        <tr>

                            <th scope="col">Name</th>
                            <th scope="col">Email ID</th>
                            <th scope="col">Service</th>
                            <th scope="col">Project Details</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr className="bg-light" >
                            <td> Kolmilota</td>
                            <td>kolmilota</td>
                            <td>Graphic Design</td>
                            <td>Lorem ipsum dolor sit amet consectetur </td>
                            <select>
                                <option> pending</option> 
                                <option className="text-color" > Done</option> 
                                <option> Ongoing</option> 
                            </select>
                        </tr>
                    </tbody>
                </table>

            </main>
        </div >
</div>
        );
};

export default AdminPanel;