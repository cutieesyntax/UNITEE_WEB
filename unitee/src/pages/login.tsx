import { Link, useNavigate} from 'react-router-dom'
import './login.css'
import { useState } from 'react'
import axios from 'axios';

function Login() {

    const [IDNumber, setIDNumber] = useState('');
    const [Password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleIDNumber = (value) => {
        setIDNumber(value);
    }

    const handlePassword = (value) => {
        setPassword(value);
    }

    const handleLogin = () => {
        setLoading(true); 
        const data = {
            Id: IDNumber,
            Password: Password
        };
    
        const url = 'https://localhost:7017/Users/login';
        axios.post(url, data)
        .then((result) => {
            setLoading(false);
            if (result.status === 200) {
                alert('Successfully Logged In');
                switch (result.data.role) {
                    case 'Customer':
                    navigate(`/main/${result.data.user.id}`, { state: { userData: result.data.user } });
                    break;
                    case 'Supplier':
                    navigate(`/supplier_items/${result.data.user.id}`, { state: { supplierData: result.data.user } });
                    break;
                    case 'Admin':
                    navigate(`/add_supplier/${result.data.user.id}`, { state: { adminData: result.data.user } });
                    break;
                    default:
                    console.log('Unknown role');
                    break;
                }
                } else {
                    alert(result.data.message);
                }
            })
            .catch(() => {
                setLoading(false);
                alert('Network error or server not responding');
            });
        }

    if (loading) {
        return <div className='row container main-container'>Loading...</div>;
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
                    <input className="col-md-12 form-control input" placeholder="ID Number" value={IDNumber} onChange={(e) => handleIDNumber(e.target.value)} required/>
                    <input className="col-md-12 form-control input" type='password' placeholder="Password" value={Password} onChange={(e) => handlePassword(e.target.value)} required/>
                    <div className='col-md-12 link' style={{ padding: '0' }}>
                        <button className="col-md-12 btn btn-primary button" onClick={() => handleLogin()} disabled={loading}>LOGIN</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login