import product2 from "../../assets/images/shop_products/product2.png"
import gcash from "../../assets/images/shop_products/gcash.png"
import paymaya from "../../assets/images/shop_products/paymaya.png"
import box from "../../assets/images/shop_products/placeOrder.png"
import remove from "../../assets/images/icons/trash.png"
import './cart.css'
import toast, { Toaster } from 'react-hot-toast';


export const showToast = (message: string, type: number) => {
  if(type === 1) {
    toast.success(message, {
      style: {
        border: '1px solid #020654',
        padding: '16px',
        color: '#020654',
      },
      iconTheme: {
        primary: '#020654',
        secondary: '#FFFAEE',
      },
    });
  }
  else if(type === 2)
    toast(message, {
      icon: '👏',
    });
  else
    toast.error(message)

}

function Cart () {
    return <div className="cart-container row">
      <Toaster
        position="bottom-center"
        reverseOrder={false}
      />
        <div className="col-md-7 cart-title-container">
        <h1 className="cart-title">Your Cart</h1>
            <div className="cart-remove-btn-container">
              <button type="button" className="btn btn-outline-primary" onClick={() => showToast('Item removed.', 1)}>
                <img style={{ width:'20%', marginRight:'5px'}} src={ remove }/>Remove
              </button></div>
        </div>
        <div className='col-md-7 cart-table-wrapper table-responsive-sm' style={{ marginTop:'20px'}}>
        <table className="table table-hover align-middle caption-top table-xl">
        <caption>Note: You can change the product details by clicking on the product.</caption>
        <thead className='table-dark align-middle'>
            <tr className='thead-row'>
            <th className="cart-table-header" scope="col">Product</th>
            <th className="cart-table-header" scope="col">Size</th>
            <th className="cart-table-header" scope="col">Quantity</th>
            <th className="cart-table-header" scope="col">Price</th>
            <th className="cart-table-header" scope="col"></th>
            </tr>
        </thead>
        <tbody className="table-group-divider">
            <tr >
            <th scope="row" data-bs-toggle="modal" data-bs-target="#cartProductModal"><img className="prod-image-cart" src={ product2 }/>Product Name</th>
            <td data-bs-toggle="modal" data-bs-target="#cartProductModal">XL</td>
            <td data-bs-toggle="modal" data-bs-target="#cartProductModal">3</td>
            <td data-bs-toggle="modal" data-bs-target="#cartProductModal">PHP 123</td>
            <td><div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
            <label className="form-check-label">
            </label>
            </div></td>
            </tr>
            <tr>
            <th scope="row" data-bs-toggle="modal" data-bs-target="#cartProductModal"><img className="prod-image-cart" src={ product2 }/>Product Name</th>
            <td data-bs-toggle="modal" data-bs-target="#cartProductModal">XL</td>
            <td data-bs-toggle="modal" data-bs-target="#cartProductModal">3</td>
            <td data-bs-toggle="modal" data-bs-target="#cartProductModal">PHP 123</td>
            <td><div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
            <label className="form-check-label">
            </label>
            </div></td>
            </tr>
            <tr >
            <th scope="row" data-bs-toggle="modal" data-bs-target="#cartProductModal"><img className="prod-image-cart" src={ product2 }/>Product Name</th>
            <td data-bs-toggle="modal" data-bs-target="#cartProductModal">XL</td>
            <td data-bs-toggle="modal" data-bs-target="#cartProductModal">3</td>
            <td data-bs-toggle="modal" data-bs-target="#cartProductModal">PHP 123</td>
            <td><div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
            <label className="form-check-label">
            </label>
            </div></td>
            </tr>
            <tr>
            <th scope="row" data-bs-toggle="modal" data-bs-target="#cartProductModal"><img className="prod-image-cart" src={ product2 }/>Product Name</th>
            <td data-bs-toggle="modal" data-bs-target="#cartProductModal">XL</td>
            <td data-bs-toggle="modal" data-bs-target="#cartProductModal">3</td>
            <td data-bs-toggle="modal" data-bs-target="#cartProductModal">PHP 123</td>
            <td><div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
            <label className="form-check-label">
            </label>
            </div></td>
            </tr>
            <tr >
            <th scope="row" data-bs-toggle="modal" data-bs-target="#cartProductModal"><img className="prod-image-cart" src={ product2 }/>Product Name</th>
            <td data-bs-toggle="modal" data-bs-target="#cartProductModal">XL</td>
            <td data-bs-toggle="modal" data-bs-target="#cartProductModal">3</td>
            <td data-bs-toggle="modal" data-bs-target="#cartProductModal">PHP 123</td>
            <td><div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
            <label className="form-check-label">
            </label>
            </div></td>
            </tr>
            <tr>
            <th scope="row" data-bs-toggle="modal" data-bs-target="#cartProductModal"><img className="prod-image-cart" src={ product2 }/>Product Name</th>
            <td data-bs-toggle="modal" data-bs-target="#cartProductModal">XL</td>
            <td data-bs-toggle="modal" data-bs-target="#cartProductModal">3</td>
            <td data-bs-toggle="modal" data-bs-target="#cartProductModal">PHP 123</td>
            <td><div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
            <label className="form-check-label">
            </label>
            </div></td>
            </tr>
            <tr >
            <th scope="row" data-bs-toggle="modal" data-bs-target="#cartProductModal"><img className="prod-image-cart" src={ product2 }/>Product Name</th>
            <td data-bs-toggle="modal" data-bs-target="#cartProductModal">XL</td>
            <td data-bs-toggle="modal" data-bs-target="#cartProductModal">3</td>
            <td data-bs-toggle="modal" data-bs-target="#cartProductModal">PHP 123</td>
            <td><div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
            <label className="form-check-label">
            </label>
            </div></td>
            </tr>
            <tr>
            <th scope="row" data-bs-toggle="modal" data-bs-target="#cartProductModal"><img className="prod-image-cart" src={ product2 }/>Product Name</th>
            <td data-bs-toggle="modal" data-bs-target="#cartProductModal">XL</td>
            <td data-bs-toggle="modal" data-bs-target="#cartProductModal">3</td>
            <td data-bs-toggle="modal" data-bs-target="#cartProductModal">PHP 123</td>
            <td><div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
            <label className="form-check-label">
            </label>
            </div></td>
            </tr>
        </tbody>
        </table>
        </div>
   

        <div className="cart-modal modal fade" id="cartProductModal" tabIndex={-1} aria-labelledby="cartProductModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-lg modal-dialog-centered">
    <div className="modal-content" style={{ backgroundColor:'#fff' }}>
      
      <div className='col-md-12 row'>
      <div className="modal-body" style={{ padding:'30px' }}>
        <div style={{ display:'flex', flexFlow:'row' }}>
            <img className="cart-prod-image" src={ product2 }/>
            <div className='product-details-container'>
            <span className="prod-name">Product Name</span>
            <span className="price">Price: </span>
            <span className="stocks-size">Stocks: </span>
            <span className='sizes-shop'>Sizes:</span>      
            <div className='sizes-container-shop'>
            <form className='col-md-12'  style={{ gap:'17px', display:'flex', width:'400px', flexFlow:'row', flexWrap:'wrap' }}>
                            <label>
                                <input type="radio" name="radio"/>
                                <span>S</span>
                            </label>
                            <label>
                                <input type="radio" name="radio"/>
                                <span>M</span>
                            </label>
                            <label>
                                <input type="radio" name="radio"/>
                                <span>L</span>
                            </label>
                            <label>
                                <input type="radio" name="radio"/>
                                <span>XL</span>
                            </label>
                            <label>
                                <input type="radio" name="radio"/>
                                <span>2XL</span>
                            </label>
                            <label>
                                <input type="radio" name="radio"/>
                                <span>3XL</span>
                                </label>
                                <label>
                                <input type="radio" name="radio"/>
                                <span>XL</span>
                            </label>
                            <label>
                                <input type="radio" name="radio"/>
                                <span>2XL</span>
                            </label>
                            <label>
                                <input type="radio" name="radio"/>
                                <span>3XL</span>
                            </label>
                           
                        </form>
            </div>

              <div>
                <span>Quantity: </span>
                <input type="number" className='quantity-input' style={{ color:'black', width:'70px', marginLeft:'10px' }}/>
              </div>
              <span className='stocks-per-size'>9900 pieces available</span>

            </div>
        </div>
      </div>
      </div>
      <div className="modal-footer">
      <button className="proceed-Btn"data-bs-toggle="modal" data-bs-target="#informModal">
            Save
            </button>
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
                <div className="payment-option-radio" style={{ display:'flex', alignItems:'center' }}>
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                        <img className="payment-option" src={ gcash }/>
                </div>

                <div className="payment-option-radio">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                        <img className="payment-option" src={ paymaya }/>
                </div>

                <div className="payment-option-radio">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                        <span className="cart-check-label">Cash</span>
                    
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

                  <div className="amount-details">
                    <h2 className="total-amount-text">Total amount:</h2>
                    <span className="total-amount-num">PHP 1000</span>
                  {/* <h2 className="total-amount-text">Upload Proof of Payment:</h2>
              <input type="file" className="proof-payment-img" accept="image/png, image/gif, image/jpeg" style={{ color:'white' }}/> */}
                  </div>
                </div>

                <div className="box-container-img">
                    <div className="col-md-12 btn-container">
                      <button className="place-order">
                        <span className="circle" aria-hidden="true">
                        <span className="icon arrow"></span>
                        </span>
                        <span className="place-button-text" onClick={() => showToast('Successfully Placed Order!', 1)}>Place Order</span>
                      </button>
                      <img className="box "  src={ box }/>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Cart