import styled from "styled-components";
import { Link } from "react-router-dom";

export const CareersCardsStyled = styled(Link)`
  width: 32%;
  height: fit-content;
  position: relative;
  border: 1px solid #f4f5fa;
  border-radius: 4px;
  margin-bottom: 30px;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    border-color: #00E4E3;
    .careers-card-row1 {
      background-color: #00E4E350;
    }
  }
  @media only screen and (max-width: 1024px){
    width: 49%;
  }
  
  @media only screen and (max-width: 768px){
    width: 100%;
  }
  
`;

export const CareersCardsIcon = styled.div`
  width: 94px;
  height: 94px;
  position: absolute;
  top: 32px;
  left: 24px;
  z-index: 3;
  img{
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;

export const CareersCardRow1 = styled.div`
  height: 80px;
  padding: 16px 24px;
  position: relative;
  background-color: #f2f3f6;
  border-bottom: 1px solid #f4f5fa;
  transition: 0.5s;
`;

export const CareersCardRow1Type = styled.div`
  position: absolute;
  bottom: 16px;
  right: 24px;
  color: rgba(80,102,123,.5);
`;

export const CareersCardRow2 = styled.div`
  padding: 24px;
  border-bottom: 1px solid #f4f5fa;
  
`;

export const CareersCardRow2Title = styled.div`
  margin-top: 40px;
  font-weight: 500;
  font-size: 17px;
  line-height: 24px;
  color: #3f5368;
  @media only screen and (max-width:1024px){
    font-size: 15px;
  }
`;

export const CareersCardRow2SubTitle = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: rgba(80,102,123,.5);
  @media only screen and (max-width:1024px){
    font-size: 13px;
    line-height: 18px;
  }
`;

export const CareersCardRow3 = styled.div`
  padding: 16px 24px;
`;

export const CareersCardRow3Small = styled.small`
  font-size: 13px;
  line-height: 20px;
  font-weight: 400;
  color: rgba(80,102,123,.5);
  cursor: pointer;
  @media only screen and (max-width:1024px){
    font-size: 12px;
    line-height: 16px;
  }
`;

export const CareersCardRow3Text = styled.div`
  font-weight: 400;
  font-size: 15px;
  line-height: 24px;
  margin-top: 8px;
  @media only screen and (max-width:1024px){
    font-size: 14px;
    line-height: 20px;
  }
`;


