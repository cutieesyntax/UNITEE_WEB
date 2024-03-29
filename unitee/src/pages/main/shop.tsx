import './shop.css'
import product from "../../assets/images/shop_products/product.png"

function Shop() {
    return <div className='container shop-contianer row'>
        <div className='col content-container'>
        <div className='row g-3' style={{ justifyContent: 'center' }}>
            <h1 className='col-md-12 header-title' style={{ fontWeight:'normal' }}>AVAILABLE ITEMS</h1>           
            <h4>Sort by:</h4>
            <div className='col-md-4 department-select'>
            <select className="form-select select">
                <option value="1">Computer Studies</option>
                <option value="2">Nursing</option>
                <option value="3">Criminology</option>
                <option value="4">Senior High School</option>
            </select>
            </div>

            <div className='col-md-5 gender-filter-container' style={{ justifyContent:'center', alignItems:'center', flexFlow:'row', display:'flex'}}>
            <h3 style={{ paddingRight:'10px' }}>Gender:</h3>
                <div className='col-md-3'>
                <div className="form-check-shop">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                    <label className="form-check-label">
                        Male
                    </label>
                </div>
                </div>
                <div className='col-md-3'>
                <div className="form-check-shop">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
                    <label className="form-check-label">
                        Female
                    </label>
                </div>
                </div>
                
                <div className='col-md-3'>
                <div className="form-check-shop">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" checked/>
                    <label className="form-check-label">
                        Unisex
                    </label>
                </div>
                </div>
                </div>
                <div className='col-md-12' style={{ marginTop:'50px', marginLeft:'275px'}}>
                    <div className='col-md-5'>
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