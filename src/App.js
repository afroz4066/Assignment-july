import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HeroPage from "./pages/HeroPage";
import OurservicesPage from "./pages/OurservicesPage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HeroPage />} />
        <Route path="/services" element={<OurservicesPage />} />
        <Route path="/about" element={<AboutPage />} />
        {/* <Route path="/doctor" element={<Doctor />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/newsletter" element={<Newsletter />} />
        <Route path="/footer" element={<Footer />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
