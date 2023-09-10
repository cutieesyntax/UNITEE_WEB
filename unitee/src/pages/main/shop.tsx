import './shop.css'
import product2 from "../../assets/images/shop_products/product2.png"
import browse from "../../assets/images/shop_products/browse 1.png"
import seller from "../../assets/images/imageprofile.jpeg"
import box from "../../assets/images/shop_products/placeOrder.png"

function Shop() {
    return <div className='container shop-contianer'>
    <div className='content-container'>
    <div className='shop-filter-container'>

        <div className='shop-title-container'>
            <div className='motto-container'>
                <p className='shop-title1'>New Clothes,</p>
                <p className='shop-title2'>New Passion.</p>
                </div> 
                <img className='browse-image' src={ browse }/>   
        </div>
        <div className="shop-sort-container" style={{ width:'1000px'}}>
            <h5>Sort by:</h5>
            <div className='filterShop-container-shop'>
            <div className="container">
                        <form  style={{ display:'flex', flexFlow:'row', gap:'10px' }}>
                            <label>
                                <input type="radio" name="radio"/>
                                <span>Male</span>
                            </label>
                            <label>
                                <input type="radio" name="radio"/>
                                <span>Female</span>
                            </label>
                            <label>
                                <input type="radio" name="radio"/>
                                <span>Unisex</span>
                            </label>
                        </form>
                    </div>
                    <div className='type-container'>
                    <h5 style={{ marginRight:'5px' }}>Type: </h5>
                <select className="shop-form-select" style={{ width:'200px', fontSize:'20px' }}>         
                    <option value="1">School Uniform</option>
                    <option value="2">Department Shirt</option>
                    <option value="3">Event Shirt</option>
                    <option value="4">Accessories</option>
                    <option value="5">ID Sling</option>
                </select>
                
                    </div>

                    <div className='col-md-5 search-shop-container' style={{  display:'flex', flexFlow:'row' }}>

                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="col-md-3 btn btn-outline-primary" type="submit">Search</button>

                    </div>
            </div>
        </div>
        </div>
          


        <div className='col-md-10 product-container'>

                <div className='col-md-3'>
                    <div className="card" style={{width:'230px', height:'300px'}} data-bs-toggle="modal" data-bs-target="#productModal">
                        <img src={ product2 }/>
                        <div className="card-body">
                            <h5 className="card-title">Product Name</h5>
                            <p className="card-text">$999.00</p>
                        </div>
                    </div>
                </div>

                <div className='col-md-3'>
                    <div className="card" style={{width:'230px', height:'300px'}} data-bs-toggle="modal" data-bs-target="#productModal">
                        <img src={ product2 }/>
                        <div className="card-body">
                            <h5 className="card-title">Product Name</h5>
                            <p className="card-text">$999.00</p>
                        </div>
                    </div>
                </div>

                <div className='col-md-3'>
                    <div className="card" style={{width:'230px', height:'300px'}} data-bs-toggle="modal" data-bs-target="#productModal">
                        <img src={ product2 }/>
                        <div className="card-body">
                            <h5 className="card-title">Product Name</h5>
                            <p className="card-text">$999.00</p>
                        </div>
                    </div>
                </div>

                <div className='col-md-3'>
                    <div className="card" style={{width:'230px', height:'300px'}} data-bs-toggle="modal" data-bs-target="#productModal">
                        <img src={ product2 }/>
                        <div className="card-body">
                            <h5 className="card-title">Product Name</h5>
                            <p className="card-text">$999.00</p>
                        </div>
                    </div>
                </div>

                <div className='col-md-3'>
                    <div className="card" style={{width:'230px', height:'300px'}} data-bs-toggle="modal" data-bs-target="#productModal">
                        <img src={ product2 }/>
                        <div className="card-body">
                            <h5 className="card-title">Product Name</h5>
                            <p className="card-text">$999.00</p>
                        </div>
                    </div>
                </div>

                <div className='col-md-3'>
                    <div className="card" style={{width:'230px', height:'300px'}} data-bs-toggle="modal" data-bs-target="#productModal">
                        <img src={ product2 }/>
                        <div className="card-body">
                            <h5 className="card-title">Product Name</h5>
                            <p className="card-text">$999.00</p>
                        </div>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div className="card" style={{width:'230px', height:'300px'}} data-bs-toggle="modal" data-bs-target="#productModal">
                        <img src={ product2 }/>
                        <div className="card-body">
                            <h5 className="card-title">Product Name</h5>
                            <p className="card-text">$999.00</p>
                        </div>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div className="card" style={{width:'230px', height:'300px'}} data-bs-toggle="modal" data-bs-target="#productModal">
                        <img src={ product2 }/>
                        <div className="card-body">
                            <h5 className="card-title">Product Name</h5>
                            <p className="card-text">$999.00</p>
                        </div>
                    </div>
                </div>
                
        </div>                      
        </div>
        

<div className="product-modal modal fade" id="productModal" tabIndex={-1} aria-labelledby="productModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-xl modal-dialog-centered">
    <div className="modal-content" style={{ backgroundColor:'#ffff' }}>
      <div className="modal-header">
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className='col-md-12 row' style={{ display:'flex', justifyContent:'center', alignItems:'center', padding:'20px' }}>
      <div className="modal-body" style={{ marginBottom:'80px' }}>
        <div style={{ display:'flex', flexFlow:'row', backgroundColor:'white', padding:'10px' }}>
           <div className='col-md-5'>
           <img className="prod-image" src={ product2 }/>
           </div>
            <div className='product-details-container'>
            <span className="prod-name">Product Name</span>
            <span className='prod-rating'>Product Rating 
                <div className="rating" style={{ display:'flex', justifyContent:'start' }}>
                    <input type="radio" id="star-1" name="star-radio" value="star-1"/>
                    <label htmlFor="star-1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
                    </label>
                    <input type="radio" id="star-2" name="star-radio" value="star-1"/>
                    <label htmlFor="star-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
                    </label>
                    <input type="radio" id="star-3" name="star-radio" value="star-1"/>
                    <label htmlFor="star-3">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
                    </label>
                    <input type="radio" id="star-4" name="star-radio" value="star-1"/>
                    <label htmlFor="star-4">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
                    </label>
                    <input type="radio" id="star-5" name="star-radio" value="star-1"/>
                    <label htmlFor="star-5">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
                    </label>
                    <span className='total-rating'>5.0</span></div>
                    </span>
            <span className="price">Price: PHP <span className='prod-detail'>123</span> </span>
            <span className="type">Type: <span className='prod-detail'>Department Shirt</span> </span>
            <span className="stocks">Available Stocks: <span className='prod-detail'>6454</span> </span>
            
            <div className='size-guide-container'>
                <span className="prod-sizeGuide">Don't know your size?</span>
                <button className='sizeGuide-btn btn btn-outline-primary' data-bs-toggle="button"><a href="#"></a>Size guide</button>
            </div>
            <h4 style={{ color:'#020654', marginTop:'20px' }}>Sizes Available: </h4>
            <div className='sizes-container'>
            <div className="col-md-12 container">
                        <form className='col-md-12'  style={{ gap:'17px', display:'flex', width:'400px', flexFlow:'row', flexWrap:'wrap' }}>
                            <label>
                                <input type="radio" name="radio"/>
                                <span>S</span>
                            </label>
                            <label>
                                <input type="radio" name="radio"/>
                                <span>M</span>
                            </label>
                            <label>
                                <input type="radio" name="radio"/>
                                <span>L</span>
                            </label>
                            <label>
                                <input type="radio" name="radio"/>
                                <span>XL</span>
                            </label>
                            <label>
                                <input type="radio" name="radio"/>
                                <span>2XL</span>
                            </label>
                            <label>
                                <input type="radio" name="radio"/>
                                <span>3XL</span>
                                </label>
                                <label>
                                <input type="radio" name="radio"/>
                                <span>XL</span>
                            </label>
                            <label>
                                <input type="radio" name="radio"/>
                                <span>2XL</span>
                            </label>
                            <label>
                                <input type="radio" name="radio"/>
                                <span>3XL</span>
                            </label>
                           
                        </form>

                        <h4 style={{ color:'#020654', paddingTop:'50px' }}>Quantity: <input style={{ width:'100px' }} type="number" /></h4>
                        <span className='stocks-per-size'>9900 pieces available</span>
                    </div>

                   
            </div>
            </div>
        </div>
        
        
      </div>
      <div className='col-md-12 seller-main-container row'>
        <div className='col-md-1 seller-img'>
        <span className="seller"><img className='seller-prof' src={ seller } alt="" /></span>
        </div>
        <div className='col-md-2 seller-info-contianer'>
            <h3>Shop Name</h3>
            <button className='btn btn-outline-primary'>View Shop</button>
        </div>
        <div className='col-md-2 shop-rating-container'>
            <h5>Shop Rating:</h5>
            <div className="rating" style={{ display:'flex', justifyContent:'start' }}>
                    <input type="radio" id="star-1" name="star-radio" value="star-1"/>
                    <label htmlFor="star-1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
                    </label>
                    <input type="radio" id="star-2" name="star-radio" value="star-1"/>
                    <label htmlFor="star-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
                    </label>
                    <input type="radio" id="star-3" name="star-radio" value="star-1"/>
                    <label htmlFor="star-3">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
                    </label>
                    <input type="radio" id="star-4" name="star-radio" value="star-1"/>
                    <label htmlFor="star-4">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
                    </label>
                    <input type="radio" id="star-5" name="star-radio" value="star-1"/>
                    <label htmlFor="star-5">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
                    </label>
                    <span className='total-rating'>5.0</span></div>
        </div>
        <div className='col-md-3 prod-total'>
                        <h5>Products:</h5>
                        <h3>300</h3>
                    </div>
                    </div>

                    
      </div>
      <div className="modal-footer">
       <div className="d-grid col-2 mx-auto">
       <button className="proceed-Btn"data-bs-toggle="modal" data-bs-target="#informModal">
            Add to Cart
            </button>
       </div>
      </div>
    </div>
  </div>
</div>

<div className="added-toCart modal fade" id="informModal" tabIndex={-1} aria-labelledby="informModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      
      <div className="info-message-content modal-body" style={{ padding:'50px 50px 10px 50px' }}>
        <h2 className='cart-info-message'>Product Successfully added to Cart!</h2>
        
            <div className='col-md-12' style={{ display:'flex',
        justifyContent:'center' }}>
            <img style={{ width:'100%', maxWidth:'200px'}} src={ box } alt="" />
            </div>
            <h6>click anywhere to close.</h6>
      </div>
    </div>
  </div>
</div>

            
</div>

}

export default Shop