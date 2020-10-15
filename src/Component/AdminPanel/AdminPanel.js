import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logos/logo.png';


const AdminPanel = () => {
    
    const [allUser, setAllUser] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:5002/showallorder`)
        .then(response => response.json())
        .then(data => setAllUser(data))
    },[])


    return (
<div>
        <img src={logo} alt=""  className='logo mt-5 img-fluid'/>

        <div className="m-5">
            
            <aside style={{ marginTop: '10vh', zIndex: '-1' }}>
                <Link to="/">
                    <div className="d-flex mt-3" style={{ cursor: 'pointer' }}>
                    <i class="fas fa-shopping-basket pl-5 mr-2"></i>
                        <h6>Service List</h6>
                    </div>
                </Link>
            
                <Link to='/addservice' style={{ textDecoration: 'none' }}>
                    <div className="d-flex">
                    <i class="fas fa-plus pl-5 mr-2"></i>  
                        <h6>Add services</h6>
                    </div>
                </Link>
                
                <Link to='/addadmin' style={{ textDecoration: 'none' }}>
                    <div className="d-flex">
                    <i class="fas fa-user-shield pl-5 mr-2"></i>    
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
                        {
                            allUser.map(para => <tr className="bg-light" >
                            <td>{para.Name} </td>
                            <td>{para.email}</td>
                            <td>{para.graphic}</td>
                            <td>{para.project}</td>
                            <select>
                                <option> pending</option> 
                                <option className="text-color" > Done</option> 
                                <option> Ongoing</option> 
                            </select>
                        </tr> )
                        }
                        
                    </tbody>
                </table>

            </main>
        </div >
</div>
        );
};

export default AdminPanel;