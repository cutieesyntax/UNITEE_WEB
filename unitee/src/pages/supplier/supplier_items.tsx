import './supplier_items.css'
import { Link, useParams  } from "react-router-dom"
import logo from '../../assets/images/unitee.png'
import sprofile from '../../assets/images/s-icon.png'
import logoutSupplier from "../../assets/images/icons/logoutSupplier.png"
import items from "../../assets/images/icons/items.png"
import orders from "../../assets/images/icons/orders.png"
import reports from "../../assets/images/icons/reports.png"
import featured_item from '../../assets/images/main/home_1.png'
//import productImage from "../../assets/images/shop_products/product.png"
import { useState, useEffect } from 'react'
import axios from 'axios'

function Supplier (){

    interface ProductType {
        productTypeId: number;
        product_Type: string;
    }

    const [products, setProducts] = useState([]);
    const [productTypes, setProductTypes] = useState<ProductType[]>([]);
    const [productTypeId, setSelectedProductType] = useState('');
    const { id } = useParams();
    const [departments, setDepartments] = useState([]);


    //Read All Departments
    useEffect(() => {
        axios.get('https://localhost:7017/Department')
            .then(res => {
                setDepartments(res.data);
            })
            .catch((err) => {console.error(err)
        });
    }, []);

    const getDepartmentName = (departmentId) => {
        const department = departments.find(d => d.departmentId === departmentId);
        return department ? department.department_Name : 'Unknown Department';
    };

    //Read All Product Types
    useEffect(() => {
        axios.get('https://localhost:7017/ProductType')
            .then(res => {
                setProductTypes(res.data);
            })
            .catch((err) => {console.error(err)
        });
    }, []);

    const getProductTypeName = (productTypeId) => {
        const productType = productTypes.find(p => p.productTypeId === productTypeId);
        return productType ? productType.product_Type : 'Unknown Type';
    };

    useEffect(() => {
        axios.get(`https://localhost:7017/Product/bysupplier/${id}`)
            .then(res => {
                setProducts(res.data);
                console.log(res.data);
            })
            .catch((err) => {console.error(err)
        });
    }, []);

    return (
        <div className="supplier-container">
            <header className="supplier-header row">
                <Link to='' className="col-md-3">
                    <img className="logo" src={ logo } style={{height:'60px', marginLeft:'50px'}}/>
                </Link>
                <p className='col'>ITEMS</p>
                <Link to='' className="col-md-1">
                    <img className="sprofile" src={ sprofile } style={{height:'40px'}}/>
                </Link>
            </header>

        <div className="items-container">
            <div className="menu-button-container">
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
                    <p className='items-title' style={{ marginTop:'100px', fontWeight:'400' }}>AVAILABLE ITEMS</p>           
                    <h4 className='col-md-9' style={{ paddingLeft:'60px' }}>Sort by:</h4>
                    <div className='col-md-4 department-select'>
                    <select onChange={(e) => setSelectedProductType (e.target.value)} value={productTypeId} className="form-select select" style={{ backgroundColor:'#00215E', color:'white' }}>
                        <option value="">Select Product Type</option>
                            {productTypes.map((product_types, index) => (
                                <option key={index} value={product_types.productTypeId}>
                                    {product_types.product_Type}
                                </option>
                            ))}              
                    </select>
                    </div>
                    

                    <div className='col-md-4 gender-filter-container' style={{alignItems:'center', display:'flex'}}>
                    <h3 style={{ paddingRight:'10px' }}>Gender:</h3>
                        <div className="form-check-shop">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" defaultChecked/>
                            <label className="form-check-label">
                                Male
                            </label>
                        </div>

                        <div className="form-check-shop">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" defaultChecked/>
                            <label className="form-check-label">
                                Female
                            </label>
                        </div>               
                        <div className="form-check-shop">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" defaultChecked/>
                            <label className="form-check-label">
                                Unisex
                            </label>
                        </div>
                        </div>
                        
                        <div className='col-md-12' style={{ marginTop:'50px',justifyContent:'center',display:'flex',alignItems:'center'}}>
                            <div>
                            <Link to={`/add_item/${id}`}>
                                <button className="add-item-btn">Add Item</button>
                            </Link>
                            </div>
                            <div className='col-md-6'>
                            <input className="form-control input" placeholder="Search" />
                            
                            </div>                
                        </div>

                        {products.map((product) => (
                            <Link to={`/update_item/${id}/${product.productId}`} style={{ display: 'flex', justifyContent: 'center', textDecoration: 'none' }}>
                            <div className="card mb-3" style={{maxWidth: '900px',backgroundColor:'transparent', borderStyle:'none', marginTop:'30px'}}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                <img src={`https://localhost:7017/${product.image}`} className="img-fluid rounded-start" alt="..."/>
                                </div>
                                <div className="col-md-8">
                                <div className="card-body">
                                    <span className="card-title-supplier">{product.productName}</span>
                                    <p className="size-available">Sizes available: {product.sizes}</p>
                                    <p className="prod-gender">Gender: {product.category}</p>
                                    <p className="prod-department">Department: {getDepartmentName(product.departmentId)}</p>
                                    <p className="prod-type">Product type: {getProductTypeName(product.productTypeId)}</p>
                                    <p className="prod-stock">Stocks available: {product.stocks}</p>
                                    <span></span>
                                    <p className="prod-price">Price: {product.price}</p>
                                </div>
                                </div>
                            </div>
                            </div>
                            </Link>
                        ))}
                        
                    </div> 
                </div>
            </div>
        </div>

    )
}

export default Supplier