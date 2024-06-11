import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Team from "./components/Team";
import Footer from "./components/Footer";
import { ContactUs } from "./components/ContactUs";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Team />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default App;
