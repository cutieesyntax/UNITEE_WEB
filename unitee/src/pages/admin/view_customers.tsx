import './view_customers.css'
import Profile from "../../assets/images/imageprofile.jpeg"

function View_Customers () {
    return <div className="customers-container">
        <div className='supplier-table-container'>
        <div className='admin-supplierTitle-container'>
        <h1 className='customers-title'>CUSTOMERS</h1>
        </div>
        <div className='col-md-12 search-admin-container'>
        <div className='col-md-5' style={{ display:'flex', flexFlow:'row'}}>
                
        <input className="form-control me-1" type="search" placeholder="search shop name" aria-label="Search"/>
        <button className="col-md-3 btn btn-outline-primary" type="submit">Search</button>
        </div>
        <div className='status-filter-container'>
        <button className="btn btn-secondary dropdown-toggle dropdown-menu-dark" style={{ backgroundColor:'#020654' }} type="button" data-bs-toggle="dropdown" aria-expanded="false">
         Filter by Status
        </button>
        <ul className="dropdown-menu dropdown-menu-dark" style={{ backgroundColor:'#020654' }}>
        <li><a className="dropdown-item">Activated</a></li>
        <li><a className="dropdown-item">Deactivated</a></li>
        </ul>
        </div>
        </div>
        


        <div className='admin-table-wrapper table-responsive-sm' style={{ marginTop:'20px'}}>
        <table className="customer-table table table-hover table-bordered align-middle caption-bot table-xl">
        <caption>end of list of customers</caption>
        <thead className='table-dark align-middle'>
            <tr className='thead-row'>
            <th scope="col">Customer ID</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Department</th>
            <th scope="col">Email</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Status</th>
            </tr>
        </thead>
        <tbody className="table-group-divider">
            <tr id="offcanvasButton" data-bs-toggle="offcanvas"
                    data-bs-target="#CustomerOffcanvasRight"
                    aria-controls="offcanvasRight">
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>Example Department</td>
            <td>example@gmail.com</td>
            <td>09124534</td>
            <td>Activated</td>
            </tr>
        </tbody>
        </table>
        </div>
        </div>

        <div className="customer-offcanvas offcanvas offcanvas-end" tabIndex={-1} id="CustomerOffcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasRightLabel">
          <div className="supplier-info-group">
          <span className="supplier-info-label">Customer ID:</span>
          <p className="supplier-info">20168619</p>
          </div>
          </h5>
          <div data-bs-theme="dark">
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
        </div>
        <div className="offcanvas-body">
        <div className="profile-pic-container" style={{ padding:'20px' }}>
                    <img className="mx-auto d-block" src={ Profile } style={{ height:'120px', width:'120px', borderStyle:'solid', borderRadius:"50%", borderColor:'white' }}/>
                </div>
                <span className="supplier-Status">Status:</span>
                <img src="" alt="" />
                <div className="supplier-info-group">
                <span className="supplier-info-label">First Name:</span>
                <p className="supplier-info">Racel Anne</p>
                </div>
                <div className="supplier-info-group">
                <span className="supplier-info-label">Last Name:</span>
                <p className="supplier-info">Pitogo</p>
                </div>
                <div className="supplier-info-group">
                <span className="supplier-info-label">Gender:</span>
                <p className="supplier-info">Female</p>
                </div>
                <div className="supplier-info-group">
                <span className="supplier-info-label">Department:</span>
                <p className="supplier-info">Computer Studies</p>
                </div>
                <div className="supplier-info-group">
                <span className="supplier-info-label">Email:</span>
                <p className="supplier-info">example@gmail.com</p>
                </div>
                <div className="supplier-info-group">
                <span className="supplier-info-label">Phone number:</span>
                <p className="supplier-info">12345678</p>
                </div>
                <div className="supplier-info-group">
                <span className="supplier-info-label">Password:</span>
                <p className="supplier-info">examplepassword123</p>
                </div>
                
        </div>
      </div>
    </div>
    
}

export default View_Customers