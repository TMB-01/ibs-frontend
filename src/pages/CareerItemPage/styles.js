import styled from "styled-components";
import { WebinarNavbar } from "../WebinarsPage/styles";

export const CareerItemPageStyled = styled.div`
  width: 100%;
`;

export const CareerItemPageHeader = styled.div`
  width: 100%;
  padding: 32px;
  background-color: #f4f5fa;
  display: flex;
  @media only screen and (max-width: 1024px){
    padding: 32px 16px;
  }
`;

export const DataLeft = styled.div`
  width: 66.6666666%;
  display: flex;
  padding-right: 16px;
  //align-items: center;
  @media only screen and (max-width: 1024px){
    flex-direction: column;
  }
`;

export const CompanyLogo = styled.div`
  width: 136px;
  height: 136px;
  overflow: hidden;
  border-radius: 50%;
  background-color: white;
  img{
    width: 100%;
    height: auto;
  }
  @media only screen and (max-width: 1024px){
    width: 80px;
    height: 80px;
  }
`;

export const CompanyData = styled.div`
  width: calc(100% - 136px);
  padding-left: 60px;
  @media only screen and (max-width: 1024px){
    padding: 0;
    margin-top: 16px;
    width: 100%;
  }
`;

export const CompanySmall = styled.p`
  font-size: 10px!important;
  color: rgba(80,102,123,.5);
  letter-spacing: 1px;
  margin: 0;
`;

export const CompanyName = styled.p`
  font-weight: 500;
  font-size: 34px;
  line-height: 44px;
  color: #3f5368;
  margin: 0;
  
  @media only screen and (max-width: 1024px){
    font-size: 24px;
    line-height: 32px;
  }
`;

export const DataRight = styled.div`
  width: 33.3333333%;
  margin-top: 16px;
  
`;

export const FollowButton = styled.button`
  display: flex;
  align-items: center;
  padding: 10px 16px;
  border-radius: 4px;
  border: 0;
  color: #50667b!important;
  text-transform: uppercase;
  font-weight: 400;
  background-color: #e5f3fe!important;
  margin-left: auto;
  margin-right: 0;
  font-size: 14px;
  svg{
    width: 18px;
    height: 18px;
    margin: 0 10px;
    color: #50667b;
    opacity: .48;
  }
  &:hover{
    background-color: #d6ecfd!important;
  }
  &:focus{
    outline: 0;
  }
  @media only screen and (max-width: 768px){
    span:nth-child(1){
      display: none;
    }
  }
`;

export const WebsitesBox = styled.div`
  width: fit-content;
  padding-top: 32px;
  margin-left: auto;
  margin-right: 0;
  display: flex;
  @media only screen and (max-width: 768px){
    display: none;
  }
`;

export const WebsitesBoxResponsive = styled.div`
  width: 100%;
  display: none;
  flex-wrap: wrap;
  background-color: #f4f5fa;
  padding: 0 20px 32px;
  justify-content: center;
  
  @media only screen and (max-width: 768px){
    display: flex;
  }
`;

export const Website = styled.a`
  padding: 6px 8px;
  height: 24px;
  font-size: 13px;
  color: rgba(80,102,123,.5);
  cursor: pointer;
  text-align: right;
  margin-left: 8px;
  &:hover{
    color: #50667b;
  }
  
  @media only screen and (max-width: 1024px){
   
  }
`;

export const NavbarBox = styled( WebinarNavbar )`
  padding: 0 32px;
  margin:0;
  background-color: #f4f5fa;
`;

export const TextDataContainer = styled.div`
  padding:30px 32px;
  font-size: 15px;
  line-height: 24px;
  color: #2c2d30;
  @media only screen and (max-width: 1024px){
    padding: 30px 16px;
    line-height: 20px;
  }
`;

export const AboutText = styled.div`
  width: 66.666666%;
  
  @media only screen and (max-width: 1024px){
    width: 100%;
  }
`;

export const VacanciesList=styled.p`
  width: 100%;
  padding: 8px 8px 0 0;
  display: flex;
  align-items: center;
  font-size: 17px;
  font-weight: 500;
  color: #50667b;
  user-select: none;
  cursor: pointer;
  line-height: 24px;
`;

export const VacancyText = styled.div`
  width: 83.333333%;
  
  @media only screen and (max-width: 1024px){
    width: 66.666666%;
  }
  @media only screen and (max-width: 768px){
    width: 100%;
  }
`;
