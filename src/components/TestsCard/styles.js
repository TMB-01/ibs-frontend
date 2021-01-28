import styled from "styled-components";

export const TestsCardStyled = styled.div`
  width: 32%;
  display: flex;
  overflow: hidden;
  position: relative;
  padding: 0 8px 16px;
  height: fit-content;
  
  &:after{
    width: 40px;
    height: 100%;
    content: "";
    position: absolute;
    right: 0;
    top: 0;
    background: linear-gradient(270deg,#fff,hsla(0,0%,100%,.0001));
  }
  
  @media only screen and (max-width: 1024px){
    width: 49%;
  }
  
  @media only screen and (max-width: 768px){
    width: 100%;
    padding: 0 0 16px;
  }
`;

export const TestsCardData = styled.div`
  //display: flex;
  align-items: center;
`;

export const TestsCardIcon = styled.div`
  margin-right: 28px;
`;

export const TestsCardName = styled.div`
  height: 80px;
  font-size: 24px;
  line-height: 32px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 8px;
  color: #50667b;
  @media only screen and (max-width: 1024px){
    font-size: 20px;
    line-height: 28px;
  }
`;

export const TestsCardTestsBox = styled.div`
  
`;

export const TestsCardTests = styled.div`
  white-space: nowrap;
  color: #50667b;
  cursor: pointer;
  font-size: 15px;
  line-height: 24px;
  margin-bottom: 4px;
  font-weight: 400;
  @media only screen and (max-width: 1024px){
    font-size: 14px;
    line-height: 20px;
  }
`;
