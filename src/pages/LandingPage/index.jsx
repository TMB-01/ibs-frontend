import React from "react";

import { AppWrapper, MainWrapper } from "./styles";

//comp
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import AboutAcademy from "../../components/AboutAcademy";
import Faculties from "../../components/Faculties";
import Team from "../../components/Team/index";
import Footer from "../../components/Footer";
import Benefits from "../../components/Benefits";
import Welcome from "../../components/Welcome";
import LinePath from "../../components/LinePath/index";
import MyCarousel from '../../components/TeamCarousel/index'
import { LineWrapper } from "../../components/LinePath/style";


const LandingPage = () => {
  return (
    <AppWrapper>
      <MainWrapper>
        <LineWrapper>
          <LinePath />
          <Navbar />
          <Hero />
          <Benefits />
          <Welcome />
          <AboutAcademy />
          <Faculties />
           <Team />
          <MyCarousel />
          <Footer />
        </LineWrapper>
      </MainWrapper>
    </AppWrapper>
  );
};

export default LandingPage;