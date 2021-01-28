import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Header = styled.header`
  //padding: 0 32px;
  @media only screen and (max-width: 1024px){
    padding:0 16px;
    //height: 55px;
  }
`;

export const NavbarTopStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 95px;
  position: relative;
  border-bottom: 1px solid rgba(164,175,221,.2);
 
  *{
    box-sizing: border-box;
  }
  @media only screen and (max-width: 1024px){
    //padding:0 16px;
    height: 55px;
  }
`;

export const PageName = styled.h2`
  font-size: 24px;
  line-height: 32px;
  font-family: Roboto, "San Francisco", "Helvetica Neue", Helvetica, Arial,serif;
  font-weight: 500;
  color: #3f5368;
  margin: 0;
  @media only screen and (max-width: 1024px){
    font-size: 16px;
    line-height: 24px;
  }
`;

export const NavbarTopNavsAndUserStyled = styled.div`
  display: flex;
`;

export const NavsStyled = styled.div`
  display: flex; 
  @media only screen and (max-width: 1024px){
    display: none;
  }
`;

export const NavLink = styled.div`
  width: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #8D9195;
  transition: 0.5s;
  &:hover{
    opacity: 0.5;
    cursor: pointer;
  }
  svg {
    width: 32px;
  }
`;

export const User = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color:rgba(80,102,123,.48);
  &:hover {
    color: #50667b;
  }
  img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    margin: 0 20px;
    transition: 0.5s;
    &:hover {
      opacity: 0.7;
      cursor: pointer;
    }
  }
  @media only screen and (max-width: 1024px){
    display: none;
  }
`;

export const MenuBarIcon = styled.div`
  width: 32px;
  display: none;
  justify-content: center;
  align-items: center;
  color:rgba(80,102,123,.48);
  svg{
    width: 32px;
  }
  &:hover{
    color: #50667b;
  }
  @media only screen and (max-width: 1024px){
    display: flex;
  }
  
`;

export const SearchWrapper = styled.div`
  display: ${ props => props.open ? "block" : "none" };
  height: 100%;
  position: fixed;
  top: 0;
  left: ${ props => props.item ? 0 : "100px" };
  width: ${ props => props.item ? "100%" : "calc(100% - 100px)" };
  transition-duration: 0s;
  z-index: 999;
  @media only screen and (max-width: 1024px){
    width: 100%;
    left: 0;
  }
`;

export const SearchBox = styled.div`
  width: 100%;
  display: flex;
  height: 96px;
  align-items: center;
  color: #2c2d30;
  padding: 0 32px;
  background-color: white;
  border-bottom: 1px solid rgba(164,175,221,.2);
  @media only screen and (max-width: 1024px){
    height: 55px;
  }
`;

export const SearchIcon = styled.div`
  color: #2c2d30;
  width: 32px;
  margin-right: ${ props => props.cancel || props.search ? "0" : "16px" };
  svg{
    width: ${ props => props.cancel ? "32px" : "32px" };
  }
`;

export const SearchInput = styled.input`
  width: calc(100% - 90px);
  border: 0;
  background-color: transparent;
  font-size: 24px;
  line-height: 32px;
  color: #2c2d30;
  margin-right: 16px;
  &::placeholder{
    font-size: 24px;
    line-height: 32px;
    opacity: .7;
  }
  &:focus{
    outline: 0;
  }
`;

export const CloseIcon = styled.div`
  color: rgba(80,102,123,.5);
  padding: 0 5px;
  svg{
    width: 15px;
    font-weight: 100;
  }
`;

export const SearchResult = styled.div`
  background-color: rgba(255,255,255,0.5);
  //height: calc(100% - 96px);
  padding:32px;
  height: 100%;
  backdrop-filter: blur(4px);
`;

export const ToggleNavbarBox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
  display: none;
  background-color: #f4f5fa;
  height: 100vh;
  overflow: auto;
  @media only screen and (max-width: 1024px){
    display: ${ props => props.open ? "block" : "none" };
  }
`;

export const ToggleNavbarHeader = styled.div`
  height: 55px;
  padding: 0 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled(Link)`
  font-size: 25px;
  font-weight: 500;
  height: fit-content;
`;

export const UnderHeader = styled.div`
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px solid rgb(172,172,172);
`;
