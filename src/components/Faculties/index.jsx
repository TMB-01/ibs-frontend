import React from "react";

//styles
import { 
  Main, 
  FacultiesHeader, 
  FacultiesDesc, 
  Container, 
  Heading 
} from "./styles";

import FacultiesItem from "../FacultiesItem";

const Faculties = () => {
  return (
    <Main id="1">
      <Container>
        <FacultiesHeader>
          <Heading>Факультеты</Heading>
          <FacultiesDesc>
            Основные направления обучающих программ
          </FacultiesDesc>
        </FacultiesHeader>
        <FacultiesItem />
      </Container>
    </Main>
  );
};

export default Faculties;