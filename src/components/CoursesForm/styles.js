import styled from "styled-components";
import { Gradient } from "react-gradient";
import NumberFormat from 'react-number-format';


export const CoursesFormStyled = styled( Gradient )`
  margin: 32px;
  padding: 64px;
  background-color: greenyellow;
  border-radius: 20px;
  display: flex;
  
  @media only screen and (max-width: 1024px){
    padding: 44px;
    margin: 16px;
  }
  @media only screen and (max-width: 991px){
    flex-direction: column;
    padding: 48px 16px;
    margin: 0;
    border-radius: 0;
  }
`;

export const LeftData = styled.div`
  width: 50%;
  
  h1{
    color: #000;
    font-size: 40px;
    line-height: 56px;
    font-weight: bold;
  }
  p{
    font-size: 20px;
    line-height: 28px;
  }
  @media only screen and (max-width: 991px){
    width: 100%;
    
    h1{
      font-size: 24px;
      line-height: 32px;
    }
    p{
      font-size: 15px;
      line-height: 20px;
    }
  }
`;

export const RightData = styled.div`
  width: 50%;
  @media only screen and (max-width: 991px){
    width: 100%;
  }
`;

export const FormBox = styled.form`
  width: 100%;
  padding: 0 24px 0 50px;
  
  @media only screen and (max-width: 991px){
    padding: 20px 0 0;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 48px;
  padding: 8px 20px;
  border: 1px solid transparent;
  border-radius: 12px;
  background-color: white;
  color: #333333;
  font-size: 15px;
  line-height: 16px;
  font-weight: 500;
  
  &:nth-child(2){
    margin-top: 20px;
  }
  &:focus{
    outline: 0;
    border-color: #3898EC;;
  }
`;

export const PhoneNumberInput = styled( NumberFormat )`
  width: 100%;
  height: 48px;
  padding: 8px 20px;
  border: 1px solid transparent;
  border-radius: 12px;
  background-color: white;
  color: #333333;
  font-size: 15px;
  line-height: 16px;
  font-weight: 500;
  
  &:nth-child(2){
    margin-top: 20px;
  }
  &:focus{
    outline: 0;
    border-color: #3898EC;;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  height: 48px;
  margin-top: 8px;
  padding: 9px 15px;
  border-radius: 12px;
  background-color: #000;
  color: #fff;
  font-size: 15px;
  line-height: 16px;
  font-weight: 700;
  border: 0;
  
  &:focus{
    outline: 0;
  }
`;

export const UnderForm = styled.div`
  margin-top: 32px;
  color: #000;
  font-size: 12px;
  line-height: 16px;
  font-weight: 400;
  text-align: left;
`;


