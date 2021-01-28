import styled from "styled-components";

export const TestsPageStyled = styled.div`
  padding: 0 32px; 
  width: calc(100% - 110px);
  margin: 0 0 0 100px;
  min-height: 100vh;
  overflow-x: hidden;
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  *{
    box-sizing: border-box;
  }
  
  @media only screen and (max-width: 1024px){
    width: 100%;
    margin: 0;
    padding: 0 16px;
  }
  
`;

export const TestsPageCards = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 32px 0;
  
  
  
  clear: both;  
  
  &:after,&:before{
    clear: both;  
    display: table;
  }
  
  &:before{
    clear: both;
  }
  
  @media only screen and (max-width: 1024px){
    padding: 0 16px;
  }
  
  
`;