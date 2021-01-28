import styled from "styled-components";

export const SelectBox = styled.div`
  width: fit-content;
  position: relative;
  padding: 0 5px;
  margin-right: 20px;
  cursor:pointer;
  transition: 0.5s;
  @media only screen and (max-width: 1024px){
    ${ props => props.courseSelect && "display: none" };
  }
`;

export const SelectTitle = styled.div`
  padding: 10px 0;
  display: flex;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 16px;
  font-weight: 600;
`;

export const SelectIcon = styled.div`
  width: 10px;
  margin-left: 10px;
`;

export const SelectOptionBox = styled.div`
width: fit-content;
padding: 20px 20px 5px;
position: absolute;
top: 40px;
left: 0;
background-color: white;
z-index: 99;

display: ${ props => props.isOpen ? "block" : "none" };

box-shadow: 3px 3px 7px 1px rgba(0, 0, 0, 0.15);
border-radius: 10px;

`;

export const OptionBox = styled.div`
${ props => props.last && "padding-bottom: 64px" };
`;

export const TickIcon = styled.div`
width: 20px;
height: 20px;
border: 1px solid #00E4E3;
display: flex;
justify-content: center;
align-items: center;
background-color: ${ props => props.chosen ? "#00E4E3" : "transparent" };
color: white;
margin-right: 10px;
svg{
width: 20px;
height: 20px;
}
`;

export const Option = styled.div`
  display: flex;
  margin-bottom: 15px;
`;

export const OptionTitle = styled.div`
  color: #333;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 16px;
  font-weight: normal;
  transition: 0.5s;
  &:hover {
    color: #00E4E3;
  }
`;

export const OptionDescription = styled.div`
  //width: fit-content;
  width: 190px;
  font-family: 'IBM Plex Sans', sans-serif;
  color: #9297aa;
  font-size: 12px;
  line-height: 16px;
  font-weight: 400;
`;