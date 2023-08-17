import './shop.css'
//import product2 from "../../assets/images/shop_products/product.png"
import browse from "../../assets/images/shop_products/browse 1.png"
import axios from 'axios'
import { useState, useEffect, useRef } from 'react';
import { useParams  } from "react-router-dom";
import { toast } from 'react-toastify';

function Shop() {

    interface ProductType {
        productTypeId: number;
        product_Type: string;
    }

    const [cart, setCart] = useState([]);
    const [displayProduct, setDisplayProduct] = useState([]);
    const [productTypes, setProductTypes] = useState<ProductType[]>([]);
    const [productTypeId, setSelectedProductType] = useState('');
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [suppliers, setSuppliers] = useState({});
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedGender, setSelectedGender] = useState('');
    const [selectedSizes, setSelectedSizes] = useState([]);
    const [quantity, setQuantity] = useState(0);
    const { id } = useParams();

    const maleRef = useRef(null);
    const femaleRef = useRef(null);
    const unisexRef = useRef(null);

    // Get All Product Types
    useEffect(() => {
        axios.get('https://localhost:7017/ProductType')
            .then(res => {
                setProductTypes(res.data);
            })
            .catch((err) => {console.error(err)
        });
    }, []);

    // Get Product Type Name
    const getProductTypeName = (productTypeId) => {
        const productType = productTypes.find(p => p.productTypeId === productTypeId);
        return productType ? productType.product_Type : 'Unknown Type';
    };

    // Get All Products
    useEffect(() => {
        axios.get('https://localhost:7017/Product')
            .then(async res => {
                setDisplayProduct(res.data);

                // Fetch supplier data for each product
                const supplierIds = res.data.map(product => product.supplierId);
                const uniqueSupplierIds = [...new Set(supplierIds)];
                const suppliersData = {};

                for (const supplierId of uniqueSupplierIds) {
                    const response = await axios.get(`https://localhost:7017/Supplier/${supplierId}`);
                    suppliersData[supplierId] = response.data;
                }

                setSuppliers(suppliersData);
            })
            .catch(err => {
                console.error(err);
            });
    }, []);

    // Filter Products
    const filteredProduct = displayProduct.filter(product => 
        product.isActive &&
        (productTypeId === '' || product.productTypeId.toString() === productTypeId) &&
        (
            selectedGender === '' ||
            selectedGender === 'unisex' ||
            product.category.toLowerCase() === selectedGender
        ) &&
        (
            product.productName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.stocks.toString().includes(searchTerm) ||
            product.price.toString().includes(searchTerm)
        )
    );

    // toggle the radio buttons for gender
    const handleGenderClick = (e, gender) => {
        if (selectedGender === gender) {
            setSelectedGender('');
            e.target.checked = false;
        } else {
            setSelectedGender(gender);
        }
    };

    // When clicking it will be checked
    const handleSizeButtonClick = (size) => {
        setSelectedSizes(size === selectedSizes ? null : size);

        setSelectedProduct(prevSelectedProduct => ({
            ...prevSelectedProduct,
            selectedSizes: size
        }));
    };

    // Decrease quantity
    const handleDecrement = () => {
        if (quantity > 0) {
            setQuantity(prevCount => prevCount - 1)
        }
    }
    
    // Increase quantity
    const handleIncrement = () => {
        if (quantity < 100) {
            setQuantity(prevCount => prevCount + 1)
        }
    }


    // Add product to cart
    const addToCart = async () => {
        if (!selectedProduct) return;
        if (quantity <= 0) {
            toast.warning("Please select a valid quantity.");
            return;
        }

        // Check if the product from cart exists
        const existingCartItem = cart.find(item => item.ProductId === selectedProduct.productId);

        if (existingCartItem) {
            const updatedCart = cart.map(item =>
                item.ProductId === selectedProduct.productId
                    ? { ...item, Quantity: item.Quantity + quantity }
                    : item
            );

            setCart(updatedCart);
            toast.success("Item quantity updated in cart");
            return;
        }
    
        const cartAddRequest = {
            UserId: id,
            ProductId: selectedProduct.productId,
            Quantity: quantity,
            Size: selectedProduct.selectedSize
        };
    
        try {
            await axios.post('https://localhost:7017/Cart/add', cartAddRequest);
            toast.success("Item added to cart");

            // Fetch updated cart data and update state
            const updatedCartResponse = await axios.get('https://localhost:7017/Cart');
            setCart(updatedCartResponse.data);
        } catch (error) {
            toast.error(error.response.data);
        }
    }

    return (
        <div className='container shop-contianer'>
        <div className='col content-container'>
        <div className='shop-filter-container'>
        <div className='shop-title-container'>
            <div className='motto-container'>
                <p className='shop-title1'>New Clothes,</p>
                <p className='shop-title2'>New Passion.</p>
            </div> 
                <img className='browse-image' src={ browse }/>   
        </div>
        <div className="col-md-13 sort-container">
            <h4 style={{ paddingBottom: '10px', color: 'white' }}>Sort by:</h4>
            <div className='gender-container-shop'>
            <div className="form-check">
                <input 
                    className="form-check-input" 
                    type="radio" 
                    name="gender" 
                    ref={maleRef} 
                    id="male" 
                    value="male" 
                    defaultChecked={selectedGender === 'male'} 
                    onClick={(e) => handleGenderClick(e, 'male')} 
                />
                    <label className="form-check-label">
                        Male
                    </label>
                </div>

                <div className="form-check">
                <input 
                    className="form-check-input" 
                    type="radio" 
                    name="gender" 
                    ref={femaleRef} 
                    id="female" 
                    value="female" 
                    defaultChecked={selectedGender === 'female'} 
                    onClick={(e) => handleGenderClick(e, 'female')} 
                />
                <label className="form-check-label">
                    Female
                </label>
                </div>

                <div className="form-check">
                <input 
                    className="form-check-input" 
                    type="radio" 
                    name="gender" 
                    ref={unisexRef} 
                    id="unisex" 
                    value="unisex" 
                    defaultChecked={selectedGender === 'unisex'} 
                    onClick={(e) => handleGenderClick(e, 'unisex')} 
                />
                <label className="form-check-label">
                    Unisex
                </label>
            </div>
                <select
                        onChange={(e) => setSelectedProductType(e.target.value)}
                        value={productTypeId}
                        className="form-select select"
                        style={{ width:'200px', color: '#00215E', backgroundColor: 'white' }}
                    >
                        <option value="" disabled hidden>
                            Select Product Type
                        </option>
                        <option value="" style={{ color: '#00215E' }}>All</option>
                        {productTypes.map((product_types, index) => (
                            <option key={index} value={product_types.productTypeId} style={{ color: '#00215E' }}>
                                {product_types.product_Type}
                            </option>
                        ))}
                    </select>
                <form className="d-flex" role="search" style={{ width: '400px' }}>
                    <input
                        className="form-control input"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </form>
            </div>
        </div>

        <div className='col-md-12 product-container'>
            {filteredProduct.map(product => (
                <div
                    key={product.productId}
                    className='col-md-3'
                >
                    <div
                        className="card"
                        style={{ width: '230px', height: '330px' }}
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        onClick={() => setSelectedProduct(product)}
                    >
                        <img src={`https://localhost:7017/${product.image}`} alt={product.productName} />
                        <div className="card-body">
                            <h5 className="card-title">{product.productName}</h5>
                            <p className="card-text">₱{product.price}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>       
        </div>


        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content" style={{ backgroundColor:'#00215E' }}>
                    <div className="modal-header">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className='col-md-12 row'>
                        <div className="modal-body">
                            {selectedProduct && (
                                <div style={{ display: 'flex', flexFlow: 'row' }}>
                                    <img className="prod-image" src={`https://localhost:7017/${selectedProduct.image}`} />
                                    <div className='product-details-container' style={{ fontSize: '18px', lineHeight: '1.5' }}>
                                        <span className="prod-name" style={{ fontSize: '24px', fontWeight: 'bold' }}>{selectedProduct.productName}</span>
                                        <span className="description" style={{ fontSize: '18px' }}>Description: {selectedProduct.description}</span>
                                        <span className="category" style={{ fontSize: '18px' }}>Gender: {selectedProduct.category}</span>
                                        <span className="price" style={{ fontSize: '20px' }}>Price: <span style={{ fontSize: '20px', color: '#00E02C' }}>₱{selectedProduct.price}</span></span>
                                        <span className="type" style={{ fontSize: '18px' }}>{getProductTypeName(selectedProduct.productTypeId)}</span>
                                        <span className="stocks" style={{ fontSize: '18px' }}>Stocks: {selectedProduct.stocks}</span>
                                        <span className="shop" style={{ fontSize: '18px' }}>Seller: {suppliers[selectedProduct.supplierId]?.shopName}</span>
                                        <div className='size-guide-container'>
                                            <span className="prod-sizeGuide" style={{ fontSize: '18px' }}>Don't know your size?</span>
                                            <button className='sizeGuide-btn' data-bs-toggle="button" style={{ fontSize: '18px', padding: '5px 10px' }}>Size guide</button>
                                        </div>
                                        <h2 style={{ fontSize: '20px', marginTop: '10px' }}>Sizes Available:</h2> 
                                        <div className='sizes-container'>
                                        {selectedProduct.sizes.split(',').map((size, index) => (
                                            <button
                                                key={index}
                                                className={`size-button ${size === selectedSizes ? 'selected' : ''}`}
                                                onClick={() => handleSizeButtonClick(size)}
                                                >
                                                {size}
                                            </button>
                                        ))}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="modal-footer">
                        <div className="d-grid gap-2 col-6 mx-auto">
                                <button type="button" className="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#cartModal">Proceed</button>
                        </div>
                    </div>
                </div>
            </div>         
        </div>

        <div className="modal fade" id="cartModal" tabIndex={-1} aria-labelledby="cartModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content" style={{ backgroundColor: '#00215E' }}>
                <div className="modal-header">
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className='col-md-12 row'>
                    <div className="modal-body">
                    {selectedProduct && (
                        <div style={{ display: 'flex', flexFlow: 'row' }}>
                        <img className="prod-image" src={`https://localhost:7017/${selectedProduct.image}`} />
                        <div className='product-details-container'>
                            <span className="prod-name">{selectedProduct.productName}</span>
                            <span className="price">Price: ₱{selectedProduct.price}</span>
                            <span className="stocks-size">Stocks: {selectedProduct.stocks}</span>
                            <span className='sizes-shop'>Sizes:</span>
                            <div className='sizes-container-shop'>
                            {selectedProduct.sizes.split(',').map((size, index) => (
                                <button
                                    key={index}
                                    className={`size-button ${size === selectedSizes ? 'selected' : ''}`}
                                    onClick={() => handleSizeButtonClick(size)}
                                    >
                                    {size}
                                </button>
                            ))}
                            </div>
                            <div className='quantity-container'>
                                <button type='button' onClick={handleDecrement} className='input-group-text' id='minus'>-</button>
                                    <div className='form-control text-center' id='textQuantity'>
                                        <span className='centered-text'>{quantity}</span>
                                    </div>
                                <button type='button' onClick={handleIncrement} className='input-group-text' id='plus'>+</button>
                            </div>
                        </div>
                        </div>
                    )}
                    </div>
                </div>
                <div className="modal-footer">
                    <div className="d-grid gap-2 col-6 mx-auto">
                        <button type="button" className="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#cartModal" onClick={addToCart}>Add to Cart</button>
                        <button type="button" className="btn btn-light btn-lg" data-bs-toggle="modal" data-bs-target="#productModal">Cancel</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    )
}

export default Shop