import { Link, useNavigate} from 'react-router-dom'
import './login.css'
import { useState } from 'react'
import axios from 'axios';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function Login() {

    type ValidationErrors = {
        IDNumber?: string;
        Password?: string;
        confirmPassword?: string;
    }

    const [IDNumber, setIDNumber] = useState('');
    const [Password, setPassword] = useState('');
    const [validationErrors, setValidationErrors] = useState<ValidationErrors>({});
    const navigate = useNavigate();

    const handleIDNumber = (value) => {
        setIDNumber(value);
    }

    const handlePassword = (value) => {
        setPassword(value);
    }

    // Login Account
    const handleLogin = () => {
        const isValid = validateForm();

        const data = {
            Id: parseInt(IDNumber),
            Password: Password
        };

        // Check if fields are empty
        if (!isValid || !IDNumber || !Password) {
            toast.error("Please fill up the required fields.");
            return;
        }
        
        // Check if the ID is a number
        if (!/^\d+$/.test(IDNumber)) {
            toast.error("Please provide a valid ID Number.");
            return;
        }

        const url = 'https://localhost:7017/Users/login';
        axios.post(url, data)
        .then((result) => {
            if (result.status === 200) {
                toast.success('Successfully Logged In');
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
        .catch((error) => {
            if (error.response && error.response.status === 400) {
                if (error.response.data === "Invalid user id." || 
                    error.response.data === "Invalid password." ||
                    error.response.data === "Account is deactivated.") {
                    
                    toast.error(error.response.data);
                } else {
                    toast.error("Wrong Credentials");
                }
            } else {
                toast.error('Unexpected Error');
            }
        });
    }
    
    // Validation 
    const validateForm = () => {
        const errors: ValidationErrors = {};
    
        setValidationErrors(errors);

        if (Object.keys(errors).length === 0) {
            return true;
        } else {
            return false;
        }
    };


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
                    {validationErrors.IDNumber && <div className="error">{validationErrors.IDNumber}</div>}
                    <input 
                        className="col-md-12 form-control input" 
                        placeholder="ID Number" 
                        value={IDNumber} 
                        onChange={(e) => handleIDNumber(e.target.value)} 
                        required
                    />
                    {validationErrors.Password && <div className="error">{validationErrors.Password}</div>}
                    <input 
                        className="col-md-12 form-control input" 
                        type='password' 
                        placeholder="Password" 
                        value={Password} 
                        onChange={(e) => handlePassword(e.target.value)} 
                        required
                    />
                    <div className='col-md-12 link' style={{ padding: '0' }}>
                        <button className="col-md-12 btn btn-primary button" onClick={() => handleLogin()}>LOGIN</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login