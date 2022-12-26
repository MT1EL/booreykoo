import React from "react";
import About from "./about";
import Contact from "./contact";
import Home from "./home";
import Portfolio from "./portfolio";
import Services from "./services";
function MainPage() {
  return (
    <>
      <Home />
      <About />
      <Services />
      <Portfolio />
      <Contact />
    </>
  );
}

export default MainPage;
