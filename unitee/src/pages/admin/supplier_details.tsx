import { Link } from 'react-router-dom'

function Supplier_details(){
    return <div className="col-md-12 supplier-details-container" style={{ display:'flex', flexFlow:'row', gap:'15em', height:'60em' }}>
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
                <button className="upload-profile-btn" style={{ marginTop:'15px', marginRight:'15px' }}>Upload</button>
                <span>ImageFileName</span>
                <div className="form-check form-switch" style={{ marginTop:'15px', marginLeft:'15px' }}>
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                <label className="form-check-label">Activate</label>
                </div>
                <div className="item-btns-container" style={{ marginTop:'10px' }}> 
                    <button type="button" className="btn btn-lg btn-warning">Add Supplier</button>
                    <Link to='/add_supplier'>
                        <button type="button" className="btn btn-lg btn-danger">cancel</button>
                    </Link>

                </div>
            </div>         
    </div>
}

export default Supplier_details