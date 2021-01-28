import React from "react";

//styles
import {
  BenefitsSection,
  BenefitsContainer,
  Row,
  RowItem,
  Icon,
  AboutDesc,
} from "./style";

// icons
import Fade from 'react-reveal/Fade'

const Benefits = () => {
  return (
    <BenefitsSection>
      <BenefitsContainer>
        <Row>
          <Fade left>
            <RowItem>
              <Icon>
                {/* <IconImg src={SetSquareIcon} alt="globe" /> */}
                🌏
              </Icon>
              <AboutDesc>Преподаватели - практики</AboutDesc>
            </RowItem>
          </Fade>
          <Fade left>
            <RowItem>
              <Icon>
                {/* <IconImg src={CubeIcon} alt="lightBulb" /> */}
                👨‍💻
              </Icon>
              <AboutDesc>Преподаватели - практики</AboutDesc>
            </RowItem>
          </Fade>
            <Fade left>
            <RowItem>
              <Icon>
                {/* <IconImg src={QualityIcon} alt="loupe" /> */}
                🤝
              </Icon>
              <AboutDesc>Преподаватели - практики</AboutDesc>
            </RowItem>
          </Fade>
            <Fade left>
            <RowItem>
              <Icon>
                {/* <IconImg src={HandshakeIcon} alt="startUp" /> */}
                💼
              </Icon>
              <AboutDesc className="about">Преподаватели - практики</AboutDesc>
            </RowItem>
          </Fade>
            <Fade left>
            <RowItem>
              <Icon>
                {/* <IconImg src={ComputerIcon} alt="settings" /> */}
                🥇
              </Icon>
              <AboutDesc>Преподаватели - практики</AboutDesc>
            </RowItem>
          </Fade>
            <Fade left>
            <RowItem>
              <Icon>
                {/* <IconImg src={CompassIcon} alt="analysis" /> */}
                🦾
              </Icon>
              <AboutDesc>Преподаватели - практики</AboutDesc>
            </RowItem>
          </Fade>
        </Row>
      </BenefitsContainer>
    </BenefitsSection>
  );
};

export default Benefits;