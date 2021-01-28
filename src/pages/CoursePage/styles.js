import styled from "styled-components";

export const CoursePageBox = styled.div`
  height: 100%;
  box-sizing: border-box;
  padding: 0 32px; 
  width: calc(100% - 110px);
  margin: 0 0 0 100px;
  min-height: 100vh;
  overflow-x: hidden;
  position: relative;
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

export const CourseCards = styled.div`
  padding: 32px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  //margin: 30px 0 0; 
  box-sizing: border-box;
  @media only screen and (max-width: 1024px){
    padding: 16px;
  }
  @media only screen and (max-width: 768px){
    background-color: #F4F5FA;
  }
`;