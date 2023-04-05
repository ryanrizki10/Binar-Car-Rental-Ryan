import React from 'react'
import servicesImg from '../../assets/img_service.png'
import bulletsImg from '../../assets/bullets.png';
import './style.css';

const OurServices = () => {
  return (
    <div>
      <div class="container p-top">
          <div class="row">
              <div class="col-lg-6 center-block left-our-service">
                  <img class="img-fluid mx-auto d-block" src= {servicesImg} alt="service"/>
              </div>
              <div class="col-lg-6 right-our-service mx-auto my-auto">
                  <h1 class="sub-heading-style">Best Car Rental for any kind of trip in Istanbul!</h1>
                  <p>Sewa mobil di Istanbul bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</p>
                  <p><img src={bulletsImg} alt="bullets"/> Sewa Mobil Dengan Supir di Istanbul 12 Jam</p>
                  <p><img src={bulletsImg} alt="bullets"/> Sewa Mobil Lepas Kunci di Istanbul 24 Jam</p>
                  <p><img src={bulletsImg} alt="bullets"/> Sewa Mobil Jangka Panjang Bulanan</p>
                  <p><img src={bulletsImg} alt="bullets"/> Gratis Antar - Jemput Mobil di Bandara</p>
                  <p><img src={bulletsImg} alt="bullets"/> Layanan Airport Transfer / Drop In Out</p>
              </div>
          </div>
        </div>
    </div>
  )
}

export default OurServices;