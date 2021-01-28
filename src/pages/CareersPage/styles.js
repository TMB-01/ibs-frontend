import styled from "styled-components";

export const CareersPageStyled = styled.div`
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

export const CareersPageNavbar = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const CareersPageSearchContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 32px;
`;

export const CareersPageSearchBox = styled.div`
  padding: 20px 0;
  width: 33.3333333%;
  border-bottom: 1px solid transparent;
  margin-bottom: 10px;
  margin-right: 30px;
  transition: 0.5s;
  &:focus-within{
    //border-color: #3f9dff;
    border-color: #00E4E3;
    border-bottom: 1px solid #00E4E3;
  }
  
  svg{
    width: 24px;
    height: 24px;  
    color: #cbd5dd;
  }
  &:hover{
    svg{
      color: #00E4E3;
    }
  }
  @media only screen and (max-width: 1024px){
    width: 100%;
  }
`;


export const CareersPageSearchInput = styled.input`
  width: calc(100% - 36px);
  border: 0;
  background-color: transparent;
  padding-left: 12px;
  color: #00E4E3;
  &:focus{
    outline: 0;
  }
  &::placeholder{
    color: #cbd5dd;
  }
`;

export const CareersPageSelect = styled.select`
  margin-right: 30px;
  margin-bottom: 10px;
  padding: 4px 11px;
  height: 32px;
  width: 200px;
  border-radius: 3px;
  background-color: #00E4E370;
  border: none;
  color: #50667b;
  font-size: 15px;
  option{
    background-color: white;
  }
  &:focus{
    outline: 0;
  }
`;

export const CareersPageCards = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 32px;
`;