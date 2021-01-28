import React from "react";
import {
  CareersCardRow1, CareersCardRow1Type,
  CareersCardRow2, CareersCardRow2SubTitle, CareersCardRow2Title,
  CareersCardRow3, CareersCardRow3Small, CareersCardRow3Text,
  CareersCardsIcon,
  CareersCardsStyled,
} from "./styles";

const CareersCard = (
  {
    img,
    company,
    title,
    subTitle,
    vacancy,
    texts

  }
) => {
  return (
    <CareersCardsStyled to={"/careers/1"}>
      <CareersCardsIcon>
        <img src={img}
             alt="Thumb"/>
      </CareersCardsIcon>
      <CareersCardRow1 className="careers-card-row1">
        <CareersCardRow1Type>
          {company}
        </CareersCardRow1Type>
      </CareersCardRow1>
      <CareersCardRow2>
        <CareersCardRow2Title>
          { title }
        </CareersCardRow2Title>
        <CareersCardRow2SubTitle>
          { subTitle }
        </CareersCardRow2SubTitle>
      </CareersCardRow2>
      <CareersCardRow3>
        <CareersCardRow3Small>
          { vacancy }
        </CareersCardRow3Small>
        {texts.map((text)=>
          <CareersCardRow3Text>
            { text }
          </CareersCardRow3Text>
        )}
      </CareersCardRow3>

    </CareersCardsStyled>
  );
};

export default CareersCard;