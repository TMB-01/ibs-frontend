import styled from "styled-components";

export const FooterSection = styled.div`
  padding-bottom: 0;
  @media screen and (max-width: 479px) {
    padding-bottom: 0;
    margin: 0;
  }
`;

export const FooterInner = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -12px;
  margin-right: -12px;
  @media screen and (max-width: 767px) {
    flex-direction: column-reverse;
  }
`;

export const FooterInfo = styled.div`
  box-sizing: border-box;
  margin-right: 12px;
  margin-left: 12px;
  width: calc(33.333% - 24px);
  @media screen and (max-width: 767px) {
    display: flex;
    flex-wrap: wrap;
    margin: 10px 12px;
  }
  @media screen and (max-width: 767px) {
    width: calc(100% - 24px);
  }
`;

export const FooterInfoItem = styled.div`
  line-height: 1.2;
  margin-bottom: 28px;
  @media screen and (max-width: 479px) {
    width: calc(100% - 24px);
    text-align: center;
  }
  @media screen and (max-width: 767px) {
    margin: 10px 12px;
    box-sizing: border-box;
  }
`;

export const FooterMap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  margin-left: 12px;
  margin-right: 12px;
  width: calc(66.6667% - 24px);
  @media screen and (max-width: 767px) {
    width: calc(100% - 24px);
    height: 200px;
    margin-bottom: 10px;
    margin-top: -20px;
  }
  iframe {
    width: 600px;
    height: 400px;
    min-height: 150px;
    border-radius: 16px;
    @media screen and (max-width: 767px) {
      width: calc(100% - 24px);
      height: 200px;
      margin-bottom: 10px;
      border-radius: 12px;
    }
  }
`;

export const FooterBottom = styled.div`
  position: relative;
  padding: 45px 0;
  @media screen and (max-width: 767px) {
    padding: 0;
    margin: 20px 0 0;
  }
`;

export const FooterSocialList = styled.div`
  // empty
`;

export const SocialList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -15px;
  @media screen and (max-width: 767px) {
    -webkit-box-pack: center;
    justify-content: center;
  } ;
`;

export const FooterSocialItem = styled.div`
  display: block;
  margin: 15px;
  transition: all 0.3s;
`;

export const FooterDesc = styled.p`
  font-size: 16px;
`;

export const SocialItems = styled.a`
  text-decoration: none;
  color: #000;
  transition: all 0.3s;
  background-color: transparent;
  display: block;
  font-size: 25px;
`;

export const Container = styled.div`
  position: relative;
  width: 1170px;
  min-width: 320px;
  padding: 0 40px;
  margin: 0 auto;
  &::after {
    display: block;
    content: "";
    clear: both;
  }
  @media screen and (max-width: 991px) {
    width: 100%;
    padding: 0 20px;
  }
  @media screen and (max-width: 1199px) {
    width: 100%;
  } ;
`;

export const Heading = styled.h3`
  font-size: 36px;
  font-weight: 700;
  line-height: 1.5;
  color: #000;
  padding: 0;
  margin: 0;
  @media screen and (max-width: 479px) {
    margin: 0 0 5px;
  }
  @media screen and (max-width: 575px) {
    font-size: 28px;
  } ;
`;

export const SectionTitle = styled.div`
  text-align: center;
  @media screen and (max-width: 575px) {
    margin-bottom: 40px;
  }
  @media screen and (max-width: 479px) {
    text-align: center;
  }
`;