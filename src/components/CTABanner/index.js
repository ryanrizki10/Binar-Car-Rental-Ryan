import React from 'react'
import './style.css';

const CTABanner = () => {
  return (
    <section id="faq" className="cta-section container text-center ctaspc">
        <div className="row align-items-center">
          <div className="col-2"></div>
          <div className="col">
            <h2 className="cta-title pb-2">
              Sewa Mobil di Istanbul Sekarang
            </h2>
            <p className="cta-text pb-5 text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button className="btn btn-success">Mulai Sewa Mobil</button>
          </div>
          <div className="col-2"></div>
        </div>
      </section>
  )
};

export default CTABanner;