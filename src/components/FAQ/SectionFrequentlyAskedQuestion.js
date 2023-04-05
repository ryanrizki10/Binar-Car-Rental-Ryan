// import React from 'react'
// import {Col, Container, Row} from 'react-bootstrap';
// import AccordionComp from './AccordionComp';

// const FiturFAQ = () => {
//   return (
//     <Container>
//       <Row className="px-sm-0 p-3 flex-sm-column gap-sm-4 gap-lg-0 gap-4 flex-lg-row">
//         <Col>
//           <AccordionComp
//             text="Apa saja syarat yang dibutuhkan?"
//             deskripsi="Kartu Identitas dan SIM"
//           />
//           <AccordionComp
//             text="Berapa hari minimal sewa mobil lepas kunci?"
//             deskripsi="Minimal 1 Hari"
//           />
//           <AccordionComp
//             text="Berapa hari sebelumnya sabaiknya booking sewa mobil?"
//             deskripsi="Minimal 7 Hari"
//           />
//           <AccordionComp
//             text="Apakah Ada biaya antar-jemput?"
//             deskripsi="Tidak ada biaya antar-jemput"
//           />
//           <AccordionComp
//             text="Bagaimana jika terjadi kecelakaan"
//             deskripsi="Tersedia pilihan untuk asuransi"
//           />
//         </Col>
//       </Row>
//     </Container>
//   )
// }

// export default FiturFAQ

import React from "react";
import { Accordion } from "react-bootstrap";
// import AccordionItem from "react-bootstrap/esm/AccordionItem";
import './style.css';

const SectionFrequentlyAskedQuestion = () => {
  return (
    <section id="faq" className="">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h2 className="fs-1 fw-bold mb-4 text-start sectionTitle">
              Frequently Asked Question
            </h2>
            <p className="fs-5 fw-bold mb-5 text-start sectionSubtitle">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              aspernatur ut accusantium inventore nobis
            </p>
          </div>
          <div className="col-lg-6">
            <div id="faqAccordian">
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header className="accordionHead">
                    Apa Saja syarat yang dibutuhkan?
                  </Accordion.Header>
                  <Accordion.Body>
                    <strong>BAWA DIRI AJA BANG SELOWWW</strong>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                <Accordion.Header className="accordionHead">Berapa hari minimal sewa mobil lepas kunci?</Accordion.Header>
                  <Accordion.Body>
                    <strong>YAA MENURUT SAMPEAN AJA, NYEWA MOBIL BEDA SAMA NYEWA PACAR.</strong>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header className="accordionHead">Berapa hari sebelumnya sebaiknya booking sewa mobil?</Accordion.Header>
                  <Accordion.Body>
                    <strong>Berapa yee? suka-suka yang mau nyewa aja.</strong>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header className="accordionHead">Apakah Ada biaya antar-jemput?</Accordion.Header>
                  <Accordion.Body>
                    <strong>Free bang itung2 pahala di bulan puasa yeee</strong>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header className="accordionHead">Bagaimana jika terjadi kecelakaan</Accordion.Header>
                  <Accordion.Body>
                    <strong>Jangan sampe lahh Astagfirullah, tuh mobil masih lredit bang pliss jangan di rusak.</strong>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionFrequentlyAskedQuestion;
