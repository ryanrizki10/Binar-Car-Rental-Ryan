import React from 'react'
import './style.css'
import carImg from '../../assets/car.png';

const Hero = () => {
  return (
    <div>
      <div id="hero-section" class="bg-light-purple position-relative">
        <div class="container">
          <div class="row">
            <div class="col-6 left-hero pr-4 d-flex align-items-center">
              <div class="box"> 
                <h1 class="heading-style" style={{color: "black", fontWeight: "bold"}}>Sewa & Rental Mobil Terbaik di kawasan Istanbul</h1>
                <p class= "body-text" style={{fontWeight: 'bold', marginTop: "20px"}}>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                <a class="btn btn-success mt-3 text-light" href="#">Mulai Sewa Mobil</a>
              </div>    
            </div>
            <div class="col-lg-6 right-hero"></div>
            <div class= "car-style">
              </div>
            <img class="car img-fluid" src={carImg} alt="car"/>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Hero;