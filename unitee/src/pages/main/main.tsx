import { Outlet } from "react-router"
import { Link } from "react-router-dom"
import './main.css'
import logo from "../../assets/images/unitee.png"
import profile from "../../assets/images/imageprofile.jpeg"
import profIcon from "../../assets/images/icons/profile2.png"
import logout from "../../assets/images/icons/logout-3.png"
import orders from "../../assets/images/icons/shopping-bag-4.png"
import history from "../../assets/images/icons/history.png"
import notification from "../../assets/images/icons/notifications.png"

function Main() {
    return <div className="main">
        <div className="container">
            <header className="header" style={{ display:'flex', alignItems:'center', justifyContent:'space-between' }}>
                <Link to='' className="col-md-2">
                    <img className="logo" src={ logo }/>
                </Link>
                <div className="col-md-6 header-button-container">
                    <Link className="customer-nav-link" to='shop'>
                        <span className="nav-btn">SHOP</span>
                    </Link>
                    <Link className="customer-nav-link" to='cart'>
                        <span className="nav-btn">CART</span>
                    </Link>
                
                    
                    <div className="col-md-1 dropdown">
  
                        <img src={ profile } style={{ width:'90%', borderStyle:'solid', borderRadius:'50%', borderColor:'#D3D3D3' }} data-bs-toggle="dropdown" aria-expanded="false" />
                    <ul className="dropdown-menu dropdown-menu-dark" style={{ width:'300px'}}>
                        <Link className="customer-nav-droplink" to='user_profile'>
                            <li><a className="dropdown-item">
                            <img className="dropdown-icon"  src={ profIcon } />VIEW PROFILE</a></li></Link>

                            <Link className="customer-nav-droplink" to='notif'>
                            <li><a className="dropdown-item">
                            <img className="dropdown-icon" src={ notification } alt="" />NOTIFICATIONS</a></li></Link>

                        <Link className="customer-nav-droplink" to='orders'>
                            <li><a className="dropdown-item">
                            <img className="dropdown-icon" src={ orders } alt="" />ORDERS</a></li></Link>

                        <Link className="customer-nav-droplink" to='purchase_history'>
                            <li><a className="dropdown-item">
                            <img className="dropdown-icon" src={ history } />PURCHASE HISTORY</a></li></Link>

                        <Link className="customer-nav-droplink" to='/'>
                        <li><a className="dropdown-item">
                        <span className="nav-btn" style={{ color:'#FFAA00' }}>
                            <img className="dropdown-icon" src={ logout } />
                            LOGOUT</span>
                    </a></li></Link>
                        
                    </ul>
               
                    </div>
                    
                  
                    
                </div>
            </header>
            <div style={{ minHeight: '100%' }}>
                <Outlet/>
            </div>

        </div>
        <footer className="row footer">
            <div className="col-md-3" style={{ borderRight:'solid'}}>
                <img src={logo} style={{ height: '74px' }} />
            </div>
            <div className="col row" style={{ gap: '20px' }}>
                <div className="col-md-3 footer-info">
                    <h5>About Unitee</h5>
                    <span>Unitee Website</span>
                    <span>Information</span>
                </div>
                <div className="col-md-2 footer-info">
                    <h5>Help</h5>
                    <span>Return Policy</span>
                    <span>Accessibility</span>
                </div>
                <div className="col footer-info">
                    <h5>Unity Social Accounts</h5>
                </div>
                <div className="col-md-10 footer-terms-privacy">
                    <span>Terms of Use</span>
                    <span>Privacy Policy</span>
                </div>
                <div className="col-md-9" style={{ display:'flex', justifyContent:'center' }}>
                    <span>COPYRIGHT © Unitee. ALL RIGHTS RESERVED.</span>
                </div>
                
            </div>
        </footer>
    </div>
}

export default Main