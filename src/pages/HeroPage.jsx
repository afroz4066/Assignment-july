import React from "react";
import Hero from "../components/Hero";
import OurServices from "../components/OurServices";
import Clinic from "../components/Clinic";
import Doctor from "../components/Doctor";
import Testimonials from "../components/Testimonials";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const HeroPage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <OurServices />
      <Clinic />
      <Doctor />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default HeroPage;
