// import React from 'react'
// import './style.css';
// import { useNavigate } from 'react-router-dom';
// import DetailMobil from '../DetailMobil';

// const Card = (props) => {
//     const description = props.description
//     const reviewer = props.reviewer



//   return (
//     <div>
//         <div class="card text-left styCard">
//           <img class="card-img-top" src="holder.js/100px180/" alt=""/>
//           <div class="card-body">
//             <h4 class="card-title">{description}</h4>
//             <p class="card-text">{reviewer}</p>
//           </div>
//         </div>
//     </div>
//   )
// }

// export default Card;



// const Card = (props) => {
//   const carID = props.carID;

//   const navigate = useNavigate();
//   const DetailMobil = (idMobil) => {
//     navigate("/detailmobil", { state: { idMobil: idMobil } });
//   };

//   return (
//     <div className="col-lg-4">
//       <div className="card cardMobil">
//         <div className="card-body">
//           <img src={props.image} alt="Gambar Mobil" className="gambarMobil img-fluid mx-auto d-block w-100" />
//           <h6 className="namaMobil">{props.name}</h6>
//           <h5 className="hargaMobil">{props.price} / hari</h5>
//           <p className="deskripsiMobil">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
//           <div className="d-grid">
//             <button className="btn btnPilihMobil" onClick={() => DetailMobil(carID)}>
//               Pilih Mobil
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Card;

import React from "react";
// import { useNavigate } from "react-router-dom";
// import "./SectionCallToAction.css";

const Card = () => {
  // const navigate = useNavigate();
  // const handleButtonCTA = () => {
  //   navigate("/carimobil");

  return (
    <section id="cta" className="">
      <div className="container container-cta">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <h2 className="fw-bold mb-4 text-center text-white sectionTitle">Sewa Mobil di (Lokasimu) Sekarang</h2>
            <p className="fs-5 fw-bold text-center text-white sectionSubtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <button type="button" className="btn buttonCta text-white">
              Mulai Sewa Mobil
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;