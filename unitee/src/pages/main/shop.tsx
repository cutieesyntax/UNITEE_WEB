import './shop.css'
import product from "../../assets/images/shop_products/product.png"
import axios from 'axios'
import { useState, useEffect } from 'react';

function Shop() {

    interface ProductType {
        productTypeId: number;
        product_Type: string;
    }

    const [productTypes, setProductTypes] = useState<ProductType[]>([]);
      const [productTypeId, setSelectedProductType] = useState('');

    useEffect(() => {
        axios.get('https://localhost:7017/ProductType')
            .then(res => {
              setProductTypes(res.data);
            })
            .catch((err) => {console.error(err)
        });
    }, []);

    return <div className='container shop-contianer'>
    <div className='col content-container'>
    <div className='row g-3' style={{ justifyContent: 'center' }}>
        <p className='shop-title'>AVAILABLE ITEMS</p>           
        <h4 className='col-md-9' style={{ paddingLeft:'60px' }}>Sort by:</h4>
        <div className='col-md-4 product-select'>
            <select onChange={(e) => setSelectedProductType (e.target.value)} value={productTypeId} style={{ backgroundColor:'#00215E', color:'white' }} required>
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
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="Male" checked/>
                <label className="form-check-label">
                    Male
                </label>
            </div>

            <div className="form-check-shop">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" value="Female" checked/>
                <label className="form-check-label">
                    Female
                </label>
            </div>               
            <div className='col-md-3'>
            <div className="form-check-shop">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" value="Unisex" checked/>
                <label className="form-check-label">
                    Unisex
                </label>
            </div>
            </div>
            </div>
            
            <div className='col-md-12' style={{ marginTop:'50px',justifyContent:'center',display:'flex', marginRight:'250px'}}>
                <div className='col-md-6'>
                <input className="form-control input" placeholder="Search" />
                
                </div>                
            </div>
            
            <div className='col-md-12 product-container'>
                <div className='col-md-3'>
                    <div className="card" style={{width:'230px'}}>
                        <img src={ product }/>
                        <div className="card-body">
                            <h5 className="card-title">Product Name</h5>
                            <p className="card-text">$999.00</p>
                        </div>
                    </div>
                </div>

                <div className='col-md-3'>
                    <div className="card" style={{width:'230px'}}>
                        <img src={ product }/>
                        <div className="card-body">
                            <h5 className="card-title">Product Name</h5>
                            <p className="card-text">$999.00</p>
                        </div>
                    </div>
                </div>

                <div className='col-md-3'>
                    <div className="card" style={{width:'230px'}}>
                        <img src={ product }/>
                        <div className="card-body">
                            <h5 className="card-title">Product Name</h5>
                            <p className="card-text">$999.00</p>
                        </div>
                    </div>
                </div>
        </div>
        <div className='col-md-12 product-container'>
                <div className='col-md-3'>
                    <div className="card" style={{width:'230px'}}>
                        <img src={ product }/>
                        <div className="card-body">
                            <h5 className="card-title">Product Name</h5>
                            <p className="card-text">$999.00</p>
                        </div>
                    </div>
                </div>

                <div className='col-md-3'>
                    <div className="card" style={{width:'230px'}}>
                        <img src={ product }/>
                        <div className="card-body">
                            <h5 className="card-title">Product Name</h5>
                            <p className="card-text">$999.00</p>
                        </div>
                    </div>
                </div>

                <div className='col-md-3'>
                    <div className="card" style={{width:'230px'}}>
                        <img src={ product }/>
                        <div className="card-body">
                            <h5 className="card-title">Product Name</h5>
                            <p className="card-text">$999.00</p>
                        </div>
                    </div>
                </div>
        </div>

        <div className='col-md-12 product-container'>
                <div className='col-md-3'>
                    <div className="card" style={{width:'230px'}}>
                        <img src={ product }/>
                        <div className="card-body">
                            <h5 className="card-title">Product Name</h5>
                            <p className="card-text">$999.00</p>
                        </div>
                    </div>
                </div>

                <div className='col-md-3'>
                    <div className="card" style={{width:'230px'}}>
                        <img src={ product }/>
                        <div className="card-body">
                            <h5 className="card-title">Product Name</h5>
                            <p className="card-text">$999.00</p>
                        </div>
                    </div>
                </div>

                <div className='col-md-3'>
                    <div className="card" style={{width:'230px'}}>
                        <img src={ product }/>
                        <div className="card-body">
                            <h5 className="card-title">Product Name</h5>
                            <p className="card-text">$999.00</p>
                        </div>
                    </div>
                </div>
        </div>                      
        </div>
        
            
</div>

        
</div>

}

export default Shop