// import React from 'react';

// const Faq = () => {
//   return (
//       <section className="faq" id="faq-id">
//           <div className="container">
//               <div className="row">
//                   <div className="faq-header col-lg-5">
//                       <h2>Frequently Asked Question</h2>
//                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
//                   </div>
//                   <div className="col-lg-7">
//                       <div className="accordion " id="accordionFlushExample">
//                           <div className="accordion-item">
//                               <h2 className="accordion-header" id="flush-headingOne">
//                                   <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
//                                       data-bs-target="#flush-collapseOne" aria-expanded="false"
//                                       aria-controls="flush-collapseOne">
//                                       Apa saja syarat yang dibutuhkan?
//                                   </button>
//                               </h2>
//                               <div id="flush-collapseOne" className="accordion-collapse collapse"
//                                   aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
//                                   <div className="accordion-body">Placeholder content for this accordion, which is
//                                       intended to demonstrate the <code>.accordion-flush</code> className. This is the
//                                       first item's accordion body.</div>
//                               </div>
//                           </div>
//                           <div className="accordion-item">
//                               <h2 className="accordion-header" id="flush-headingTwo">
//                                   <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
//                                       data-bs-target="#flush-collapseTwo" aria-expanded="false"
//                                       aria-controls="flush-collapseTwo">
//                                       Berapa hari minimal sewa mobil lepas kunci?
//                                   </button>
//                               </h2>
//                               <div id="flush-collapseTwo" className="accordion-collapse collapse"
//                                   aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
//                                   <div className="accordion-body">Placeholder content for this accordion, which is
//                                       intended to demonstrate the <code>.accordion-flush</code> className. This is the
//                                       second item's accordion body. Let's imagine this being filled with some actual
//                                       content.</div>
//                               </div>
//                           </div>
//                           <div className="accordion-item">
//                               <h2 className="accordion-header" id="flush-headingThree">
//                                   <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
//                                       data-bs-target="#flush-collapseThree" aria-expanded="false"
//                                       aria-controls="flush-collapseThree">
//                                       Berapa hari sebelumnya sabaiknya booking sewa mobil?
//                                   </button>
//                               </h2>
//                               <div id="flush-collapseThree" className="accordion-collapse collapse"
//                                   aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
//                                   <div className="accordion-body">Placeholder content for this accordion, which is
//                                       intended to demonstrate the <code>.accordion-flush</code> className. This is the
//                                       third item's accordion body. Nothing more exciting happening here in terms of
//                                       content, but just filling up the space to make it look, at least at first
//                                       glance, a bit more representative of how this would look in a real-world
//                                       application.</div>
//                               </div>
//                           </div>
//                           <div className="accordion-item">
//                               <h2 className="accordion-header" id="flush-headingThree4">
//                                   <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
//                                       data-bs-target="#flush-collapseThree4" aria-expanded="false"
//                                       aria-controls="flush-collapseThree4">
//                                       Apakah Ada biaya antar-jemput?
//                                   </button>
//                               </h2>
//                               <div id="flush-collapseThree4" className="accordion-collapse collapse"
//                                   aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
//                                   <div className="accordion-body">Placeholder content for this accordion, which is
//                                       intended to demonstrate the <code>.accordion-flush</code> className. This is the
//                                       third item's accordion body. Nothing more exciting happening here in terms of
//                                       content, but just filling up the space to make it look, at least at first
//                                       glance, a bit more representative of how this would look in a real-world
//                                       application.</div>
//                               </div>
//                           </div>
//                           <div className="accordion-item">
//                               <h2 className="accordion-header" id="flush-headingThree5">
//                                   <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
//                                       data-bs-target="#flush-collapseThree5" aria-expanded="false"
//                                       aria-controls="flush-collapseThree5">
//                                       Bagaimana jika terjadi kecelakaan
//                                   </button>
//                               </h2>
//                               <div id="flush-collapseThree5" className="accordion-collapse collapse"
//                                   aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
//                                   <div className="accordion-body">Placeholder content for this accordion, which is
//                                       intended to demonstrate the <code>.accordion-flush</code> className. This is the
//                                       third item's accordion body. Nothing more exciting happening here in terms of
//                                       content, but just filling up the space to make it look, at least at first
//                                       glance, a bit more representative of how this would look in a real-world
//                                       application.</div>
//                               </div>
//                           </div>
//                       </div>
//                   </div>
//               </div>

//           </div>
//       </section>
//   )
// }

// export default Faq

// import React from "react";
// import moduleName from 'module';

// const Question = () => {
//   return (
//     <div className="container-all-question" id="faqSection">
//       <div className="container-question">
//         <div className="wrapper-question">
//           <div className="desc-question">
//             <h2>Frequently Asked Question</h2>
//             <h6>Pertanyaan seputar persewaan mobil di binar car rental </h6>
//           </div>
//           <div className="dropdown-question-page">
//             <div className="dropdown-wrapper">
//               <Dropdown
//                 faq="Apa saja syarat yang dibutuhkan?"
//                 answer="Syarat yang dibutuhkan untuk melakukan penyewaan mobil di Binar Car Rental ialah pastikan kamu sudah memiliki KTP dan SIM, dan harus bisa mengendarai kendaraan yang diinginkan. Jika pemesanan lebih dari 1 hari maka pembeli harus setidaknya menyerahkan uang sebesar 2x Harga sewa mobil sebagai uang aman atau mengganti jika terdapat hal-hal yang tidak diinginkan"
//               />

//               <Dropdown
//                 faq="Berapa hari minimal sewa mobil lepas kunci?"
//                 answer="Tidak ada batas minimal waktu untuk pembeli menyewa mobil di Binar Car Rental, namun banyaknya biaya akan tergantung pada lamanya pembeli menyewa mobil"
//               />

//               <Dropdown
//                 faq="Berapa hari sebelumnya sebaiknya booking sewa mobil?"
//                 answer="Minimal booking mobil h-1 sebelum mobil digunakan"
//               />

//               <Dropdown
//                 faq="Apakah ada biaya antar-jemput?"
//                 answer="Biaya antar jemput akan ditanggung oleh pihak Binar Car Rental jika pembeli menyewa hingga 12 Jam, Jika kurang dari itu maka akan dikenakan biaya sebesar Rp. 50.000,00"
//               />

//               <DropdownBottom
//                 faq="Bagaimana jika terjadi kecelakaan?"
//                 answer="Kami mohon maaf atas kejadian yang kamu alami.  Penyewa diharap berkendara dengan hati-hati, PELAN-PELAN ASAL SELAMAT"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Question;
