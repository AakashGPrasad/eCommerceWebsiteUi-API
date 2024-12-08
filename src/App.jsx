import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "../src/components/Hero/Hero.jsx";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import Banner2 from "./components/Banner/Banner2";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <Router>
      <main className="overflow-x-hidden bg-white text-dark">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/services" element={<Services />} />
          {/* Additional routes */}
        </Routes>
        <Banner />
        <Banner2 />
        <Footer />
      </main>
    </Router>
  );
};

export default App;
