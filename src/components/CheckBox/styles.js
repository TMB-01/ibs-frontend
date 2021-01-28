import styled from "styled-components";

//icon
import CheckIcon from "../../assets/icons/check-solid-white.svg";

export const CheckBoxStyled = styled.div`
  margin-right: 30px;
  margin-bottom: 10px;
  input{
    display: none;
  }
`;

export const Label = styled.label`
  user-select: none;
  position: relative;
  padding: 0 0 0 32px;
  margin: 0;
  font-size: 15px;
  &:before{
      content: "";
      width: 20px;
      height: 20px;
      position: absolute;
      padding: 5px;
      left: 0;
      top: 0;
      background-image: url(${ CheckIcon });
      background-color: ${ props => props.checked ? "#00E4E3" : "white" };
      background-size: 15px;
      background-repeat: no-repeat;
      background-position: center;
      border: 1px solid  #00E4E3;
      color: white;
    }
`;