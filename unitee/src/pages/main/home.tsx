import './home.css'
import home_1 from '../../assets/images/main/home_1.png'
import home_2 from '../../assets/images/main/home_2.png'
import home_3 from '../../assets/images/main/home_3.png'
import { Link } from 'react-router-dom'

function Home() {
    return <div className="home-container">
       <div id="carouselExampleFade" className="carousel slide carousel-fade" style={{ width:'70%', marginTop:'50px' }}>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={ home_1 } className="d-block w-100"/>
      <div className="carousel-caption d-none d-md-block">
        <h4>CCS Department Shirt</h4>
        <p className='carousel-caption-text'>College of Computer Studies has released their newest department shirt design.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={ home_3 } className="d-block w-100"/>
      <div className="carousel-caption d-none d-md-block">
        <h4>CCS Uniforms</h4>
        <p className='carousel-caption-text'>College of Computer studies uniform is now available. Grab yours now!</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={home_2} className="d-block w-100" />
      <div className="carousel-caption d-none d-md-block">
        <h4>CCS Department Shirt Set B</h4>
        <p className='carousel-caption-text'>A different design for is now available.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
}

export default Home