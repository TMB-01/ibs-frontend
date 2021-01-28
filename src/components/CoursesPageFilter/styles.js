import styled from "styled-components";

export const CoursePageSearchBox = styled.div`
  width:100%;
  padding: 32px;
  display: flex;
  align-items: center;
  //margin: 30px 0 0;
  box-sizing: border-box;
  @media only screen and (max-width: 1024px){
    padding: 16px;
    display: flex;
    justify-content: space-between; 
  }
`;

export const GuaranteeSearch = styled.div`
  padding: 10px 10px;
  display: flex;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 16px;
  font-weight: 600;
  background-color: ${ props => props.chosen && "#00E4E370" };
  border-radius: 10px;
  //color: lightgrey;
  margin-right: 20px;
  cursor: pointer;
  @media only screen and (max-width: 1024px){
    display: none;
  }
`;

export const CleanSearch = styled.div`
  display: ${ props => props.clean ? "none" : "block" };
  color: #00E4E3;
  font-weight: 400;
  padding: 10px;
  font-size: 15px;
  cursor: pointer;
  @media only screen and (max-width: 1024px){
    display: ${ props => props.toggle ? "block" : "none" };
  }
`;

export const ToggleFilterButton = styled.button`
  width: 49%;
  padding: 10px 20px;
  border: 0;
  border-radius: 12px;
  background-color: #eff0f5;
  color: #333;
  font-size: 16px;
  font-weight: 500;
  display: none;
  &:focus{
    outline: 0;
  }
  img{
    margin-left: 12px;
  }
  @media only screen and (max-width: 1024px){
    display: block;
  }
  @media only screen and (max-width: 425px){
    width: ${ props => props.filter ? "80px" : "calc(100% - 90px)" };
    span{
      display: none;
    }
    img{
      margin: 0;
    }
  }
`;

export const ToggleCoursesList = styled.div`
  display: flex;
  align-items: center;
  font-size: 17px;
  padding: 12px 0;
`;

export const ToggleCoursesIcon = styled.div`
  width: 32px;
  img{
    width: 100%;
  }
`;

export const ToggleCoursesName = styled.div`
  margin-left: 20px;
`;

export const ToggleFilterBox = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  
  width: 100%;
  height: 100vh;
  padding: 20px;
  background-color: white;
  overflow: auto;
  ${ props => !props.isOpen && "display: none" }
`;

export const ToggleFilterContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  //padding-bottom: 20px;
`;

export const ToggleFilterClose = styled.div`
  position: fixed;
  top: 3%;
  right: 3%;
  border-radius: 12px;
  background-color: #eff0f5;
  padding: 8px;
  display: flex;
  svg{
    width: 15px;    
  }
  //padding-bottom: 20px;
`;

export const ToggleFilterTittle = styled.p`
  font-size: 30px;
  font-weight: bold;
  line-height: 40px;
`;
export const ToggleFilterFooter = styled.div`
  position: fixed;
  top:auto;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  //height: fit-content;
  display: flex;
  justify-content: space-between;
  background-color: white;
  padding: 10px 40px;
  height: 64px;
`;

export const ToggleFilterButtonSearch = styled.button`
  width: 49%;
  height: 48px;
  color: white;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 500;
  border: 0;
  padding: 12px 15px;
  background-color: #6654d9;
  display: flex;
  justify-content: center;
  align-items: center;
  &:focus{
    outline: none;
  }
`;