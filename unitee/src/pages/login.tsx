import { Link } from 'react-router-dom'
import './login.css'

function Login() {
    return (
        <div className='row container main-container'>
            <div className="col content-container" style={{ marginTop: '-200px' }}>
                <div className='row side-container'>
                    <h3 className='col-md-12 header-title'>New here?</h3>
                    <span className='col-md-12' style={{ textAlign: 'center' }}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, ex ratione. Aliquid!
                    </span>
                    <Link className='col-md-4 link' to='/register'>
                        <button className="col-md-12 btn btn-light button">SIGN UP</button>
                    </Link>
                </div>
            </div>
            <div className="col content-container">
                <div className='row login-container'>
                    <h3 className='col-md-12 header-title'>Log In</h3>
                    <input className="col-md-12 form-control input" placeholder="ID Number"/>
                    <input className="col-md-12 form-control input" type='password' placeholder="Password"/>
                    <Link className='col-md-12 link' to='/main' style={{ padding: '0' }}>
                        <button className="col-md-12 btn btn-primary button">LOGIN</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Login