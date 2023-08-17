//import product2 from "../../assets/images/shop_products/product2.png"
import gcash from "../../assets/images/shop_products/gcash.png"
import paymaya from "../../assets/images/shop_products/paymaya.png"
import box from "../../assets/images/shop_products/placeOrder.png"
import './cart.css'
import { useEffect, useState} from 'react';
import axios from "axios"

function Cart () {

    const [cartItems, setCartItems] = useState([]);
    const [selectedCartItems, setSelectedCartItems] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleProductClick = (product) => {
        setSelectedProduct(product);
    }

    // Get the Cart Details
    useEffect(() => {
        axios.get("https://localhost:7017/Cart")
            .then(cartResponse => {
                const cartItems = cartResponse.data;
                const productPromises = cartItems.map(cartItem =>
                    axios.get(`https://localhost:7017/Product/byid/${cartItem.productId}`)
                );
                Promise.all(productPromises)
                    .then(productResponses => {
                        const updatedCartItems = cartItems.map((cartItem, index) => {
                            const productResponse = productResponses[index];
                            const productDetails = productResponse.data;
                            return {
                                ...cartItem,
                                productName: productDetails.productName,
                                image: productDetails.image,
                                price: productDetails.price,
                                stocks: productDetails.stocks
                            };
                        });
                        setCartItems(updatedCartItems);
                    })
                    .catch(error => console.error(error));
            })
            .catch(error => console.error(error));
    }, []);
    
    // Checkboxes
    const handleCheckboxChange = (e, itemId) => {
    
        if (e.target.checked) {
            setSelectedCartItems(prevState => [...prevState, itemId]);
        } else {
            setSelectedCartItems(prevState => prevState.filter(id => id !== itemId));
        }
    };

    // Calculate the total amount when checkboxes is clicked
    const calculateTotal = () => {
        const total = cartItems.reduce((acc, cartItem) => {
            if (selectedCartItems.includes(cartItem.id)) {
                return acc + (cartItem.price * cartItem.quantity);
            }
            return acc;
        }, 0);
        return total.toFixed(2);
    };

    // Update Cart Item
    // const handleUpdateCartItems = () => {
    //     useEffect(() => {
    //         axios.put(`https://localhost:7017/Cart/${cartItem.id}`)
    //             .then(response => 
    //     })
    // }

    return (
    <div className="cart-container row">
        <h1 style={{ margin:'25px', color: 'white' }}>Your Cart</h1>
        <div className="col-md-7 cart-prod-container">
            <div className="prod-header">
                <div className="prod-text">
                    <span className="text">Product</span>
                </div>
                <div className="prod-text">
                    <span className="text">Quantity</span>
                </div>
                <div className="prod-text">
                    <span className="text">Price</span>
                </div>
            </div>
            {cartItems.map(cartItem => (
                <div className="details-prod-container" key={cartItem.id}>
                    <div className="prods-container" data-bs-toggle="modal" data-bs-target="#cartProductModal" onClick={() => handleProductClick(cartItem)}>
                        <img 
                            className="prodImage-cart" 
                            src={`https://localhost:7017/${cartItem.image}`} 
                            alt={cartItem.productName} 
                        />
                        <div className="prod-text">
                            <span style={{ marginRight: '30px' }}>{cartItem.productName}</span>
                        </div>
                        <div className="col-md-6 cart-text" style={{ margin: '27px' }}>
                            <div className="prod-text">
                                <span>Quantity: {cartItem.quantity}</span>
                            </div>
                            <div className="prod-text">
                                <span>₱{cartItem.price}</span>
                            </div>
                        </div>
                    </div>
                    <div className="prod-check">
                        <input 
                            className="form-check-input" 
                            type="checkbox" 
                            value="" 
                            id={`flexCheckChecked_${cartItem.id}`} 
                            onClick={e => handleCheckboxChange(e, cartItem.id)}
                            onChange={() => {}}
                        />
                    </div>
                </div>
            ))}
        </div>


        <div className="modal fade" id="cartProductModal" tabIndex={-1} aria-labelledby="cartProductModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content" style={{ backgroundColor:'#00215E' }}>
                <div className="modal-header">
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className='col-md-12 row'>
                <div className="modal-body">
                    <div style={{ display:'flex', flexFlow:'row' }}>
                        <img className="prod-image" src={`https://localhost:7017/${selectedProduct?.image}`}/>
                        <div className='product-details-container'>
                        <span className="prod-name">{selectedProduct?.productName}</span>
                        <span className="price">₱{selectedProduct?.price}</span>
                        <span className="stocks-size">Stocks: {selectedProduct?.stocks}</span>
                        <span className='sizes-shop'>Sizes:</span>      
                        <div className='sizes-container-shop'>
                        <div className="form-check">
                            
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                            <label className="form-check-label">
                                S
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                            <label className="form-check-label">
                                M
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                            <label className="form-check-label">
                                L
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                            <label className="form-check-label">
                                XL
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                            <label className="form-check-label">
                                2XL
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                            <label className="form-check-label">
                                3XL
                            </label>
                        </div>
                        </div>

                        <div>
                        <span>Quantity: </span>
                        <input type="number" className='quantity-input' style={{ color:'black', width:'70px', marginLeft:'10px' }}/>
                        </div>

                        </div>
                    </div>
                </div>
                </div>
                <div className="modal-footer">
                <div className="d-grid gap-2 col-6 mx-auto">
                        <button type="button" className="btn btn-primary btn-lg">Save</button>
                        <button type="button" className="btn btn-danger btn-lg">Remove</button>
                </div>
                </div>
                </div>
            </div>
        </div>

        <div className="col-md-4 summary-container">
            <div className="info-container">
                <div className="summary-details-container">
                <h1 className="summary-title">Summary</h1>
                <span className="payment-option-sub">Payment Option</span>
                <div className="payment-option-container">
                <div className="payment-option-radio">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                    <label className="cart-check-label">
                        <img className="payment-option" src={ gcash }/>
                    </label>
                </div>

                <div className="payment-option-radio">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                    <label className="cart-check-label">
                        <img className="payment-option" src={ paymaya }/>
                    </label>
                </div>

                <div className="payment-option-radio">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                    <label className="cart-check-label">
                        Walk-in
                    </label>
                </div>
                 </div>


                <div className="account-details-container">
                <div className="account-details">
                    <span className="details">PayMaya:</span>
                    <span className="acc-number">09151638815</span>
                </div>
                <div className="account-details">
                    <span className="details">GCash:</span>
                    <span className="acc-number">09151638815</span>
                </div>
                <div className="account-details">
                    <span className="details">Walk-in:</span>
                    <span className="acc-number"> UCLM Cashier</span>
                </div>
                </div>

                <h2 className="total-amount">Total amount: Php {calculateTotal()}</h2>
                </div>

                <div className="box-container-img">
                    <div className="btn-container">
                        <button type="button" className="btn btn-warning btn-lg">Place Order</button>
                    </div>
                    <img className="box" src={ box }/>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Cart