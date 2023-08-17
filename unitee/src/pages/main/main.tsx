import { Outlet } from "react-router"
import { Link } from "react-router-dom"
import './main.css'
import logo from "../../assets/images/unitee.png"
import bag from "../../assets/images/icons/bag.png"
import shop from "../../assets/images/icons/shop.png"
import notification from "../../assets/images/icons/notifications.png"
import profile from "../../assets/images/icons/profile.png"
import logout from "../../assets/images/icons/logout.png"
import { useEffect, useState} from "react";
import axios from "axios"

function Main() {

    const [cart, setCart] = useState([]);

    useEffect(() => {
        axios.get('https://localhost:7017/Cart')
            .then(res => {
                setCart(res.data);
                console.log(res.data);
            })
            .catch((err) => {console.error(err)
        });
    }, []);

    
    return <div className="main">
        <div className="container">
            <header className="header row">
                <Link to='' className="col-md-9">
                    <img className="logo" src={ logo }/>
                </Link>
                <div className="col header-button-container">
                    <Link to='shop'>
                        <img className="header-img-button" src={ shop }/>
                    </Link>
                    <Link to='cart'>
                        <img className="header-img-button" src={ bag }/>
                        {cart.length > 0 && (
                            <span className="cart-badge">{cart.length}</span>
                        )}
                    </Link>
                    <Link to='shop'>
                        <img className="header-img-button" src={ notification }/>
                    </Link>
                    <Link to='shop'>
                        <img className="header-img-button" src={ profile }/>
                    </Link>
                    <Link to='/'>
                        <img className="header-img-button" src={ logout }/>
                    </Link>
                </div>
            </header>
            <div style={{ minHeight: '100%' }}>
                <Outlet/>
            </div>

        </div>
        <footer className="row footer">
            <div className="col-md-3">
                <img src={logo} style={{ height: '74px' }} />
            </div>
            <div className="col row" style={{ gap: '30px' }}>
                <div className="col-md-2 footer-info">
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
                <div className="col-md-8">
                    <span>COPYRIGHT © Unitee. ALL RIGHTS RESERVED.</span>
                </div>
                <div className="col-md-3 footer-terms-privacy">
                    <span>Terms of Use</span>
                    <span>Privacy Policy</span>
                </div>
            </div>
        </footer>
    </div>
}

export default Main