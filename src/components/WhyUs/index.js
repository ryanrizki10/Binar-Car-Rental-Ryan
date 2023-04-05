import React from 'react'
import './style.css';
import iconImg from '../../assets/icon_complete.png'
import priceImg from '../../assets/icon_price.png';
import timeImg from '../../assets/icon_24hrs.png';
import profImg from '../../assets/icon_professional.png';

const WhyUs = () => {
  return (
    <div>
     <div className="p-top">
        <div class="container">
          <h1 class="fs-1 sub-heading-style">Why Us</h1>
          <p className='fs-5 fw-bold mt-5 Subtitle'>Mengapa harus pilih Binar Car Rental?</p>
          <div class="row list-cards">
            <div class="col-lg-3 col-md-6">
              <div class="card card-whyus">
                <div class="card-body">
                    <img src={iconImg} alt="icon" />
                  <h5 class="card-title pt-3">Mobil Lengkap</h5>
                  <p class="card-text">Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat sekali guys</p>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="card card-whyus">
                <div class="card-body">
                    <img src={priceImg} alt="icon" />
                  <h5 class="card-title pt-3">Harga Murah</h5>
                  <p class="card-text">Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</p>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
                <div class="card card-whyus">
                  <div class="card-body">
                    <img src= {timeImg} alt="icon" />
                    <h5 class="card-title pt-3">Layanan 24 Jam</h5>
                    <p class="card-text">Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div class="card card-whyus">
                  <div class="card-body">
                    <img src= {profImg} alt="icon" />
                    <h5 class="card-title pt-3">Sopir Profesional</h5>
                    <p class="card-text">Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</p>
                  </div>
                </div>
              </div>
        </div>
        </div>
    </div>
    </div>
  )
}

export default WhyUs;