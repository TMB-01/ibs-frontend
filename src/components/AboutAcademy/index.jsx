import React from "react";

// comment
import { 
  About, 
  SectionMainTitle, 
  Container, 
  Heading, 
  HeadingDesc 
} from "./styles";

import AboutItems from "../AboutItems";
import AboutVideoSection from "../AboutVideo/index";

const AboutAcademy = () => {
  return (
    <About>
      <Container>
        <SectionMainTitle>
          <Heading>Об академии</Heading>
          <HeadingDesc style={{ marginBottom: 30 }}>
            Тех Академия Бобира Акилханова - карьера успешного IT специалиста
            начинается здесь
          </HeadingDesc>
        </SectionMainTitle>
        <AboutVideoSection />
        <AboutItems />
      </Container>
    </About>
  );
};

export default AboutAcademy;