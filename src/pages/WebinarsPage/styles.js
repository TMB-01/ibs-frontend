import styled from "styled-components";

export const WebinarsPageWrapper = styled.div`
  padding: 0 32px;
  overflow-x: hidden;
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: calc(100% - 110px);
  margin: 0 0 0 100px;
  min-height: 100vh;
  flex-direction: column;
  *{
    box-sizing: border-box;
  }
  
  @media only screen and (max-width: 1024px){
    width: 100%;
    margin: 0;
    padding: 0 16px;
  }
`;

export const WebinarPageStyled = styled.div`
  padding: 0 0 32px;
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  *{
    box-sizing: border-box;
  }
  
  @media only screen and (max-width: 1024px){
    width: 100%;
    margin: 0;
    padding: 0 0 16px;
  }
`;

export const WebinarNavbar = styled.div`
  width: 100%;
  display: flex;
  border-bottom: 1px solid rgba(164,175,221,.2);
  margin-bottom: 15px;
  flex-wrap: wrap;
`;

export const WebinarNavbarNav = styled.div`
  width: fit-content;
  padding: 20px 2px 24px;
  position: relative;
  font-size: 17px;
  font-family: Roboto, San Francisco, Helvetica Neue, Helvetica, Arial,serif;
  font-weight: 400;
  margin-right: 16px;
  color: ${ props => props.active ? '"#2c2d30"' : "rgba(80,102,123,.5)" };
  cursor: pointer;
  transition: 0.5s;
  
  &:after {
    content: "";
    width: ${ props => props.active ? "100%" : 0 };
    height: 4px;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #00E4E3;
    transition: 0.5s;
  }
  
  @media only screen and (max-width: 1024px){
    font-size: 16px;
    line-height: 24px;
    padding: 15px 2px 18px;
    &:after{
      height: 3px;
    }
  }
  @media only screen and (max-width: 768px){
    font-size: 14px;
    padding: 10px 2px 12px;
    &:after{
      height: 2px;
    }
  }
`;

export const BesideMainCard = styled.div`
  width: 49%;
  margin: 0;
  @media only screen and (max-width: 1024px){
    width: 100%;
    display: block;
  }
`;