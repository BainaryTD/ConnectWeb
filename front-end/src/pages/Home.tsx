// import React from "react";
// import NavbarCom from "../components/ui/NavbarCom";

import About from "../components/้home/About";
import Articles from "../components/้home/Articles";
import Banner from "../components/้home/Banner";
import CarouselImage from "../components/้home/CarouselImage";
import Features from "../components/้home/Features";
import Services from "../components/้home/Services";
import History from "../components/้home/History";
import Partners from "../components/้home/Partners";

const Home = () => {
  return (
    <>
      <section id="home">
        <Banner />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="features">
        <CarouselImage />
        <Features />
      </section>
      <Partners />
      <Articles />
      <History />
    </>
  );
};

export default Home;
