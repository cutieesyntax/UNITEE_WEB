import { Link } from 'react-router-dom'
import product from "../../assets/images/shop_products/product.png"
import logo from "../../assets/images/unitee.png"

function Update_item(){
    return <div className="container add_item_container">
    <header style={{ marginTop:'30px', display:'flex', alignItems:'center', gap:'45em' }}>
        <Link to='/supplier_items' style={{ textDecoration:'none' }}>
                <span className="back_btn">Back</span>
            </Link>

            <img className="logo" src={ logo }/>
        </header>
    <div style={{ display:'flex', justifyContent:'center', marginTop:'50px', gap:'30px'}}>
        <div>
            <img src={ product } style={{ width:'350px' }} />
        </div>
    <div className="col-md-4 item_deatils_container">           
    <div className="col-md-12 price-container">
            <p className="col-md-3 item-price">Product Name:</p>
            <input className="form-control input" style={{ width:'28em' }}/>
        </div>
        <div className="input-group-description">
            <textarea className="form-control" aria-label="Product description" placeholder="Enter product description"/>
        </div>

        <div className='col-md-9 department-select' style={{ display:'flex', gap:'20px' }}>
            <p className="department-item">Department:</p>
        <select className="form-select select" style={{ backgroundColor:'#00215E', color:'white' }}>
            <option value="1">Senior High School</option>
            <option value="2">Elementary and Junior High School</option>
            <option value="3">Criminology</option>
            <option value="4">Nursing</option>
            <option value="5">Allied Engineering</option>
            <option value="6">Customs Management</option>
            <option value="7">Computer Studies</option>
            <option value="8">Marine Transportation</option>
            <option value="9">Teacher Education</option>
            <option value="10">Marine Engineering</option>
            <option value="11">Computer Studies</option>
            <option value="12">Hotel and Tourism Management</option>                
        </select>
        </div>

        <div className="col-md-12 price-container">
            <p className="col-md-3 item-price">Enter price:</p>
            <input className="form-control input" style={{ width:'28em' }}/>
        </div>

        <div className="size-container">
            <p className="available-sizes">Sizes Available:</p>
            <div className="item-sizes-container" style={{ display:'flex', marginLeft:'20px' }}>
                <div className="form-check-shop">
                    <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1" value="S"/>
                    <label className="form-check-label">
                        S
                    </label>
                </div>

                    <div className="form-check-shop">
                        <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault2" value="M"/>
                        <label className="form-check-label">
                            M
                        </label>
                    </div>

                    <div className="form-check-shop">
                        <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault3" value="L"/>
                        <label className="form-check-label">
                            L
                        </label>
                    </div>

                    <div className="form-check-shop">
                        <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault4" value="XL"/>
                        <label className="form-check-label">
                            XL
                        </label>
                    </div>

                    <div className="form-check-shop">
                        <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault5" value="2XL"/>
                        <label className="form-check-label">
                            2XL
                        </label>
                    </div>

                    <div className="form-check-shop">
                        <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault6" value="3XL"/>
                        <label className="form-check-label">
                            3XL
                        </label>
                    </div>
            </div>
            
            <div className='item-gender-container'>
            <h4>Gender:</h4>
                <div className='genders'>
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

                    <div className="form-check-shop">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" value="Unisex" checked/>
                        <label className="form-check-label">
                            Unisex
                        </label>
                    </div>
                </div>
            </div>
        </div>

        <div className='col-md-12 category-select'>
            <p className="category-item">Type:</p>
        <select className="form-select select" style={{ backgroundColor:'#00215E', color:'white' }}>
            <option value="1">School Uniform</option>
            <option value="2">Event T-shirt</option>
            <option value="3">Department Shirt</option>
            <option value="4">ID Sling</option>
        </select>
        </div>

        <div className="item-btns-container">
        <button type="button" className="btn btn-lg btn-warning">Add Item</button>
        <button type="button" className="btn btn-lg btn-danger">Deactivate</button>
            
        </div>

    </div>
</div>

    </div>
}

export default Update_item