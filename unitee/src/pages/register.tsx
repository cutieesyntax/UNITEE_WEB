import './register.css'
import { Link } from 'react-router-dom'

function Register() {Register

    return (
            <div className='container main-container row'>
                <div className="col content-container">
                    <div className='row g-3' style={{ justifyContent: 'center' }}>
                        <h3 className='col-md-12 header-title'>Register</h3>
                        <div className='col-md-6'>
                            <input className="form-control input" placeholder="ID Number"/>
                        </div>
                        <div className='col-md-6'>
                            <input className="form-control input" type='email' placeholder="Email"/>
                        </div>
                        <div className='col-md-6'>
                            <input className="form-control input" placeholder="First Name"/>
                        </div>
                        <div className='col-md-6'>
                            <input className="form-control input" placeholder="Phone Number"/>
                        </div>
                        <div className='col-md-6'>
                            <input className="form-control input" placeholder="Last Name"/>
                        </div>
                        <div className='col-md-6'>
                            <input className="form-control input" type='password' placeholder="Password"/>
                        </div>
                        <div className='col-md-6'>
                            <select className="form-select select" style={{ backgroundColor:'transparent', color:'white' }}>
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
                        <div className='col-md-6'>
                            <input className="form-control input" type='password' placeholder="Confirm Password"/>
                        </div>
                        <div className='col-md-12' style={{ marginTop: '20px' }}>
                            <span>Gender:</span>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                <label className="form-check-label">
                                    Male
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
                                <label className="form-check-label">
                                    Female
                                </label>
                            </div>
                        </div>
                        <Link className='col-md-6 link' to='/supplier_items' style={{ padding: '0px' }}>
                            <button className="col-md-12 btn btn-primary button">REGISTER</button>
                        </Link>
                    </div>
                </div>
                <div className="col row g-3 content-container" style={{ marginTop: '-200px' }}>
                    <h3 className='col-md-12 header-title'>Existing User?</h3>
                    <span className='col-md-12' style={{ textAlign: 'center' }}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, ex ratione. Aliquid!
                    </span>
                    <Link className='col-md-4' to='/'>
                        <button className="col-md-12 btn btn-light button">LOGIN</button>
                    </Link>
                </div>

            </div>
    )
}

export default Register