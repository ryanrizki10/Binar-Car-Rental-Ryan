// import React from 'react'
// import './style.css';
// import Client1 from '../../assets/client-test1.png';
// import Client2 from '../../assets/client-test2.png';
// import Carousel from 'react-multi-carousel';
// import Rating from '../../assets/Rate.png';

// const screenWidth = window.innerWidth;

// const Testimonial = () => {
//   const responsive = {
//     desktop: {
//       breakpoint: { max: 3000, min: 1024 },
//       items: 1,
//       slidesToSlide: 1,
//     },
//     tablet: {
//       breakpoint: { max: 1024, min: 464 },
//       items: 1,
//       slidesToSlide: 1,
//     },
//     mobile: {
//       breakpoint: { max: 464, min: 0 },
//       items: 1,
//       slidesToSlide: 1,
//       centerMode: false,
//     },
//   };



// const CustomRightArrow = ({ onClick }) => {
//   return (
//     <div className="navArrowContainerRight" onClick={() => onClick()}>
//       <span className="fa-stack fa-custom-testimonial rightArrow">
//         <i className="fa-solid fa-circle fa-stack-2x"></i>
//         <i className="fa-solid fa-chevron-right fa-stack-1x"></i>
//       </span>
//     </div>
//   );
// };
// const CustomLeftArrow = ({ onClick }) => {
//   return (
//     <div className="navArrowContainerLeft" onClick={() => onClick()}>
//       <span className="fa-stack fa-custom-testimonial leftArrow">
//         <i className="fa-solid fa-circle fa-stack-2x"></i>
//         <i className="fa-solid fa-chevron-left fa-stack-1x"></i>
//       </span>
//     </div>
//   );
// };

// const ButtonGroup = ({ next, previous }) => {
//   return (
//     <div className="carousel-button-group">
//       <CustomLeftArrow onClick={() => previous()} />
//       <CustomRightArrow onClick={() => next()} />
//     </div>
//   );
// };

// return (
//   <section id="testimonial" className="">
//       <div className="container-fluid">
//         <div className="row">
//           <div className="col">
//             <h2 className="fs-1 fw-bold mb-4 text-center sectionTitle">Testimonial</h2>
//             <p className="fs-5 fw-bold mb-5 text-center sectionSubtitle">Berbagai review positif dari para pelanggan kami</p>
//             <div className="myCarousel">
//               <Carousel
//                 centerMode={screenWidth > 464 ? true : false}
//                 swipeable={true}
//                 draggable={true}
//                 showDots={false}
//                 responsive={responsive}
//                 infinite={true}
//                 keyBoardControl={false}
//                 transitionDuration={500}
//                 removeArrowOnDeviceType={["tablet", "mobile"]}
//                 arrows={false}
//                 renderButtonGroupOutside={true}
//                 customButtonGroup={<ButtonGroup />}
//               >
//                 <div className="card bg-dark testi-card">
//                   <div className="card-body">
//                     <div className="row align-items-center">
//                       <div className="col-lg-2">
//                         <img src={Client1} alt="testi-1" className="img-fluid clientImage" />
//                       </div>
//                       <div className="col-lg-10">
//                         <img src={Rating} alt="rating" className="img-fluid mb-2" />
//                         <p className="fs-5 fw-bold mb-3 testimonialDesc">
//                           “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//                           eiusmod”
//                         </p>
//                         <p className="testimonialClient">John Dee 32, Bromo</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="card testi-card">
//                   <div className="card-body">
//                     <div className="row align-items-center">
//                       <div className="col-lg-2">
//                         <img src={Client2} alt="testi-1" className="img-fluid clientImage" />
//                       </div>
//                       <div className="col-lg-10">
//                         <img src={Rating} alt="rating" className="img-fluid mb-2" />
//                         <p className="fs-5 fw-bold mb-3 testimonialDesc">
//                           “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//                           eiusmod”
//                         </p>
//                         <p className="testimonialClient">John Dee 32, Bromo</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="card testi-card">
//                   <div className="card-body">
//                     <div className="row align-items-center">
//                       <div className="col-lg-2">
//                         <img src={Client1} alt="testi-1" className="img-fluid clientImage" />
//                       </div>
//                       <div className="col-lg-10">
//                         <img src={Rating} alt="rating" className="img-fluid mb-2" />
//                         <p className="fs-5 fw-bold mb-3 testimonialDesc">
//                           “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//                           eiusmod”
//                         </p>
//                         <p className="testimonialClient">John Dee 32, Bromo</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </Carousel>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
// );

// }

// export default Testimonial;


// =====================================

import './style.css';
import Carousel from 'react-bootstrap/Carousel'
import React from 'react'
import Client1 from '../../assets/client-test1.png';

const Testimonial = () => {
  return (
    <div class="Container align-items-center m-auto">
			<div className="align-items-center m-auto">
				<div className="row justify-content-center m-auto Testi mt-5">Testimonial</div>
				<div className="row justify-content-center m-auto Berbagai mt-2">Berbagai review positif dari para pelanggan kami</div>
			</div>
			<br></br> <br></br> <br></br>
			<Carousel className='col-8 align-items-center m-auto' style={{backgroundColor: "#1A1B19"}}>
				<Carousel.Item>
					<img className="d-block UserLogo m-auto" src={Client1} />
					<br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
					<Carousel.Caption>
						<h3 className="text-center text-light">Mang Ole</h3>
						<p className="text-center text-light">
							“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur ”
						</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img className="d-block UserLogo m-auto" src={Client1} />
					<br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
					<Carousel.Caption>
						<h3 className="text-center text-light">Sambo Hutagalung</h3>
						<p className="text-center text-light">
							“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur
							adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit”
						</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img className="d-block UserLogo m-auto" src={Client1} />
					<br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
					<Carousel.Caption>
						<h3 className="text-center text-light">Dedy Cahyadi</h3>
						<p className="text-center text-light">
							“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur
							adipiscing elit”
						</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</div>
  )
}

export default Testimonial;

// import React from 'react'
// import rateImg from '../../assets/Rate.png';


// const Testimonial = (props) => {
//   return (
// 	<section
//       id="cardsTestimonials"
//       className="d-flex align-items-center gap-sm-4 gap-md-5 gap-lg-4 gap-xl-5 gap-4 rounded-4 flex-md-row flex-lg-column flex-xl-row flex-column"
//     >
//       <div className="image">
//         <img src={props.Image} alt={props.alt} />
//       </div>
//       <div className="content">
//         <div className="stars text-center text-md-start text-lg-center text-xl-start">
//           <img src={rateImg} alt="icon_star" />
//           <img src={rateImg} alt="icon_star" />
//           <img src={rateImg} alt="icon_star" />
//           <img src={rateImg} alt="icon_star" />
//           <img src={rateImg} alt="icon_star" />
//         </div>
//         <p className="mt-3">
//           “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//           eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
//           do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
//           sed do eiusmod”
//         </p>
//         <p className="fw-light">John Dee 32, Bromo</p>
//       </div>
//     </section>
//   );
// };


// export default Testimonial;
