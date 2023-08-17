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

    // type ValidationErrors = {
    //     productName?: string;
    //     description?: string;
    //     price?: string;
    //     category?: string;
    //     productTypeId?: number;
    //     departmentId?: number;

    // }

    const [productName, setProductName] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productCategory, setProductCategory] = useState('');
    const [productTypes, setProductTypes] = useState<ProductType[]>([]);
    const [productTypeId, setSelectedProductType] = useState('');
    const [productQuantity, setProductQuantity] = useState('');
    const [departments, setDepartments] = useState<Department[]>([]);
    const [departmentId, setSelectedDepartment] = useState('');
    const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    //const [validationErrors, setValidationErrors] = useState<ValidationErrors>({});
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

    //Add Item
    const handleAddItem = () => {

        const formData = new FormData();
        formData.append('ProductTypeId', productTypeId);
        formData.append('DepartmentId', departmentId);
        formData.append('ProductName', productName);
        formData.append('Description', productDescription);
        formData.append('Category', productCategory);
        formData.append('Price', productPrice);
        formData.append('Stocks', productQuantity);
        formData.append('Image', selectedImage as File);
        formData.append('SupplierId', id);

        const sizesString = selectedSizes.join(',');

        formData.append('Sizes', sizesString);

            axios.post('https://localhost:7017/Product/addproduct', formData, {
                headers: {
                'Content-Type': 'multipart/form-data',
                },
            })
            .then((result) => {
                if (result.status === 200) {
                    alert('Successfully Added An Item');
                    navigate(`/supplier_items/${id}`);
                } else {
                    alert(result.data.message);
                }
            })
            .catch(() => {
                alert('Network error or server not responding');
            });
        };

        // Validation
        // const validateForm = () => {
        //     const errors: ValidationErrors = {};
        //     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        //     if(!)
        // }

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

            <div className="col-md-12 price-container">
                <p className="col-md-3 item-price">Enter Quantity:</p>
                <input onChange={(e) => setProductQuantity(e.target.value)} className="form-control input" style={{ width:'28em' }} required/>
            </div>

            <div className="size-container">
                <p className="available-sizes">Sizes Available:</p>
                <div className="item-sizes-container" style={{ display:'flex', marginLeft:'20px' }}>
                    {/* Add checkboxes for each size */}
                    {['XXS', 'XS', 'S', 'M', 'L', 'XL'].map((size) => (
                        <div className="form-check-shop" key={size}>
                        <input
                            className="form-check-input"
                            type="checkbox"
                            name="flexRadioDefault"
                            id={`flexRadioDefault${size}`}
                            value={size}
                            checked={selectedSizes.includes(size)}
                            onChange={(e) => {
                            const sizeValue = e.target.value;
                            setSelectedSizes(prevSizes =>
                                prevSizes.includes(sizeValue)
                                ? prevSizes.filter((val) => val !== sizeValue)
                                : [...prevSizes, sizeValue]
                            );
                            }}
                        />
                        <label className="form-check-label">{size}</label>
                        </div>
                    ))}
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