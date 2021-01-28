import styled from "styled-components";

export const CardBox = styled.div`
  font-family: 'IBM Plex Sans', sans-serif;
  width: 49%;
  padding: 32px;
  display: flex;  
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 20px;
  box-sizing: border-box;
  box-shadow: 6px 6px 20px 4px rgba(55, 84, 170, 0.12);
  border-radius: 20px;
  transition-duration: 0.1s;
  //transform: scale(1);
  background-color: white;
  transition: 0.5s;
  &:hover {
    box-shadow: 8px 8px 20px 8px rgba(55, 84, 170, 0.15);
    transform: scale(1.02);
    cursor: pointer;
    .courseName {
      transform: scale(1, 1.1) translateY(-0.5px);
      color: #00E4E3;
      transition: 0.5s;
    }
  }
  @media only screen and (max-width: 1024px){
    padding: 20px;
  }
  @media only screen and (max-width: 768px){
    width: 100%;
  }
`;

export const CardBody = styled.div`
  height: 150px;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 768px){
    height: fit-content;
    margin-bottom: 10px;
  }
`;

export const CardCourseTexts = styled.div`
  margin-right: 20px;
  @media only screen and (max-width: 768px){
    width: 100%;
    margin-right: 10px;
  }
`;

export const CardCourseTypeGuaranteeBox = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const CardCourseTypeGuarantee = styled.p`
  padding: 6px 8px;
  font-size: 12px;
  font-weight: 500;
  border-radius: 4px;
  background-color: ${ props => props.type ? "#eff0f5" : "#73B9FF40" };
  color: ${ props => props.type ? "#1f222e" : "#73B9FF" };
  margin: 0 0 12px;
  ${ props => props.type && "margin: 0 8px 8px 0" };
  
`;

export const CardCourseName = styled.p`
  font-size: 20px;
  font-weight: 700;
  margin: 12px 0;
`;

export const CardCourseDescription = styled.p`
  font-size: 14px;
  line-height: 20px;
  margin: 0;
`;

export const CardCourseIcon = styled.div`

`;

export const CardFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

export const CardCourseDuration = styled.p`
  margin: 0;
  font-family: 'IBM Plex Sans', sans-serif;
  color: #000;
  font-size: 14px;
  line-height: 24px;
  font-weight: 500;
`;

export const CardCourseDiscount = styled.p`
  width: 40px;
  height: 40px;
  border-radius: 40px;
  background-color: #f2363b20;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #f2363b;
  font-size: 13px;
  font-weight: 700;
  line-height: 24px;
  text-align: right;
  margin: 0;
  font-family: 'IBM Plex Sans', sans-serif;
`;
