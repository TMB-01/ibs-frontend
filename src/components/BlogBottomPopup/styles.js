import styled from "styled-components";

export const BlogBottomPopupStyled = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  width: calc(100% - 100px);
  background-color: white;
  padding: ${ props => props.submitedEmail ? "32px 64px" : "32px 40px" };
  display: ${ props => props.isOpen ? "flex" : "none" };
  align-items: center;
  box-shadow: 0 -2px 16px rgba(80,102,123,.16);
  z-index:99;
  @media only screen and (max-width: 1024px){
    width: 100%;
    padding: ${ props => props.submitedEmail ? "32px 64px" : "32px 40px 24px" };
  }
  @media only screen and (max-width: 768px){
    padding: ${ props => props.submitedEmail ? "32px 64px" : "0 32px 24px" };
    flex-direction: column;
  }
`;

export const PopupIcon = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: ${ props => props.submited ? "none" : "flex" };
  align-items: center;
  justify-content: center;
  color: white;
  background: linear-gradient(180deg, #00EEFC 0%, #00A4C8 100%);
  box-shadow: 1px 3px 12px rgba(5,158,244,.76);
  margin-right: 40px;
  svg{
    width: 40px;
    height: 40px;
  }
  @media only screen and (max-width: 768px){
    margin: 0;
    transform: translateY(-20px);
  }
`;

export const DataRight = styled.div`
  width: calc( 100% - 80px);
  display: ${ props => props.submited ? "none" : "flex" };
  align-items: center;
  justify-content: space-between;
  
  @media only screen and (max-width: 1024px){
    flex-direction: column;
    align-items: start;
    width: fit-content;
  }
`;

export const Texts = styled.div`
  h1{
    margin-bottom: 8px;
    font-size: 24px;
    line-height: 32px;
    font-weight: bold;
    color: #3f5368;
  }
  p{
    font-size: 15px;
    line-height: 24px;
    margin: 0;
    color: rgba(80,102,123,.6);
  }
  @media only screen and (max-width: 768px){
    &, h1, p {
      width: fit-content;
      margin-left: auto;    
      margin-right: auto;    
      text-align: center;
    }
    h1{
      margin-bottom: 16px;
    }
    margin-bottom: 32px;
  }
`;

export const EmailWrapper = styled.div`
  width: 30%;
  min-width: 220px;
  max-width: 320px;
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (max-width: 1024px){
    width: 100%;
    max-width: unset;
  }
  @media only screen and (max-width: 768px){
    margin-top: 0;
  }
`;

export const EmailBox = styled.form`
  width: 100%;
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

export const EmailInput = styled.input`
  width: calc(100% - 48px);
  height: 48px;
  border: 0;
  background-color: rgba(164,175,221,.2);
  padding: 8px 12px;
  font-size: 15px;
  line-height: 24px;
  color: #50667b;
  &:focus{
    outline: 0;
  }
  
  &::placeholder{
    opacity: .5;
    font-weight: 500;
  }
`;

export const SendEmail = styled.button`
  width: 48px;
  height: 48px;
  border: 0;
  background-color: #6f64e9;
  color: #fff;
  
  &:focus{
    outline: 0;
  }
`;

export const PolicyPopup = styled.a`
  width: 100%;
  font-size: 13px;
  line-height: 18px;
  font-weight: normal;
  transition: color .2s;
  text-align: center;
  color: rgba(80,102,123,.2);
  text-decoration: none;
  
  &:focus, &:hover{
    color: rgba(80,102,123,.2);
  }
`;

export const AfterSubmission = styled.div`
  ${ props => !props.submited && "display: none" };
  text-align: center;
  margin: auto;
  h1{
    font-size: 24px;
    line-height: 32px;
    font-weight: bold;
    margin-bottom: 8px;
    color: #3f5368;
  }
  p{
    font-size: 15px;
    font-weight: 400;
    line-height: 24px;
    margin: 0;
    color: rgba(80,102,123,.6);
  }
`;

export const CancelButton = styled.div`
  width: 16px;
  height: 16px;
  position: absolute;
  top: 20px;
  right: 20px;
  border: 0;
  background-color: transparent;
  color: rgba(80,102,123,.5);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px;
  &:focus{
    outline: 0;
  }
`;
