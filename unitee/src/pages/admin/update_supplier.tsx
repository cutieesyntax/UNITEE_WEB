//import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react';
import axios from 'axios';
//import Supplier from '../supplier/supplier_items';

function Update_supplier() {

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
    const [imageUrl, setImageUrl] = useState('');
    const [supplierIsActive, setSupplierIsActive] = useState('');
    const { id } = useParams();
    const navigate = useNavigate();

    // Change Image
    const handleImageChange = (e) => {
        const uploadedImage = e.target.files[0];
        setImage(uploadedImage); 
        setImageUrl(URL.createObjectURL(uploadedImage)); 
    }
    
    // Get All Supplier By Id
    useEffect(() => {
        axios.get(`https://localhost:7017/Supplier/${id}`)
        .then(response => {
            const supplier = response.data;
            setIDNumber(supplier.id);
            setFirstName(supplier.firstName);
            setLastName(supplier.lastName);
            setEmail(supplier.email);
            setPhoneNumber(supplier.phoneNumber);
            setShopName(supplier.shopName);
            setAddress(supplier.address);
            setPassword(supplier.password);
            setConfirmPassword(supplier.password);
            setImage(supplier.image);
            setSupplierIsActive(supplier.isActive ? 'true' : 'false');
        })
    }, [id])

            
    // Update Supplier
    const updateSupplier = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert('Passwords do not match.');
            return;
        }

        const formData = new FormData();
        formData.append('Id', id);
        formData.append('FirstName', firstName);
        formData.append('LastName', lastName);
        formData.append('Email', email);
        formData.append('PhoneNumber', phoneNumber);
        formData.append('ShopName', shopName);
        formData.append('Address', address);
        formData.append('Password', password);
        formData.append('Image', image);

        axios.put(`https://localhost:7017/Supplier/updateSupplier/${id}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
        .then((result) => {
            if (result.status === 200) {
                alert('Successfully Updated A Supplier');
            } else {
                alert(result.data.message);
                alert("Error");
            }
        })
        .catch(() => {
            alert('Network error or server not responding');
        });
    }; 

    // Activate/Deactivate Supplier
    const handleDeactivateActivate = () => {
        const newActivationStatus = supplierIsActive === 'true' ? 'false' : 'true';

        axios.put(
            `https://localhost:7017/Supplier/activate/${id}`,
            newActivationStatus,
            { headers: { 'Content-Type': 'application/json' } }
        )
        .then((result) => {
            if (result.status === 200) {
                console.log("Success");
                setSupplierIsActive(newActivationStatus);
            } else {
                alert(result.data.message);
                alert("Error");
            }
        })
        .catch(() => {
            alert('Network error or server not responding');
        });
    };

    return (
        <form onSubmit={updateSupplier} className="col-md-12 supplier-details-container" style={{ display: 'flex', flexFlow: 'row', gap: '15em', height: '60em' }}>
            <div className="col-md-3">
                <label className="form-label">ID Number</label>
                <input type="text" className="form-control" value={IDNumber} onChange={(e) => setIDNumber(e.target.value)}/>
                <label className="form-label">First Name</label>
                <input type="text" className="form-control" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                <label className="form-label">Last Name</label>
                <input type="text" className="form-control" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                <label className="form-label">Shop</label>
                <input type="text" className="form-control" value={shopName} onChange={(e) => setShopName(e.target.value)}/>
                <label className="form-label">Phone Number</label>
                <input type="number" className="form-control" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>
                <label className="form-label">Address</label>
                <input type="text" className="form-control" value={address} onChange={(e) => setAddress(e.target.value)}/>
            </div>
            <div className="col-md-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" value={email} placeholder="name@example.com" onChange={(e) => setEmail(e.target.value)}/>
                <label className="form-label">Password</label>
                <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <label className="form-label">Confirm Password</label>
                <input type="password" className="form-control" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
                <label className="form-label">Upload Image</label>
                {(imageUrl || image) && (
                    <img
                        src={imageUrl ? imageUrl : `https://localhost:7017/${image}`}
                        alt="Supplier"
                        style={{ width: '100px', height: '100px' }}
                    />
                )}
                <input className="form-control input" type='file' onChange={handleImageChange} />
                <div className="form-check form-switch" style={{ marginTop: '15px', marginLeft: '15px' }}>
                <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckDefault"
                    checked={supplierIsActive === 'true'}
                    onChange={handleDeactivateActivate}
                />
                <label className="form-check-label">Activate</label>
                </div>
                <div className="item-btns-container" style={{ marginTop: '10px' }}>
                <button type="submit" className="btn btn-lg btn-warning">Update Supplier</button>
                <div>
                    <button type="button" className="btn btn-lg btn-danger" onClick={() => navigate('/add_supplier/:id')}>Cancel</button>
                </div>
                </div>
            </div>
        </form>
    );
}

export default Update_supplier