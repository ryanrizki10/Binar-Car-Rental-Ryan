



import Navbar from './components/Navbar/Index';
import Hero from './components/Hero/Index';
import OurServices from './components/OurServices/Index';
import WhyUs from './components/WhyUs/index';
import Testimonial from './components/Testimonial';
import Card from './components/Card/Index';
import DetailMobil from './components/DetailMobil';
import CTABanner from './components/CTABanner';
// import Faq from './components/FAQ';
import FAQ from './components/FAQ/home';
import SectionFrequentlyAskedQuestion from './components/FAQ/SectionFrequentlyAskedQuestion';
import Footer from './components/Footer';



const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <OurServices/>
      <WhyUs/>
      <Testimonial/> 
      {/* <Card /> */}
      <CTABanner/>
      <SectionFrequentlyAskedQuestion/>
      <Footer/>
    </div>
  )
}


export default App;
