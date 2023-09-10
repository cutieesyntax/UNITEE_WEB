import './add_item.css'
import product from "../../assets/images/shop_products/product.png"
import logo from "../../assets/images/unitee.png"
import { Link, useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import axios from 'axios'

function Add_item(){

    interface Department {
        departmentId: number;
        department_Name: string;
    }

    interface ProductType {
        productTypeId: number;
        product_Type: string;
    }


    const [productName, setProductName] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productCategory, setProductCategory] = useState('');
    const [productTypes, setProductTypes] = useState<ProductType[]>([]);
    const [productTypeId, setSelectedProductType] = useState('');
    //const [sizeQuantities, setSizeQuantities] = useState({});
    const [productQuantity1, setProductQuantity1] = useState('');
    const [productQuantity2, setProductQuantity2] = useState('');
    const [productQuantity3, setProductQuantity3] = useState('');
    const [productQuantity4, setProductQuantity4] = useState('');
    const [productQuantity5, setProductQuantity5] = useState('');
    const [productQuantity6, setProductQuantity6] = useState('');
    const [productSize1, setProductSize1] = useState('');
    const [productSize2, setProductSize2] = useState('');
    const [productSize3, setProductSize3] = useState('');
    const [productSize4, setProductSize4] = useState('');
    const [productSize5, setProductSize5] = useState('');
    const [productSize6, setProductSize6] = useState('');
    const [departments, setDepartments] = useState<Department[]>([]);
    const [departmentId, setSelectedDepartment] = useState('');
    //const [checkboxStatus, setCheckboxStatus] = useState({});
    const [selectedImage, setSelectedImage] = useState<File | null>(null);

    const { id } = useParams();
    const inputRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();

        const handleCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            setProductCategory(e.target.value);
        };

        const handleImageClick = () => {
            if (inputRef.current) {
            inputRef.current.click();
            }
        };

        //Upload Image
        const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            if (event.target.files && event.target.files.length > 0) {
                setSelectedImage(event.target.files[0]);
                const reader = new FileReader();
                reader.onload = (e) => {
                    if (e.target && e.target.result) {
                    document.getElementById('productImage')!.setAttribute('src', e.target.result as string);
                    }
                };
                reader.readAsDataURL(event.target.files[0]);
                }
            };

        //Read All Departments
        useEffect(() => {
            axios.get('https://localhost:7017/Department')
                .then(res => {
                    setDepartments(res.data);
                })
                .catch((err) => {console.error(err)
            });
        }, []);

        //Read All Product Types
        useEffect(() => {
            axios.get('https://localhost:7017/ProductType')
                .then(res => {
                    setProductTypes(res.data);
                })
                .catch((err) => {console.error(err)
            });
        }, []);

    // Add Item
    const handleAddItem = () => {
        const size1 = document.getElementById('Size1') as HTMLInputElement;
        const size2 = document.getElementById('Size2') as HTMLInputElement;
        const size3 = document.getElementById('Size3') as HTMLInputElement;
        const size4 = document.getElementById('Size4') as HTMLInputElement;
        const size5 = document.getElementById('Size5') as HTMLInputElement;
        const size6 = document.getElementById('Size6') as HTMLInputElement;
    
        const formData = new FormData();
        formData.append('ProductTypeId', productTypeId);
        formData.append('DepartmentId', departmentId);
        formData.append('ProductName', productName);
        formData.append('Description', productDescription);
        formData.append('Category', productCategory);
        formData.append('Price', productPrice);
        formData.append('Image', selectedImage as File);
        formData.append('SupplierId', id);
    
        axios.post('https://localhost:7017/Product/addproduct', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
        .then((productResponse) => {
            if (productResponse.status === 200) {
                alert('Successfully Added An Item');
                navigate(`/supplier_items/${id}`);
    
                if (size1.checked) {
                    const formData1 = new FormData();
                    formData1.append('size', productSize1);
                    formData1.append('productId', productResponse.data);
                    formData1.append('quantity', productQuantity1);
    
                    axios.post('https://localhost:7017/SizeQuantity/createsizequantity', formData1, {
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    })
                    .then((sizeQuantityResponse) => {
                        if (sizeQuantityResponse.status === 200) {
                            if (size2.checked) {
                                const formData2 = new FormData();
                                formData2.append('size', productSize2);
                                formData2.append('productId', productResponse.data);
                                formData2.append('quantity', productQuantity2);
                
                                axios.post('https://localhost:7017/SizeQuantity/createsizequantity', formData2, {
                                    headers: {
                                        'Content-Type': 'application/json',
                                    },
                                })
                                .then((sizeQuantityResponse) => {
                                    if (sizeQuantityResponse.status === 200) {
                                        if (size3.checked) {
                                            const formData3 = new FormData();
                                            formData3.append('size', productSize3);
                                            formData3.append('productId', productResponse.data);
                                            formData3.append('quantity', productQuantity3);
                            
                                            axios.post('https://localhost:7017/SizeQuantity/createsizequantity', formData3, {
                                                headers: {
                                                    'Content-Type': 'application/json',
                                                },
                                            })
                                            .then((sizeQuantityResponse) => {
                                                if (sizeQuantityResponse.status === 200) {
                                                    if (size4.checked) {
                                                        const formData4 = new FormData();
                                                        formData4.append('size', productSize4);
                                                        formData4.append('productId', productResponse.data);
                                                        formData4.append('quantity', productQuantity4);
                                        
                                                        axios.post('https://localhost:7017/SizeQuantity/createsizequantity', formData4, {
                                                            headers: {
                                                                'Content-Type': 'application/json',
                                                            },
                                                        })
                                                        .then((sizeQuantityResponse) => {
                                                            if (sizeQuantityResponse.status === 200) {
                                                                if (size5.checked) {
                                                                    const formData5 = new FormData();
                                                                    formData5.append('size', productSize5);
                                                                    formData5.append('productId', productResponse.data);
                                                                    formData5.append('quantity', productQuantity5);
                                                    
                                                                    axios.post('https://localhost:7017/SizeQuantity/createsizequantity', formData5, {
                                                                        headers: {
                                                                            'Content-Type': 'application/json',
                                                                        },
                                                                    })
                                                                    .then((sizeQuantityResponse) => {
                                                                        if (sizeQuantityResponse.status === 200) {
                                                                            if (size6.checked) {
                                                                                const formData6 = new FormData();
                                                                                formData6.append('size', productSize6);
                                                                                formData6.append('productId', productResponse.data);
                                                                                formData6.append('quantity', productQuantity6);
                                                                
                                                                                axios.post('https://localhost:7017/SizeQuantity/createsizequantity', formData6, {
                                                                                    headers: {
                                                                                        'Content-Type': 'application/json',
                                                                                    },
                                                                                })
                                                                                .then(() => {
                                                                                    
                                                                                })
                                                                                .catch(() => {
                                                                                    console.log(productResponse.data)
                                                                                    alert('Network error or server not responding');
                                                                                });
                                                                            }
                                                                        } else {
                                                                            alert('Failed to add size');
                                                                        }
                                                                    })
                                                                    .catch(() => {
                                                                        console.log(productResponse.data)
                                                                        alert('Network error or server not responding');
                                                                    });
                                                                }
                                                            } else {
                                                                alert('Failed to add size');
                                                            }
                                                        })
                                                        .catch(() => {
                                                            console.log(productResponse.data)
                                                            alert('Network error or server not responding');
                                                        });
                                                    }
                                                } else {
                                                    alert('Failed to add size');
                                                }
                                            })
                                            .catch(() => {
                                                console.log(productResponse.data)
                                                alert('Network error or server not responding');
                                            });
                                        }
                                    } else {
                                        alert('Failed to add size');
                                    }
                                })
                                .catch(() => {
                                    console.log(productResponse.data)
                                    alert('Network error or server not responding');
                                });
                            }
                        } else {
                            alert('Failed to add size');
                        }
                    })
                    .catch(() => {
                        console.log(productResponse.data)
                        alert('Network error or server not responding');
                    });
                }
                
            } else {
                alert(productResponse.data.message);
            }
        })
        .catch(() => {
            alert('Network error or server not responding');
        });
    };

    return <div className="container add_item_container">
        <header style={{ marginTop:'30px', display:'flex', alignItems:'center', gap:'45em' }}>
        <Link to={`/supplier_items/${id}`} style={{ textDecoration:'none' }}>
                <span className="back_btn">Back</span>
            </Link>

            <img className="logo" src={ logo }/>
        </header>
        <div style={{ display:'flex', justifyContent:'center', marginTop:'50px', gap:'30px'}}>
            <div>
            <input
                ref={inputRef}
                type="file"
                style={{ display: "none" }}
                onChange={handleFileChange}
            />
            <img
                id="productImage"
                src={selectedImage ? URL.createObjectURL(selectedImage) : product}
                alt="Upload Product"
                style={{ width: "350px", cursor: "pointer" }}
                onClick={handleImageClick}
            />
            </div>
        <div className="col-md-4 item_deatils_container">           
        <div className="col-md-12 price-container">
                <p className="col-md-3 item-price">Product Name:</p>
                <input className="form-control input" style={{ width:'28em' }} onChange={(e) => setProductName(e.target.value)} required/>
            </div>
            <div className="input-group-description">
                <textarea className="form-control" aria-label="Product description" placeholder="Enter product description" onChange={(e) => setProductDescription(e.target.value)} required/>
            </div>

            <div className='col-md-9 department-select' style={{ display:'flex', gap:'20px' }}>
                <p className="department-item">Department:</p>
            <select onChange={(e) => setSelectedDepartment(e.target.value)} value={departmentId} className="form-select select" style={{ backgroundColor:'#00215E', color:'white' }} required>
                <option value="">Select Department</option>
                    {departments.map((department, index) => (
                        <option key={index} value={department.departmentId}>
                            {department.department_Name}
                        </option>
                    ))}    
            </select>
            </div>
                        
            <div className="col-md-12 price-container">
                <p className="col-md-3 item-price">Enter price:</p>
                <input className="form-control input" style={{ width:'28em' }} onChange={(e) => setProductPrice(e.target.value)} required/>
            </div>
            

            <div className="size-container">
                <p className="available-sizes">Sizes Available:</p>
                <div className="item-sizes-container" style={{ display: 'flex', flexDirection: 'column', marginLeft: '20px' }}>
                        <div className="form-check-shop">
                            <label className="form-check-label">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    name="flexRadioDefault"
                                    id="Size1"
                                    value="S"
                                    onChange={(e) => setProductSize1(e.target.value)}
                                />
                                S
                            </label>
                            <input className="form-control" type="number" onChange={(e) => setProductQuantity1(e.target.value)}/>
                        </div>

                        <div className="form-check-shop">
                            <label className="form-check-label">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    name="flexRadioDefault"
                                    id="Size2"
                                    value="M"
                                    onChange={(e) => setProductSize2(e.target.value)}
                                />
                                M
                            </label>
                            <input className="form-control" type="number" onChange={(e) => setProductQuantity2(e.target.value)}/>
                        </div>

                        <div className="form-check-shop">
                            <label className="form-check-label">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    name="flexRadioDefault"
                                    id="Size3"
                                    value="L"
                                    onChange={(e) => setProductSize3(e.target.value)}
                                />
                                L
                            </label>
                            <input className="form-control" type="number" onChange={(e) => setProductQuantity3(e.target.value)}/>
                        </div>

                        <div className="form-check-shop">
                            <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="Size4" value="XL" onChange={(e) => setProductSize4(e.target.value)}/>
                            <label className="form-check-label">
                                XL
                            </label>
                            <input className="form-control" type="number" onChange={(e) => setProductQuantity4(e.target.value)}/>
                        </div>

                        <div className="form-check-shop">
                            <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="Size5" value="2XL" onChange={(e) => setProductSize5(e.target.value)}/>
                            <label className="form-check-label">
                                2XL
                            </label>
                            <input className="form-control" type="number" onChange={(e) => setProductQuantity5(e.target.value)}/>
                        </div>

                        <div className="form-check-shop">
                            <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="Size6" value="3XL" onChange={(e) => setProductSize6(e.target.value)}/>
                            <label className="form-check-label">
                                3XL
                            </label>
                            <input className="form-control" type="number" onChange={(e) => setProductQuantity6(e.target.value)}/>
                        </div>
                </div>
                
                <div className='item-gender-container'>
                <h4>Gender:</h4>
                    <div className='genders'>
                        <div className="form-check-shop">
                            <input
                                className='form-check-input'
                                type='radio'
                                name='flexRadioDefault'
                                id='flexRadioDefault1'
                                value='Male'
                                onChange={handleCategoryChange}
                                required
                                checked={productCategory === 'Male'} 
                            />
                            <label className="form-check-label">
                                Male
                            </label>
                        </div>

                        <div className="form-check-shop">
                            <input
                                className='form-check-input'
                                type='radio'
                                name='flexRadioDefault'
                                id='flexRadioDefault2'
                                value='Female'
                                onChange={handleCategoryChange}
                                required
                                checked={productCategory === 'Female'}
                            />
                            <label className="form-check-label">
                                Female
                            </label>
                        </div>               

                        <div className="form-check-shop">
                            <input
                                className='form-check-input'
                                type='radio'
                                name='flexRadioDefault'
                                id='flexRadioDefault3'
                                value='Unisex'
                                onChange={handleCategoryChange}
                                required
                                checked={productCategory === 'Unisex'}
                            />
                            <label className="form-check-label">
                                Unisex
                            </label>
                        </div>
                    </div>
                </div>
            </div>

            <div className='col-md-12 category-select'>
                <p className="category-item">Type:</p>
            <select onChange={(e) => setSelectedProductType (e.target.value)} value={productTypeId} className="form-select select" style={{ backgroundColor:'#00215E', color:'white' }} required>
            <option value="">Select Product Type</option>
                {productTypes.map((product_types, index) => (
                    <option key={index} value={product_types.productTypeId}>
                        {product_types.product_Type}
                    </option>
                ))}
            </select>
            </div>

            <div className="item-btns-container">
            <button type="button" className="btn btn-lg btn-success" onClick={handleAddItem}>Add Item</button>
            <button type="button" className="btn btn-lg btn-danger" onClick={() => navigate(`/supplier_items/${id}`)}>Cancel</button>
                
            </div>

        </div>
    </div>

        

    </div>
}

export default Add_item