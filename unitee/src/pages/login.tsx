import { Link, useNavigate} from 'react-router-dom'
import './login.css'
import React, { useState } from 'react'
import axios from 'axios';

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
        <div className='row container main-container'>
            <div className="col content-container" style={{ marginTop: '-200px' }}>
                <div className='row side-container'>
                    <h3 className='col-md-12 header-title'>New here?</h3>
                    <span className='col-md-12' style={{ textAlign: 'center' }}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, ex ratione. Aliquid!
                    </span>
                    <Link className='col-md-4 link' to='/register'>
                        <button className="col-md-12 btn btn-light button">SIGN UP</button>
                    </Link>
                </div>
            </div>
            <div className="col content-container">
                <div className='row login-container'>
                    <h3 className='col-md-12 header-title'>Log In</h3>
                    <input className="col-md-12 form-control input" placeholder="ID Number" onChange={(e) => handleIDNumber(e.target.value)} />
                    <input className="col-md-12 form-control input" type='password' placeholder="Password" onChange={(e) => handlePassword(e.target.value)} />
                    <Link className='col-md-12 link' to='/main' style={{ padding: '0' }}>
                        <button className="col-md-12 btn btn-primary button" onClick={() => handleLogin()} >LOGIN</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Login