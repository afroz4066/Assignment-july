import React from "react";
import Navbar from "../components/Navbar";
import Clinic from "../components/Clinic";
import Doctor from "../components/Doctor";
import Testimonials from "../components/Testimonials";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
const AboutPage = () => {
  return (
    <div>
      <Navbar />
      <Clinic />
      <Doctor />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default AboutPage;
