import React from 'react';
import { Link } from 'react-router-dom'
import supplierProfile from "../../assets/images/imageprofile.jpeg"
import './add_supplier.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import add from "../../assets/images/icons/plus-3.png"


function Add_supplier(){
    return <div className="admin-container">
        
        <div className='supplier-table-container'>
        <div className='admin-supplierTitle-container'>
        <h1 className='suppliers-title'>SUPPLIERS</h1>
        </div>
        <div className='col-md-12 search-admin-container'>
        <div className='col-md-5' style={{ display:'flex', flexFlow:'row'}}>
                
        <input className="form-control me-1" type="search" placeholder="search shop name" aria-label="Search"/>
        <button className="col-md-3 btn btn-outline-primary" type="submit">Search</button>
        </div>
        <div className='status-filter-container'>
        <button className="btn btn-secondary dropdown-toggle dropdown-menu-dark" style={{ backgroundColor:'#020654' }} type="button" data-bs-toggle="dropdown" aria-expanded="false">
         Filter by Status
        </button>
        <ul className="dropdown-menu dropdown-menu-dark" style={{ backgroundColor:'#020654' }}>
        <li><a className="dropdown-item">Activated</a></li>
        <li><a className="dropdown-item">Deactivated</a></li>
        </ul>
        </div>
        <button className="button" type="button" data-bs-toggle="modal" data-bs-target="#addSupplierModal">
        <span className="button__text">Add Supplier</span>
        <span className="button__icon"><svg className="svg" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="12" x2="12" y1="5" y2="19"></line><line x1="5" x2="19" y1="12" y2="12"></line></svg></span>
        </button>
        </div>
        


        <div className='admin-table-wrapper table-responsive-sm' style={{ marginTop:'20px'}}>
        <table className="table table-hover table-bordered align-middle caption-bot table-xl">
        <caption>end of list of suppliers</caption>
        <thead className='table-dark align-middle'>
            <tr className='thead-row'>
            <th scope="col">Supplier ID</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Shop</th>
            <th scope="col">Email</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Status</th>
            </tr>
        </thead>
        <tbody className="table-group-divider">
            <tr id="offcanvasButton" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight"
                    aria-controls="offcanvasRight">
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>Shop name</td>
            <td>example@gmail.com</td>
            <td>09124534</td>
            <td>Activated</td>
            </tr>
            <tr id="offcanvasButton" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight"
                    aria-controls="offcanvasRight">
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>Shop name</td>
            <td>example@gmail.com</td>
            <td>09124534</td>
            <td>Activated</td>
            </tr>
            <tr id="offcanvasButton" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight"
                    aria-controls="offcanvasRight">
            <th scope="row">3</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>Shop name</td>
            <td>example@gmail.com</td>
            <td>09124534</td>
            <td>Activated</td>
            </tr>
            <tr id="offcanvasButton" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight"
                    aria-controls="offcanvasRight">
            <th scope="row">4</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>Shop name</td>
            <td>example@gmail.com</td>
            <td>09124534</td>
            <td>Activated</td>
            </tr>
            <tr id="offcanvasButton" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight"
                    aria-controls="offcanvasRight">
            <th scope="row">5</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>Shop name</td>
            <td>example@gmail.com</td>
            <td>09124534</td>
            <td>Activated</td>
            </tr>
            <tr id="offcanvasButton" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight"
                    aria-controls="offcanvasRight">
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>Shop name</td>
            <td>example@gmail.com</td>
            <td>09124534</td>
            <td>Activated</td>
            </tr>
            <tr id="offcanvasButton" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight"
                    aria-controls="offcanvasRight">
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>Shop name</td>
            <td>example@gmail.com</td>
            <td>09124534</td>
            <td>Activated</td>
            </tr>
            <tr id="offcanvasButton" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight"
                    aria-controls="offcanvasRight">
            <th scope="row">3</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>Shop name</td>
            <td>example@gmail.com</td>
            <td>09124534</td>
            <td>Activated</td>
            </tr>
            <tr id="offcanvasButton" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight"
                    aria-controls="offcanvasRight">
            <th scope="row">4</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>Shop name</td>
            <td>example@gmail.com</td>
            <td>09124534</td>
            <td>Activated</td>
            </tr>
            <tr id="offcanvasButton" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight"
                    aria-controls="offcanvasRight">
            <th scope="row">5</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>Shop name</td>
            <td>example@gmail.com</td>
            <td>09124534</td>
            <td>Activated</td>
            </tr>
            <tr id="offcanvasButton" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight"
                    aria-controls="offcanvasRight">
            <th scope="row">6</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>Shop name</td>
            <td>example@gmail.com</td>
            <td>09124534</td>
            <td>Activated</td>
            </tr>
            <tr id="offcanvasButton" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight"
                    aria-controls="offcanvasRight">
            <th scope="row">7</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>Shop name</td>
            <td>example@gmail.com</td>
            <td>09124534</td>
            <td>Activated</td>
            </tr>
            <tr id="offcanvasButton" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight"
                    aria-controls="offcanvasRight">
            <th scope="row">8</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>Shop name</td>
            <td>example@gmail.com</td>
            <td>09124534</td>
            <td>Activated</td>
            </tr>
            <tr id="offcanvasButton" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight"
                    aria-controls="offcanvasRight">
            <th scope="row">9</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>Shop name</td>
            <td>example@gmail.com</td>
            <td>09124534</td>
            <td>Activated</td>
            </tr>
            <tr id="offcanvasButton" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight"
                    aria-controls="offcanvasRight">
            <th scope="row">10</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>Shop name</td>
            <td>example@gmail.com</td>
            <td>09124534</td>
            <td>Activated</td>
            </tr>
            <tr id="offcanvasButton" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight"
                    aria-controls="offcanvasRight">
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>Shop name</td>
            <td>example@gmail.com</td>
            <td>09124534</td>
            <td>Activated</td>
            </tr>
            <tr id="offcanvasButton" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight"
                    aria-controls="offcanvasRight">
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>Shop name</td>
            <td>example@gmail.com</td>
            <td>09124534</td>
            <td>Activated</td>
            </tr>
            <tr id="offcanvasButton" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight"
                    aria-controls="offcanvasRight">
            <th scope="row">3</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>Shop name</td>
            <td>example@gmail.com</td>
            <td>09124534</td>
            <td>Activated</td>
            </tr>
            <tr id="offcanvasButton" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight"
                    aria-controls="offcanvasRight">
            <th scope="row">4</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>Shop name</td>
            <td>example@gmail.com</td>
            <td>09124534</td>
            <td>Activated</td>
            </tr>
            <tr id="offcanvasButton" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight"
                    aria-controls="offcanvasRight">
            <th scope="row">5</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>Shop name</td>
            <td>example@gmail.com</td>
            <td>09124534</td>
            <td>Activated</td>
            </tr>
            <tr id="offcanvasButton" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight"
                    aria-controls="offcanvasRight">
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>Shop name</td>
            <td>example@gmail.com</td>
            <td>09124534</td>
            <td>Activated</td>
            </tr>
            <tr id="offcanvasButton" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight"
                    aria-controls="offcanvasRight">
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>Shop name</td>
            <td>example@gmail.com</td>
            <td>09124534</td>
            <td>Activated</td>
            </tr>
            <tr id="offcanvasButton" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight"
                    aria-controls="offcanvasRight">
            <th scope="row">3</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>Shop name</td>
            <td>example@gmail.com</td>
            <td>09124534</td>
            <td>Activated</td>
            </tr>
            <tr id="offcanvasButton" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight"
                    aria-controls="offcanvasRight">
            <th scope="row">4</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>Shop name</td>
            <td>example@gmail.com</td>
            <td>09124534</td>
            <td>Activated</td>
            </tr>
            <tr id="offcanvasButton" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight"
                    aria-controls="offcanvasRight">
            <th scope="row">5</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>Shop name</td>
            <td>example@gmail.com</td>
            <td>09124534</td>
            <td>Activated</td>
            </tr>
            <tr id="offcanvasButton" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight"
                    aria-controls="offcanvasRight">
            <th scope="row">6</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>Shop name</td>
            <td>example@gmail.com</td>
            <td>09124534</td>
            <td>Activated</td>
            </tr>
            <tr id="offcanvasButton" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight"
                    aria-controls="offcanvasRight">
            <th scope="row">7</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>Shop name</td>
            <td>example@gmail.com</td>
            <td>09124534</td>
            <td>Activated</td>
            </tr>
            <tr id="offcanvasButton" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight"
                    aria-controls="offcanvasRight">
            <th scope="row">8</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>Shop name</td>
            <td>example@gmail.com</td>
            <td>09124534</td>
            <td>Activated</td>
            </tr>
            <tr id="offcanvasButton" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight"
                    aria-controls="offcanvasRight">
            <th scope="row">9</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>Shop name</td>
            <td>example@gmail.com</td>
            <td>09124534</td>
            <td>Activated</td>
            </tr>
            <tr id="offcanvasButton" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight"
                    aria-controls="offcanvasRight">
            <th scope="row">10</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>Shop name</td>
            <td>example@gmail.com</td>
            <td>09124534</td>
            <td>Activated</td>
            </tr>
            <tr id="offcanvasButton" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight"
                    aria-controls="offcanvasRight">
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>Shop name</td>
            <td>example@gmail.com</td>
            <td>09124534</td>
            <td>Activated</td>
            </tr>
            <tr id="offcanvasButton" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight"
                    aria-controls="offcanvasRight">
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>Shop name</td>
            <td>example@gmail.com</td>
            <td>09124534</td>
            <td>Activated</td>
            </tr>
            <tr id="offcanvasButton" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight"
                    aria-controls="offcanvasRight">
            <th scope="row">3</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>Shop name</td>
            <td>example@gmail.com</td>
            <td>09124534</td>
            <td>Activated</td>
            </tr>
            <tr id="offcanvasButton" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight"
                    aria-controls="offcanvasRight">
            <th scope="row">4</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>Shop name</td>
            <td>example@gmail.com</td>
            <td>09124534</td>
            <td>Activated</td>
            </tr>
            <tr id="offcanvasButton" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight"
                    aria-controls="offcanvasRight">
            <th scope="row">5</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>Shop name</td>
            <td>example@gmail.com</td>
            <td>09124534</td>
            <td>Activated</td>
            </tr>
            <tr id="offcanvasButton" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight"
                    aria-controls="offcanvasRight">
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>Shop name</td>
            <td>example@gmail.com</td>
            <td>09124534</td>
            <td>Activated</td>
            </tr>
            <tr id="offcanvasButton" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight"
                    aria-controls="offcanvasRight">
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>Shop name</td>
            <td>example@gmail.com</td>
            <td>09124534</td>
            <td>Activated</td>
            </tr>
            <tr id="offcanvasButton" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight"
                    aria-controls="offcanvasRight">
            <th scope="row">3</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>Shop name</td>
            <td>example@gmail.com</td>
            <td>09124534</td>
            <td>Activated</td>
            </tr>
            <tr id="offcanvasButton" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight"
                    aria-controls="offcanvasRight">
            <th scope="row">4</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>Shop name</td>
            <td>example@gmail.com</td>
            <td>09124534</td>
            <td>Activated</td>
            </tr>
            <tr id="offcanvasButton" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight"
                    aria-controls="offcanvasRight">
            <th scope="row">5</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>Shop name</td>
            <td>example@gmail.com</td>
            <td>09124534</td>
            <td>Activated</td>
            </tr>
            <tr id="offcanvasButton" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight"
                    aria-controls="offcanvasRight">
            <th scope="row">6</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>Shop name</td>
            <td>example@gmail.com</td>
            <td>09124534</td>
            <td>Activated</td>
            </tr>
            <tr id="offcanvasButton" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight"
                    aria-controls="offcanvasRight">
            <th scope="row">7</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>Shop name</td>
            <td>example@gmail.com</td>
            <td>09124534</td>
            <td>Activated</td>
            </tr>
            <tr id="offcanvasButton" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight"
                    aria-controls="offcanvasRight">
            <th scope="row">8</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>Shop name</td>
            <td>example@gmail.com</td>
            <td>09124534</td>
            <td>Activated</td>
            </tr>
            <tr id="offcanvasButton" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight"
                    aria-controls="offcanvasRight">
            <th scope="row">9</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>Shop name</td>
            <td>example@gmail.com</td>
            <td>09124534</td>
            <td>Activated</td>
            </tr>
            <tr id="offcanvasButton" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight"
                    aria-controls="offcanvasRight">
            <th scope="row">10</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>Shop name</td>
            <td>example@gmail.com</td>
            <td>09124534</td>
            <td>Activated</td>
            </tr>
            <tr id="offcanvasButton" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight"
                    aria-controls="offcanvasRight">
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>Shop name</td>
            <td>example@gmail.com</td>
            <td>09124534</td>
            <td>Activated</td>
            </tr>
            <tr id="offcanvasButton" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight"
                    aria-controls="offcanvasRight">
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>Shop name</td>
            <td>example@gmail.com</td>
            <td>09124534</td>
            <td>Activated</td>
            </tr>
            <tr id="offcanvasButton" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight"
                    aria-controls="offcanvasRight">
            <th scope="row">3</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>Shop name</td>
            <td>example@gmail.com</td>
            <td>09124534</td>
            <td>Activated</td>
            </tr>
            <tr id="offcanvasButton" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight"
                    aria-controls="offcanvasRight">
            <th scope="row">4</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>Shop name</td>
            <td>example@gmail.com</td>
            <td>09124534</td>
            <td>Activated</td>
            </tr>
            <tr id="offcanvasButton" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight"
                    aria-controls="offcanvasRight">
            <th scope="row">5</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>Shop name</td>
            <td>example@gmail.com</td>
            <td>09124534</td>
            <td>Activated</td>
            </tr>
            <tr id="offcanvasButton" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight"
                    aria-controls="offcanvasRight">
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>Shop name</td>
            <td>example@gmail.com</td>
            <td>09124534</td>
            <td>Activated</td>
            </tr>
            <tr id="offcanvasButton" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight"
                    aria-controls="offcanvasRight">
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>Shop name</td>
            <td>example@gmail.com</td>
            <td>09124534</td>
            <td>Activated</td>
            </tr>
            <tr id="offcanvasButton" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight"
                    aria-controls="offcanvasRight">
            <th scope="row">3</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>Shop name</td>
            <td>example@gmail.com</td>
            <td>09124534</td>
            <td>Activated</td>
            </tr>
            <tr id="offcanvasButton" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight"
                    aria-controls="offcanvasRight">
            <th scope="row">4</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>Shop name</td>
            <td>example@gmail.com</td>
            <td>09124534</td>
            <td>Activated</td>
            </tr>
            <tr id="offcanvasButton" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight"
                    aria-controls="offcanvasRight">
            <th scope="row">5</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>Shop name</td>
            <td>example@gmail.com</td>
            <td>09124534</td>
            <td>Activated</td>
            </tr>
            <tr id="offcanvasButton" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight"
                    aria-controls="offcanvasRight">
            <th scope="row">6</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>Shop name</td>
            <td>example@gmail.com</td>
            <td>09124534</td>
            <td>Activated</td>
            </tr>
            <tr id="offcanvasButton" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight"
                    aria-controls="offcanvasRight">
            <th scope="row">7</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>Shop name</td>
            <td>example@gmail.com</td>
            <td>09124534</td>
            <td>Activated</td>
            </tr>
            <tr id="offcanvasButton" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight"
                    aria-controls="offcanvasRight">
            <th scope="row">8</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>Shop name</td>
            <td>example@gmail.com</td>
            <td>09124534</td>
            <td>Activated</td>
            </tr>
            <tr id="offcanvasButton" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight"
                    aria-controls="offcanvasRight">
            <th scope="row">9</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>Shop name</td>
            <td>example@gmail.com</td>
            <td>09124534</td>
            <td>Activated</td>
            </tr>
            <tr id="offcanvasButton" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight"
                    aria-controls="offcanvasRight">
            <th scope="row">10</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>Shop name</td>
            <td>example@gmail.com</td>
            <td>09124534</td>
            <td>Activated</td>
            </tr>
        </tbody>
        </table>
        </div>
        </div>

            <div className="supplier-offcanvas offcanvas offcanvas-end" tabIndex={-1} id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasRightLabel">
          <div className="supplier-info-group">
          <span className="supplier-info-label">Supplier ID:</span>
          <p className="supplier-info">098765</p>
          </div>
          </h5>
          <div data-bs-theme="dark">
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
        </div>
        <div className="offcanvas-body">
        <div className="profile-pic-container" style={{ padding:'20px' }}>
                    <img className="mx-auto d-block" src={ supplierProfile } style={{ height:'120px', width:'120px', borderStyle:'solid', borderRadius:"50%", borderColor:'white' }}/>
                </div>
                <span className="supplier-Status">Status:</span>
                <img src="" alt="" />
                <div className="supplier-info-group">
                <span className="supplier-info-label">First Name:</span>
                <p className="supplier-info">Racel Anne</p>
                </div>
                <div className="supplier-info-group">
                <span className="supplier-info-label">Last Name:</span>
                <p className="supplier-info">Pitogo</p>
                </div>
                <div className="supplier-info-group">
                <span className="supplier-info-label">Shop:</span>
                <p className="supplier-info">Sample Shop</p>
                </div>
                <div className="supplier-info-group">
                <span className="supplier-info-label">Email:</span>
                <p className="supplier-info">example@gmail.com</p>
                </div>
                <div className="supplier-info-group">
                <span className="supplier-info-label">Phone number:</span>
                <p className="supplier-info">12345678</p>
                </div>
                
                <span className="supplier-editInfo-btn">
                  <button className="btn btn-lg btn-primary" style={{ marginTop:'20px' }} data-bs-toggle="modal" data-bs-target="#editSupplierDetailsModal">Edit Supplier</button>
                </span>
                
        </div>
      </div>

      
<div className="edit-supplier-modal modal fade" id="editSupplierDetailsModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="editSupplierDetailsModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
    <div className="modal-content" style={{ backgroundColor:'#ffff' }}>
      <div className="modal-header">
        <h3 className='modal-supplier-title'>Edit Supplier Details</h3>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className='col-md-12 row'>
      <div className="modal-body">
        <div style={{ display:'flex', flexFlow:'row' }}>
        <div className="col-md-12 supplier-details-container">
            <div className="col-md-3">
                <label className="form-label">ID Number</label>
                <input type="number" className="form-control" id="exampleFormControlInput1"/>
                <label className="form-label">First Name</label>
                <input type="text" className="form-control" id="exampleFormControlInput1"/>
                <label className="form-label">Last Name</label>
                <input type="text" className="form-control" id="exampleFormControlInput1"/>
                <label className="form-label">Shop</label>
                <input type="text" className="form-control" id="exampleFormControlInput1"/>
                <label className="form-label">Phone Number</label>
                <input type="number" className="form-control" id="exampleFormControlInput1"/>
                </div>

                <div className="col-md-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                <label className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleFormControlInput1"/>
                <label className="form-label">Confirm Password</label>
                <input type="password" className="form-control" id="exampleFormControlInput1"/>
                <div style={{ marginTop:'15px' }}>
                <label className="col-md-8 form-label">Profile Picture</label>
                <input className="upload-profile-btn" type="file" accept="image/png, image/jpg, image/gif, image/jpeg, image/heic"/>
                </div>
                <label className="form-label">Status</label>
                <div className="form-check form-switch" style={{ marginLeft:'15px' }}>
                <label className="switch" role="switch">
                <input type="checkbox"/>
                <span className="slider"></span>
                </label>
                </div>
            </div>         
    </div>
        </div>
      </div>
      </div>
      <div className="modal-footer">
       <div className="d-grid gap-2 col-3 mx-auto">
       <button type="button" className="btn btn-lg btn-primary">Save</button>
       </div>
      </div>
    </div>
  </div>
</div>

<div className="add-supplier-modal modal fade" id="addSupplierModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="addSupplierModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
    <div className="modal-content" style={{ backgroundColor:'#ffff' }}>
      <div className="add-supplier-modal-header modal-header">
        <h3 className='modal-supplier-title'>Add Supplier Details</h3>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className='col-md-12 row'>
      <div className="modal-body">
        <div style={{ display:'flex', flexFlow:'row' }}>
        <div className="col-md-12 supplier-details-container" style={{ display:'flex', flexFlow:'row', gap:'15em'}}>
            <div className="col-md-3">
                <label className="form-label">ID Number</label>
                <input type="number" className="form-control" id="exampleFormControlInput1"/>
                <label className="form-label">First Name</label>
                <input type="text" className="form-control" id="exampleFormControlInput1"/>
                <label className="form-label">Last Name</label>
                <input type="text" className="form-control" id="exampleFormControlInput1"/>
                <label className="form-label">Shop</label>
                <input type="text" className="form-control" id="exampleFormControlInput1"/>
                <label className="form-label">Phone Number</label>
                <input type="number" className="form-control" id="exampleFormControlInput1"/>
                </div>

                <div className="col-md-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                <label className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleFormControlInput1"/>
                <label className="form-label">Confirm Password</label>
                <input type="password" className="form-control" id="exampleFormControlInput1"/>
                <div style={{ marginTop:'15px' }}>
                <label className="col-md-8 form-label">Profile Picture</label>
                <input className="upload-profile-btn" type="file" accept="image/png, image/jpg, image/gif, image/jpeg, image/heic"/>
                </div>
                <label className="form-label">Status</label>
                <div className="form-check form-switch" style={{ marginLeft:'15px' }}>
                <label className="switch" role="switch">
                <input type="checkbox"/>
                <span className="slider"></span>
                </label>
                </div>
            </div>         
    </div>
        </div>
      </div>
      </div>
      <div className="modal-footer">
       <div className="d-grid gap-2 col-3 mx-auto">
       <button type="button" className="btn btn-lg btn-primary">Save</button>
       </div>
      </div>
    </div>
  </div>
</div>
        
    </div>
}

export default Add_supplier