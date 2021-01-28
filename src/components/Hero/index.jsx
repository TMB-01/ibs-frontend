import React from "react";
import Typist from "react-typist";

//styles
import {
  WrapperInner,
  Lead,
  HeroContainer,
  HeroSection,
  HeroTitle,
  HeroBoth,
  FirstSpan,
  SecondSpan,
  ThirdSpan,
  FourthSpan,
  MainButton
} from "./styles";

//comp
import HeroForm from "../HeroForm";

const cursor = {
  show: true,
  blink: true,
  element: "|",
  hideWhenDone: true,
  hideWhenDoneDelay: 1000,
};

const Hero = () => {
  return (
    <WrapperInner>
      <Lead>
        <HeroContainer>
          <HeroBoth>
            <HeroSection>
              <HeroTitle>
                <Typist cursor={cursor}>
                  <FirstSpan> Приготовься изменить свое будущее </FirstSpan>
                  <Typist.Backspace count={8} delay={2000} />
                  <SecondSpan> interest </SecondSpan>
                  <Typist.Backspace count={9} delay={2000} />
                  <ThirdSpan> future </ThirdSpan>
                  <Typist.Backspace count={9} delay={2000} />
                  <FourthSpan> anything </FourthSpan>
                </Typist>
              </HeroTitle>
              <MainButton to="#1">Our courses 😎</MainButton>
            </HeroSection>
            <HeroForm />
          </HeroBoth>
        </HeroContainer>
      </Lead>
    </WrapperInner>
  );
};

export default Hero;
