import './register.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import React, { useState } from 'react'


function Register() {Register

    const [IDNumber, setIDNumber] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [departments, setDepartments] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [gender, setGender] = useState('');
    const navigate = useNavigate();

    const handleIDNumber = (value) => {
        setIDNumber(value);
    }

    const handleFirstName = (value) => {
        setFirstName(value);
    }

    const handleLastName = (value) => {
        setLastName(value);
    }

    const handlePassword = (value) => {
        setPassword(value);
    }

    const handleDepartment = (value) => {
        setDepartments(value);
    }

    const handEmail = (value) => {
        setEmail(value);
    }

    const handlePhoneNumber = (value) => {
        setPhoneNumber(value);
    }

    const handleGender = (value) => {
        setGender(value);
    }


    const handleSave = () => {
        const data = {
            "customer_Id": IDNumber,
            "customer_FirstName": firstName,
            "customer_LastName": lastName,
            "customer_Password": password,
            "customer_Email": email,
            "customer_PhoneNum": phoneNumber,
            "customer_Gender": gender,
            "DepartmentID": departments
        };

        const url = "https://localhost:7080/Customer/register";
        axios.post(url, data).then((result) => {
            if (result.status === 200) {
                if(result.data) {
                    alert('Successfully Registered');
                    navigate('/', { state: { customerData: result.data } });
                } else {
                    alert(result.data); 
                }
            } else {
                alert('Network error or server not responding');
            }
        }).catch((error) => {
            alert(error);
        })
    }

    return (
            <div className='container main-container row'>
                <div className="col content-container">
                    <div className='row g-3' style={{ justifyContent: 'center' }}>
                        <h3 className='col-md-12 header-title'>Register</h3>
                        <div className='col-md-6'>
                            <input className="form-control input" placeholder="ID Number" onChange={(e) => handleIDNumber(e.target.value)} />
                        </div>
                        <div className='col-md-6'>
                            <input className="form-control input" type='email' placeholder="First Name" onChange={(e) => handleFirstName(e.target.value)} />
                        </div>
                        <div className='col-md-6'>
                            <input className="form-control input" placeholder="Last Name" onChange={(e) => handleLastName(e.target.value)} />
                        </div>
                        <div className='col-md-6'>
                            <input className="form-control input" placeholder="Email" onChange={(e) => handEmail(e.target.value)} />
                        </div>
                        <div className='col-md-6'>
                            <input className="form-control input" placeholder="Phone Number" onChange={(e) => handlePhoneNumber(e.target.value)} />
                        </div>
                        <div className='col-md-6'>
                            <input className="form-control input" type='password' placeholder="Password" onChange={(e) => handlePassword(e.target.value)} />
                        </div>
                        <div className='col-md-6' >
                            <select className="form-select select" style={{ backgroundColor:'#00215E', color:'white' }} onChange={(e) => handleDepartment(e.target.value)}>
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
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="Male" checked={gender === 'Male'} onChange={(e) => handleGender(e.target.value)} />
                                <label className="form-check-label">
                                    Male
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" value="Female" checked={gender === 'Female'} onChange={(e) => handleGender(e.target.value)} />
                                <label className="form-check-label">
                                    Female
                                </label>
                            </div>
                        </div>
                        <Link className='col-md-6 link' to='/' style={{ padding: '0px' }}>
                            <button className="col-md-12 btn btn-primary button" onClick={() => handleSave()}>REGISTER</button>
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