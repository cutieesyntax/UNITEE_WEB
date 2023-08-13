import { Link, useParams, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';

function Supplier_details(){

    const [IDNumber, setIDNumber] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [shopName, setShopName] = useState('');
    const [address, setAddress] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [image, setImage] = useState(null);
    const navigate = useNavigate();
    const { id } = useParams();

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

    const handleShopName = (value) => {
        setShopName(value);
    }

    const handleAddress = (value) => {
        setAddress(value);
    }

    const handlePassword = (value) => {
        setPassword(value);
    }

    const handleConfirmPassword = (value) => {
        setConfirmPassword(value);
    }

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    }

    // Add Supplier
    const addSupplier  = async (e) => {
        e.preventDefault();
        
        //Confirm Password
        if (password !== confirmPassword) {
            alert('Passwords do not match.');
            return;
        }

        const formData = new FormData();
        formData.append('Id', IDNumber);
        formData.append('FirstName', firstName);
        formData.append('LastName', lastName);
        formData.append('Email', email);
        formData.append('PhoneNumber', phoneNumber);
        formData.append('ShopName', shopName);
        formData.append('Address', address);
        formData.append('Password', password);
        formData.append('Image', image);

        try {
            const response = await axios.post('https://localhost:7017/Supplier/addSupplier', formData);
            if (response.data) {
                alert('Successfully Added Supplier.');
                navigate(`/add_supplier/${id}`);
                console.log(response.data);
            } else {
                alert(response.data); 
            }
        } catch (err) {
            console.error(err);
        }
    };


    return (
        <form onSubmit={addSupplier} className="col-md-12 supplier-details-container" style={{ display:'flex', flexFlow:'row', gap:'15em', height:'60em' }}>
                <div className="col-md-3">
                    <label className="form-label">ID Number</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" onChange={(e) => handleIDnumber(e.target.value)}/>
                    <label className="form-label">First Name</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" onChange={(e) => handleFirstName(e.target.value)}/>
                    <label className="form-label">Last Name</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" onChange={(e) => handleLastName(e.target.value)}/>
                    <label className="form-label">Shop</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" onChange={(e) => handleShopName(e.target.value)}/>
                    <label className="form-label">Phone Number</label>
                    <input type="number" className="form-control" id="exampleFormControlInput1" onChange={(e) => handlePhoneNumber(e.target.value)}/>
                    <label className="form-label">Address</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" onChange={(e) => handleAddress(e.target.value)}/>
                    </div>

                    <div className="col-md-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" onChange={(e) => handleEmail(e.target.value)}/>
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleFormControlInput1" onChange={(e) => handlePassword(e.target.value)}/>
                    <label className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" id="exampleFormControlInput1" onChange={(e) => handleConfirmPassword(e.target.value)}/>
                    <label className="form-label">Upload Image</label>
                    <input className="form-control input" type='file' onChange={handleImageChange} />
                    <div className="form-check form-switch" style={{ marginTop:'15px', marginLeft:'15px' }}>
                    {/* <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                    <label className="form-check-label">Activate</label> */}
                    </div>
                    <div className="item-btns-container" style={{ marginTop:'10px' }}> 
                    <button type="submit" className="btn btn-lg btn-warning">Add Supplier</button>
                        <Link to={`/add_supplier/${id}`}>
                            <button type="button" className="btn btn-lg btn-danger">cancel</button>
                        </Link>

                    </div>
                </div>         
        </form>
    )
}

export default Supplier_details