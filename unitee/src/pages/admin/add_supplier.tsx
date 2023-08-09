import React from 'react';
import { Link } from 'react-router-dom'
import logo from "../../assets/images/unitee.png"
import orders from "../../assets/images/icons/orders.png"
import items from "../../assets/images/icons/items.png"
import logout from "../../assets/images/icons/logout.png"
import transactions from "../../assets/images/icons/transactions.png"
import customer from "../../assets/images/icons/profile.png"
import suppliers from "../../assets/images/icons/suppliers.png"
import admins from "../../assets/images/icons/admins.png"
import profile from "../../assets/images/icons/profile2.png"
import supplierProfile from "../../assets/images/imageprofile.jpeg"
import './add_supplier.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function Add_supplier(){



    return <div className="admin-container">
        <header className="supplier-header row">
                <Link to='' className="col-md-3">
                    <img className="logo" src={ logo } style={{height:'60px', marginLeft:'50px'}}/>
                </Link>
                <p className='col'>SUPPLIERS</p>  
            </header>

            <div className="col-md-12" style={{ display:'flex', justifyContent:'center' }}>
            <div className='col-md-7' style={{ display:'flex', justifyContent:'space-between', marginLeft:'50px'}}>
                <div className='col-md-6'>
                    <input className="form-control input" placeholder="Search" /> 
                </div>

                <Link to='/supplier_details'>
                    <button className="add-supplier-btn">Add Supplier</button>
                </Link>                
            </div>
            </div>


        <div className="col-md-12" style={{ display:'flex' }}>
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
                    <Link to='*' className="menu-link">
                        <img className="iconSupplier" src={ customer }/>
                            <span className="menu-text">
                                Customers
                            </span>
                    </Link>

                    <Link to='/add_supplier' className="menu-link">
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
        <div className="col-md-9 supplier-container" style={{ paddingTop:'20px' }}>
            <div className="col-md-3 suppliers-profile-container" style={{ backgroundColor:'white', height:'330px', borderStyle:'none', borderRadius:'20px' }}>
                <div className="profile-pic-container" style={{ padding:'20px' }}>
                    <img className="mx-auto d-block" src={ supplierProfile } style={{ height:'120px', width:'120px', borderStyle:'none', borderRadius:"50%" }}/>
                </div>
                <span className="supplier-details">Supplier ID:</span>
                <span className="supplier-details">Shop</span>
                <span className="supplier-details">Email</span>
                <span className="supplier-details">Phone number</span>
                <span className='supplier-details'><button id="offcanvasButton" className="btn btn-primary" type="button" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight"
                    aria-controls="offcanvasRight">View Profile</button></span>
            </div>

            </div>
        </div>



      <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasRightLabel">
            Supplier Profile
          </h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
        <div className="profile-pic-container" style={{ padding:'20px' }}>
                    <img className="mx-auto d-block" src={ supplierProfile } style={{ height:'120px', width:'120px', borderStyle:'none', borderRadius:"50%" }}/>
                </div>
                <span className="supplier-ID">Supplier ID:</span>
                <span className="supplier-Status">Status</span>
                <span className="supplier-info">Shop</span>
                <span className="supplier-info">Email</span>
                <span className="supplier-info">Phone number</span>
                <span className="supplier-info">
                    <Link className='btn' to='/supplier_details'>
                        <button className="update-supplier-btn">Edit Supplier</button>
                </Link>
                </span>

        </div>
      </div>

    </div>
}

export default Add_supplier