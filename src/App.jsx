import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Mission from "./components/Mission";
import Offer from "./components/Offer";
import Services from "./components/Services";
import Feedback from "./components/Feedback";
import MobileApp from "./components/MobileApp";
import Footer from "./components/Footer";

const App = () => {
  const [language, setLanguage] = useState("English");

  return (
    <>
      <Navbar language={language} setLanguage={setLanguage} />
      <Hero language={language} />
      <About language={language} />
      <Mission language={language} />
      <Offer language={language} />
      <Services />
      <Feedback />
      <MobileApp />
      <Footer setLanguage={setLanguage} />
    </>
  );
};

export default App;