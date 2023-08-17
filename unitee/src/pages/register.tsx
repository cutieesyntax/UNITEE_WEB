import './register.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function Register() {
    interface Department {
        departmentId: number;
        department_Name: string;
    }

    type ValidationErrors = {
        IDNumber?: string;
        firstName?: string;
        lastName?: string;
        email?: string;
        phoneNumber?: string;
        password?: string;
        confirmPassword?: string;
        gender?: string;
        departmentId?: string;
        image?: string | null;
    };

    const [IDNumber, setIDNumber] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [gender, setGender] = useState('');
    const [departments, setDepartments] = useState<Department[]>([]);
    const [departmentId, setSelectedDepartment] = useState('');
    const [image, setImage] = useState(null);
    const [validationErrors, setValidationErrors] = useState<ValidationErrors>({});
    const navigate = useNavigate();

    const handleIDnumber = (value) => {
        setIDNumber(value);
    }

    const handleFirstName = (value) => {
        setFirstName(value);
    }

    const handleLastName = (value) => {
        setLastName(value);
    }

    const handleEmail = (value) => {
        setEmail(value);
    }

    const handlePhoneNumber = (value) => {
        setPhoneNumber(value);
    }

    const handlePassword = (value) => {
        setPassword(value);
    }

    const handleConfirmPassword = (value) => {
        setConfirmPassword(value);
    }

    const handleGender = (value) => {
        setGender(value);
    }

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    }

    //Read All Departments
    useEffect(() => {
        axios.get('https://localhost:7017/Department')
            .then(res => {
                setDepartments(res.data);
            })
            .catch((err) => {console.error(err)
        });
    }, []);

    // Register an account with validation
    const handleSubmit = async (event) => {
        event.preventDefault();
    
        const errors = validateForm();
        
        // Check if the fields are empty or not 
        if (
            !IDNumber ||
            !departmentId ||
            !firstName ||
            !lastName ||
            !email ||
            !phoneNumber ||
            !password ||
            !confirmPassword ||
            !gender ||
            !image
        ) {
            toast.error("Please fill up the required fields.");
            return;
        }
    
        if (Object.keys(errors).length === 0) {
            const formData = new FormData();
    
            formData.append('Id', IDNumber);
            formData.append('DepartmentId', departmentId);
            formData.append('FirstName', firstName);
            formData.append('LastName', lastName);
            formData.append('Email', email);
            formData.append('PhoneNumber', phoneNumber);
            formData.append('Password', password);
            formData.append('Gender', gender);
            formData.append('Image', image);
    
            try {
                const response = await axios.post('https://localhost:7017/Users/register', formData);
                if (response.data) {
                    toast.success('Successfully registered.');
                    navigate('/');
                } else {
                    alert(response.data); 
                }
            } catch (err) {
                console.error(err);
                toast.error("Failed to register. Please try again later.");
            }
        }
    };


    // Validation 
    const validateForm = () => {
        const errors: ValidationErrors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    
        if (!IDNumber || !/^\d+$/.test(IDNumber)) {
            errors.IDNumber = 'ID Number must be a valid number.';
        } 
        
        if (!firstName) {
            errors.firstName = 'First Name is required.';
        }
    
        if (!lastName) {
            errors.lastName = 'Last Name is required.';
        }
    
        if (!email) {
            errors.email = "Email is required";
        } else if (!regex.test(email)) {
            errors.email = "This is not a valid email format";
        }
    
        if (!phoneNumber || !/^\d+$/.test(phoneNumber)) {
            errors.phoneNumber = 'Phone Number must be a valid number.';
        }
    
        if (password.length < 6) {
            errors.password = 'Password must be at least 6 characters long.';
        }
    
        if (password !== confirmPassword) {
            errors.confirmPassword = 'Passwords do not match.';
        }
    
        if (!image) { 
            errors.image = 'Please upload an image';
        }
    
        if (!gender) {
            errors.gender = 'Please select a gender.';
        }
    
        if (!departmentId) {
            errors.departmentId = 'Please select a department.';
        }

        setValidationErrors(errors);

        return errors;
    };


    return (
        <form onSubmit={handleSubmit}>
            <div className='container main-container row'>
                <div className="col content-container">
                    <div className='row g-3' style={{ justifyContent: 'center' }}>
                        <h3 className='col-md-12 header-title'>Register</h3>
                        {validationErrors.IDNumber && <div className="error">{validationErrors.IDNumber}</div>}
                        <div className='col-md-6'>
                            <input 
                                className="form-control input" 
                                name='username' 
                                placeholder="ID Number" 
                                onChange={(e) => handleIDnumber(e.target.value)} 
                            />
                        </div>
                        <div className='col-md-6'>
                            {validationErrors.firstName && <div className="error">{validationErrors.firstName}</div>}
                            <input 
                                className="form-control input" 
                                type='First Name' 
                                placeholder="First Name" 
                                onChange={(e) => handleFirstName(e.target.value)} 
                            />
                        </div>
                        <div className='col-md-6'>
                            {validationErrors.lastName && <div className="error">{validationErrors.lastName}</div>}
                            <input 
                                className="form-control input" 
                                placeholder="Last Name" 
                                onChange={(e) => handleLastName(e.target.value)} 
                            />
                        </div>
                        <div className='col-md-6'>
                            {validationErrors.email && <div className="error">{validationErrors.email}</div>}
                            <input 
                                className="form-control input" 
                                name='email' 
                                placeholder="Email" 
                                onChange={(e) => handleEmail(e.target.value)} 
                            />
                        </div>
                        <div className='col-md-6'>
                            {validationErrors.phoneNumber && <div className="error">{validationErrors.phoneNumber}</div>}
                            <input 
                                className="form-control input" 
                                placeholder="Phone Number" 
                                onChange={(e) => handlePhoneNumber(e.target.value)} 
                            />
                        </div>
                        <div className='col-md-6'>
                            {validationErrors.password && <div className="error">{validationErrors.password}</div>}
                            <input 
                                className="form-control input" 
                                type='password' 
                                name='password' 
                                placeholder="Password" 
                                onChange={(e) => handlePassword(e.target.value)} 
                            />
                        </div>
                        
                        <div className='col-md-6' >
                            {validationErrors.departmentId && <div className="error">{validationErrors.departmentId}</div>}
                            <select 
                                onChange={(e) => setSelectedDepartment(e.target.value)} 
                                value={departmentId} 
                                className="form-select select" 
                                style={{ backgroundColor:'#00215E', color:'white' }} 
                            >
                            <option value="">Select Department</option>
                                {departments.map((department, index) => (
                                    <option key={index} value={department.departmentId}>
                                        {department.department_Name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className='col-md-6'>
                            {validationErrors.confirmPassword && <div className="error">{validationErrors.confirmPassword}</div>}
                            <input 
                                className="form-control input" 
                                type='password' placeholder="Confirm Password" 
                                onChange={(e) => handleConfirmPassword(e.target.value)} 
                            />
                        </div>
                        <div className='col-md-6' style={{ marginLeft: '330px' }}>
                            {validationErrors.image && <div className="error">{validationErrors.image}</div>}
                            <input 
                                className="form-control input" 
                                type='file' 
                                onChange={handleImageChange} 
                            />
                        </div>
                        <div className='col-md-12' style={{ marginTop: '20px' }}>
                            <span>Gender:</span>
                            {validationErrors.gender && <div className="error">{validationErrors.gender}</div>}
                            <div className="form-check">
                                <input 
                                    className="form-check-input" 
                                    type="radio" 
                                    name="flexRadioDefault" 
                                    id="flexRadioDefault1" 
                                    value="Male" 
                                    checked={gender === 'Male'} 
                                    onChange={(e) => handleGender(e.target.value)} 
                                />
                                <label className="form-check-label">
                                    Male
                                </label>
                            </div>
                            <div className="form-check">
                                <input 
                                    className="form-check-input" 
                                    type="radio" 
                                    name="flexRadioDefault" 
                                    id="flexRadioDefault2" 
                                    value="Female" 
                                    checked={gender === 'Female'} 
                                    onChange={(e) => handleGender(e.target.value)} 
                                />
                                <label className="form-check-label">
                                    Female
                                </label>
                            </div>
                        </div>
                        <div className='col-md-6 link' style={{ padding: '0px' }}>
                            <button className="col-md-12 btn btn-primary button" type="submit">REGISTER</button>
                        </div>
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
        </form>
    )
}

export default Register