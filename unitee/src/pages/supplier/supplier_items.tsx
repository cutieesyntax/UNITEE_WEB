import './supplier_items.css'
import { Link } from "react-router-dom"
import logo from '../../assets/images/unitee.png'
import sprofile from '../../assets/images/s-icon.png'
import logoutSupplier from "../../assets/images/icons/logoutSupplier.png"
import items from "../../assets/images/icons/items.png"
import orders from "../../assets/images/icons/orders.png"
import reports from "../../assets/images/icons/reports.png"
import featured_item from '../../assets/images/main/home_1.png'
import product from "../../assets/images/shop_products/product.png"

function Supplier (){
    return (
        <div className="supplier-container row">
            <header className="supplier-header row">
                <Link to='' className="col-md-3">
                    <img className="Supplierlogo" src={ logo } style={{height:'60px', marginLeft:'50px'}}/>
                </Link>
                <p className='supplier-items-title col'>ITEMS</p>
                <Link to='' className="col-md-1">
                    <img className="sprofile" src={ sprofile } style={{height:'40px'}}/>
                </Link>
            </header>

        <div className="items-container">
            <div className="supplier-menu-button-container">
                    <Link to='' className="menu-link">
                        <img className="iconSupplier" src={ items }/>
                            <span className="menu-text">
                                Items
                            </span>
                        </Link>
                    <Link to='*' className="menu-link">
                        <img className="iconSupplier" src={ orders }/>
                            <span className="menu-text">
                                Orders
                            </span>
                        </Link>
                    <Link to='*' className="menu-link">
                        <img className="iconSupplier" src={ reports }/>
                            <span className="menu-text">
                                Reports
                            </span>
                        </Link>
                    <Link to='/' className="menu-link">
                        <img className="iconSupplier" src={ logoutSupplier }/>
                            <span className="menu-text">
                                Logout
                            </span>
                        </Link>
                </div>
                
                <div className="col-md-7">
                <span className="featured-title">Featured Item</span>
                    <div>                                   
                    <img src={ featured_item } className="featured-img"/>      
                </div>
                <div className="col-md-7 upload-featured-item">
                <button type="button" className="btn btn-outline-warning" style={{ fontSize:'20px' }}>Upload Image</button>                    
                    </div>
                    </div>
                
                
            </div>
            

            <div className='container shop-contianer'>
        <div className='col content-container'>
        <div className='row g-3' style={{ justifyContent: 'center' }}>
        <div className="supplier-sort-container">
            <div className='supplier-filter-container'>

            <div className="sort-container">
                <h4>Sort by:</h4>
                <div className='gender-container-shop'>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
                    <label className="form-check-label">
                    Male
                    </label>
                    </div>

                    <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
                    <label className="form-check-label">
                    Female
                    </label>
                    </div>

                    <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
                    <label className="form-check-label">
                    Unisex
                    </label>
                </div>

                    <select className="form-select" style={{ width:'200px' }}>
                        <option value="1">School Uniform</option>
                        <option value="2">Department Shirt</option>
                        <option value="3">Event Shirt</option>
                        <option value="4">Accessories</option>
                        <option value="5">ID Sling</option>
                    </select>
                    <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-primary" type="submit">Search</button>
                    </form>
                </div>
                <div style={{ marginLeft:'20px' }}>
                      <Link to='/add_item'>
                        <button className="btn btn-primary">Add Item</button>
                      </Link>
                    </div>  
            </div>
            
            </div>
        </div>


<Link to="/update_item" style={{ display:'flex', justifyContent:'center', textDecoration:'none' }}>
        <div className='product-card-supplier'>
            <img className='sup-product-image object-fit-cover border rounded' src={ product }/>
            <div>
                <p className='product-text'>Product Name</p>
            </div>

</div>

<div className='product-card-supplier'>
            <img className='sup-product-image object-fit-cover border rounded' src={ product }/>
            <div>
                <p className='product-text'>Product Name</p>
            </div>

</div>
</Link>
            
            </div>
            
                
    </div>

            
</div>
        </div>

    )
}

export default Supplier