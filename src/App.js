import "./App.css";
import { Link } from "react-router-dom";
import Hero from "./components/Hero.jsx";
import OurServices from "./components/OurServices.jsx";
import Clinic from "./components/Clinic.jsx";
import Doctor from "./components/Doctor.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Newsletter from "./components/Newsletter.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <Hero />
      <OurServices />
      <Clinic />
      <Doctor />
      <Testimonials />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
