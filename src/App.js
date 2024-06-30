import "./Responsive.css";
import { Carousel } from "./component/carosel/Carousel.jsx";
import Header from "./component/Header/Header.jsx";
import HeroSection from "./component/HeroSection/HeroSection.jsx";
import AboutUs from "./component/AboutUs/AboutUs.jsx";
import Features from "./component/Features/Features.jsx";
import Services from "./component/Services/Services";
import CTA from "./component/CTA/CTA";
import EnjoyIt from "./component/EnjoyIt/EnjoyIt.jsx";
import { CaroselBottom } from "./component/CaroselBottom/CaroselBottom.jsx";
import OurTeam from "./component/OurTeam/OurTeam.jsx";
import ContactUs from "./component/contactUs/contactUs.jsx";
import Portfolio from "./component/Portfolio/Portfolio.jsx";
import Footer from "./component/Footer/Footer.jsx";
function App() {
  return (
    <>
      <Header  id="top" />
      <main>
        <HeroSection  />
        <AboutUs  id="about" />
        <Carousel />
        <Features />
        <Services />
        <CTA />
        <Portfolio />
        <EnjoyIt />
        <div className="carosel">
          <CaroselBottom />
        </div>
        <OurTeam />
        <ContactUs />
      </main>
<Footer/>
    </>
  );
}

export default App;
