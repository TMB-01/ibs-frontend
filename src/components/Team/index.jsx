import React from "react";

//styles
import {
  TeamSection,
  TeamHeader,
  TeamInner,
  TeamBack,
  Heading, 
  Container, 
  HeadingDesc
} from "./style";

const Team = () => {
  return (
    <TeamSection>
      <Container>
        <TeamInner>
          <TeamBack>
            <TeamHeader>
              <Heading
                style={{
                  marginTop: 0,
                  marginBottom: 0,
                  marginRight: 20,
                }}
              >
                Наши преподаватели
              </Heading>
              <HeadingDesc>
                Настоящие профессионалы
                <br />с большим теоретическим и практическим опытом
              </HeadingDesc>
            </TeamHeader>
          </TeamBack>
        </TeamInner>
      </Container>
    </TeamSection>
  );
};

export default Team;