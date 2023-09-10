//import { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import logo from "../../assets/images/unitee.png"
import orders from "../../assets/images/icons/orders.png"
import items from "../../assets/images/icons/items.png"
import logout from "../../assets/images/icons/logout.png"
import transactions from "../../assets/images/icons/transactions.png"
import customer from "../../assets/images/icons/profile.png"
import suppliers from "../../assets/images/icons/suppliers.png"
import admins from "../../assets/images/icons/admins.png"
import profile from "../../assets/images/icons/profile2.png"
//import supplierProfile from "../../assets/images/imageprofile.jpeg"
import './add_supplier.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function Add_customer(){

    const [searchTerm, setSearchTerm] = useState('');
    const [customers, setCustomers] = useState([]);
    const [departments, setDepartments] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        axios.get('https://localhost:7017/Department')
            .then(res => {
                setDepartments(res.data);
            })
            .catch((err) => {console.error(err)
        });
    }, []);

    // Get Department Names
    const getDepartmentName = (departmentId) => {
        const department = departments.find(c => c.departmentId === departmentId);
        return department ? department.department_Name : 'Unknown Department';
    };

    // Search Suppliers
    const filteredCustomers = customers.filter(customer =>
        customer.id.toString().includes(searchTerm) ||
        customer.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        customer.lastName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    // Get All Suppliers
    useEffect(() => {
        fetch('https://localhost:7017/Users/getCustomers')
            .then((response) => response.json())
            .then((data) => setCustomers(data));
    }, []);


    return <div className="admin-container">
    <header className="supplier-header row">
            <Link to='' className="col-md-3">
                <img className="logo" src={ logo } style={{height:'60px', marginLeft:'50px'}}/>
            </Link>
            <p className='col'>CUSTOMER</p>  
        </header>

        <div className="col-md-12" style={{ display:'flex', justifyContent:'center', alignItems:'center' }}>
        <div className='col-md-7' style={{ display:'flex', justifyContent:'space-between'}}>
            <div className='col-md-6'>
                <input 
                    className="form-control input" style={{ marginLeft:'60px' }}
                    placeholder="Search" 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                /> 
            </div>              
        </div>
        <div className="customer-counter-container">
            <span className="counter">No. of Customers: </span>
            {customers.length > 0 && (
                <span className="counter">{customers.length}</span>
            )}
        </div>
        </div>


    <div className="col-md-12" style={{ display:'flex'}}>
    <div className="admin-menu-container">
    <Link to='' className="menu-link">
                    <img className="iconSupplier" src={ orders }/>
                        <span className="menu-text">
                            Orders
                        </span>
                    </Link>
                <Link to='*' className="menu-link">
                    <img className="iconSupplier" src={ items }/>
                        <span className="menu-text">
                            Items
                        </span>
                    </Link>
                <Link to='*' className="menu-link">
                    <img className="iconSupplier" src={ transactions }/>
                        <span className="menu-text">
                            Transactions
                        </span>
                    </Link>
                <Link to={`/add_customer/${id}`} className="menu-link">
                    <img className="iconSupplier" src={ customer }/>
                        <span className="menu-text">
                            Customers
                        </span>
                </Link>

                <Link to={`/add_supplier/${id}`} className="menu-link">
                    <img className="iconSupplier" src={ suppliers }/>
                        <span className="menu-text">
                            Suppliers
                        </span>
                    </Link>

                    <Link to='*' className="menu-link">
                    <img className="iconSupplier" src={ admins }/>
                        <span className="menu-text">
                            Admins
                        </span>
                    </Link>

                    <Link to='*' className="menu-link">
                    <img className="iconSupplier" src={ profile }/>
                        <span className="menu-text">
                            Profile
                        </span>
                    </Link>

                <Link to='/' className="menu-link">
                    <img className="iconSupplier" src={ logout }/>
                        <span className="menu-text">
                            Logout
                        </span>
                    </Link>
    </div>
    <div className="col-md-9 supplier-container" style={{ paddingTop:'10px', display:'flex', flexFlow:'column'  }}>
        {filteredCustomers.map((customer) => (

        <div className="col-md-12 suppliers-profile-container" key={customer.id} style={{ backgroundColor:'white', height:'50px', display:'flex', flexFlow:'row', alignItems:'center', justifyContent:'space-around'}}>
            <div className="profile-pic-container" style={{ padding:'20px' }}>
                <img className="mx-auto d-block" src={`https://localhost:7017/${customer.image}`} style={{ height:'20px', width:'20px', borderStyle:'none', borderRadius:"50%" }}/>
            </div>
            <span className="supplier-details">First Name: {customer.firstName}</span>
            <span className="supplier-details">Last Name {customer.lastName}</span>
            <span className="supplier-details">Department: {getDepartmentName(customer.departmentId)}</span>
            <span className="supplier-details">Email: {customer.email}</span>
            <span className='supplier-details'>
                <button 
                    id="offcanvasButton" 
                    className="btn btn-primary" 
                    type="button" 
                    data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasRight"
                aria-controls="offcanvasRight">
                    View Profile
                </button>
            </span>

                    <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                        <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasRightLabel">
                            Supplier Profile
                        </h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                        <div className="profile-pic-container" style={{ padding:'20px' }}>
                                    <img className="mx-auto d-block" src={`https://localhost:7017/${customer.image}`} style={{ height:'120px', width:'120px', borderStyle:'none', borderRadius:"50%" }}/>
                                </div>
                                <span className="supplier-ID">First Name: {customer.id}:</span>
                                <span className="supplier-ID">First Name: {customer.firstName}</span>
                                <span className="supplier-Status">Last Name {customer.lastName}</span>
                                <span className="supplier-info">Department: {getDepartmentName(customer.departmentId)}</span>
                                <span className="supplier-info">Email: {customer.email}</span>
                                <span className="supplier-info">Phone Number: {customer.phoneNumber}</span>
                                <span className="supplier-info">Gender: {customer.gender}</span>  
                        </div>
                    </div>  
                    </div>
                ))}
            </div>
        </div>
    </div>

}
export default Add_customer