import './supplier_items.css'
import { Link } from "react-router-dom"
import logo from '../../assets/images/unitee.png'
import sprofile from '../../assets/images/s-icon.png'
import logoutSupplier from "../../assets/images/icons/logoutSupplier.png"
import items from "../../assets/images/icons/items.png"
import orders from "../../assets/images/icons/orders.png"
import reports from "../../assets/images/icons/reports.png"

function Supplier (){
    return (
        <div className="supplier-container">
        <div className="container items-container">
            <header className="supplier-header row">
                <Link to='' className="col-md-4">
                    <img className="logo" src={ logo } style={{height:'60px'}}/>
                </Link>
                <p className='col'>ITEMS</p>
                <Link to='' className="col-md-1">
                    <img className="sprofile" src={ sprofile } style={{height:'40px'}}/>
                </Link>
            </header>
        </div>

        <div className="menu-container">
            <div className="menu-button-container">
                    <Link to='' className="menu-link">
                        <img className="iconSupplier" src={ items }/>
                            <span className="menu-text">
                                Items
                            </span>
                        </Link>
                    <Link to='#' className="menu-link">
                        <img className="iconSupplier" src={ orders }/>
                            <span className="menu-text">
                                Orders
                            </span>
                        </Link>
                    <Link to='#' className="menu-link">
                        <img className="iconSupplier" src={ reports }/>
                            <span className="menu-text">
                                Reports
                            </span>
                        </Link>
                    <Link to='/' className="menu-link">
                        <img className="iconSupplier" src={ logoutSupplier }/>
                            <span className="menu-text">
                                Logout
                            </span>
                        </Link>
                </div>
            </div>
        </div>
    )
}

export default Supplier