import { Link, useNavigate} from 'react-router-dom'
import './login.css'
import React, { useState } from 'react'
import axios from 'axios';
import background from "../../src/assets/images/campus.png"
import logo from "../../src/assets/images/unitee.png"

function Login() {

    const [IDNumber, setIDNumber] = useState('');
    const [Password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleIDNumber = (value) => {
        setIDNumber(value);
    } 

    const handlePassword = (value) => {
        setPassword(value);
    }

    const handleLogin = () => {
        const data = {
            "customer_Id": IDNumber,
            "password": Password
        };

        const url = "https://localhost:7080/Customer/login";
        axios.post(url, data).then((result) => {
            if (result.status === 200) {
                if(result.data) {
                    alert('Successfully Logged In');
                    navigate('/main', { state: { customerData: result.data } });
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
        <div className='container main-container'>

            <div className="content-container">
                <div className='row login-container'>
                   
                    <img src={ logo } style={{ marginBottom:'40px' }}/>
                    <input className="col-md-12 form-control input" placeholder="ID Number" onChange={(e) => handleIDNumber(e.target.value)} />
                    <input className="col-md-12 form-control input" type='password' placeholder="Password" onChange={(e) => handlePassword(e.target.value)} />
                    <Link className='col-md-12 link' to='/main' style={{ padding: '0', marginTop:'20px' }}>
                        <button className="col-md-12 btn btn-primary button" onClick={() => handleLogin()} >Sign In</button>
                    </Link>

                    <Link className='col-md-12 signUp-link' to='/register'>
                        <div className='create-acc'>
                     <div style={{ display:'flex'}}>
                     <span className='signup-span' style={{ textDecoration:'none' }}>Don't have an account?</span>
                      <span className='signup-btn-span'>Sign Up</span>
                     </div>
                        
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Login