import styled from "styled-components";

export const ForumPageStyled = styled.div`
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
  *{
    box-sizing: border-box;
    //margin: 0;
    //padding: 0;
  }
`;

export const ForumPageNavbar = styled.div`
  border-bottom: 1px solid rgba(164,175,221,.2);
  padding: 10px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CreateTopic = styled.button`
  border: 0;
  padding: 8px 16px;
  border-radius: 5px;
  font-weight: 500;
  font-size: 15px;
  line-height: 24px;
  display: flex;
  align-items: center;
  background-color: #00E4E3;
  color: white;
  &:focus{
    outline: 0;
  }
  
  svg{
    height: 15px;
    display: inline;
    margin-right: 10px;
  }
  
  @media only screen and (max-width: 1024px){
    font-size: 14px;
    line-height: 20px;
  }
`;

export const PolicyForum = styled.a`
  font-family: Roboto, San Francisco, Helvetica Neue, Helvetica, Arial, serif;
  font-weight: 400;
  font-size: 15px;
  text-decoration: none;
  color: #3c4144;
  background-color: transparent;
  
  &:focus, &:active, &:visited, &:hover {
    color: #3c4144;
  }
  
  @media only screen and (max-width: 1024px){
    font-size: 14px;
    line-height: 20px;
  }
`;

export const ForumPageCards = styled.div`
  width: 100%;
`;

export const PaginationBox = styled.div`
  width: fit-content;
  margin: 24px auto;
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
`;

export const PaginationItom = styled.div`
  background-color: ${ props => props.active ? "rgba(164,175,221,.2)" : "transparent" };
  opacity: ${ props => props.active ? "1" : ".4" };
  border-radius: 4px;
  display: flex;
  align-items: center;
  padding: ${ props => props.arrow ? "7px" : props.disable ? "0" : "0 10px" };
  font-size: 14px;
  color: #2c2d30;
  font-weight: 400;
  line-height: 24px;
  
  svg{
    height: 10px;
    line-height: 24px;
    opacity: .5;
  }
  
  &:active, &:hover{
    ${ props => !props.disable && "background-color: rgba(164,175,221,.2); opacity:1; " };
  }
  @media only screen and (max-width:1024px){
    padding: ${ props => props.arrow ? "10px" : props.disable ? "0" : "8px 16px" };    
  }
`;

