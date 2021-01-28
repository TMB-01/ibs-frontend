import styled from "styled-components";

export const CareerItemVacancyToggleStyled = styled.div`
  width: 100%;
  box-shadow: 0 1px 1px rgba(0,0,0,.05);
  border-radius: 4px;
`;

export const ToggleHeader = styled.div`
  width: 100%;
  padding: 12px 8px;
  display: flex;
  align-items: center;
  font-size: 17px;
  font-weight: 500;
  color: #50667b;
  user-select: none;
  cursor: pointer;
  line-height: 24px;
`;

export const ToggleIcon = styled.div`
  margin-right: 24px;
  display: flex;
  align-items: center;
  svg{
    width: 16px;
    height: 16px;
    transform: rotate(${ props => props.isOpen ? "0deg" : "-90deg" });
    transition-duration: .2s;
    color: transparent;
  }
  @media only screen and (max-width: 768px){
    margin-right: 8px;
  }
`;

export const ToggleHeaderTitle = styled.p`
  margin: 0;
  display: flex;
  align-items: center;
  
`;

export const ToggleBody = styled.div`
  width: 100%;
  height: ${ props => props.isOpen ? "fit-content" : 0 };
  overflow: hidden;
  transition-duration: .5s;
`;

export const ToggleBodyContainer = styled.div`
  padding: 8px 0 16px 48px;
  @media only screen and (max-width: 768px){
    padding-left: 10px;
  }
`;

export const ToggleBodyText = styled.div`
  
`;

export const RespondToVacancyBtn = styled.button`
  padding: 10px 36px;
  font-size: 14px;
  line-height: 1.428571429;
  margin-top: 16px;
  color: #50667b!important;
  background-color: #e5f3fe!important;
  border: 0;
  border-radius: 4px;
  &:hover{
    background-color: #d6ecfd!important;
  }
  &:focus{
    outline: 0;
  }
`;
