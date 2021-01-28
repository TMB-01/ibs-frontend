import styled from "styled-components";

export const FooterWrapper = styled.footer`
  width: 100%;
  height: fit-content;
  padding: 0 32px !important;
  margin: auto 0 0!important;
  display: block;
  @media only screen and (max-width: 1024px){
    padding: 0 16px!important;
  }
`;

export const FooterContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 20px 0 !important;
  align-items: center;
  border-top: 1px solid rgba(164,175,221,.2);
  margin-top: 40px!important;
  @media only screen and (max-width:1024px){
    flex-direction: column;
    justify-content: center;
  }
`;

export const SocialMedias = styled.div`
  display: flex;
  margin-right: 32px;
  @media only screen and (max-width:1024px){
    padding-bottom: 10px;
    margin-right: 0;
  }
`;

export const SocialMediasIcon = styled.a`
  display: block;
  text-decoration: none;
  margin-left: 12px;
  width: 26px;
  height: 26px;
  color: #8D9195;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    opacity: 0.7;
  }
  &:first-child{
    margin-left: 0;
  }
`;

export const FooterNavs = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const FooterLinkBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: 13px;
  justify-content: center;
  span {
    color: #8D9195;
    margin: 0 8px;
    cursor: pointer;
    transition: 0.5s;
    &:hover {
      opacity: 0.7;
    }
  }
`;

export const FooterLink = styled.a`
  text-decoration: none;
  margin: 0 8px;
  color: #8D9195;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    opacity: 0.7;
  }
  
`;