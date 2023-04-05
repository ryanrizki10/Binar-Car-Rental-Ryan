import React from 'react'
import './style.css'
import logoImg from '../../assets/logo.png';

const Navbar = () => {
  return (
    <div>
        <div class="navbar fixed-top navbar-expand-lg navbar-light bg-light-purple">
            <div class="container">
              <a class="navbar-brand" href="https://www.binaracademy.com/"><img src={logoImg} alt="logo"/></a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="#navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="#navbarSupportedContent">
              <div class="navbar-nav ms-auto" style={{width: "600px"}}>
                  <a class="nav-link text-dark" href="../OurServices/Index.js">Our Services</a>
                  <a class="nav-link text-dark" href="../WhyUs/index.js">Why Us</a>
                  <a class="nav-link text-dark" href="#testimoni-section">Testimonial</a>
                  <a class="nav-link text-dark" href="#faq-section">FAQ</a>
              </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar;