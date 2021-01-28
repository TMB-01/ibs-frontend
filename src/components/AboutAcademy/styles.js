import styled from "styled-components";

export const About = styled.div`
  margin-bottom: 50px;
  @media screen and (max-width: 575px) {
    padding: 40px 0;
  }
`;

export const SectionMainTitle = styled.div`
  text-align: center;
  margin-top: 20px;
  @media screen and (max-width: 945px) {
    margin-top: 20px;
  }
  @media screen and (max-width: 805px) {
    margin-top: 20px;
  }
  @media screen and (max-width: 575px) {
    margin-top: 20px;
    margin-bottom: 40px;
  }
  @media screen and (max-width: 479px) {
    margin-top: 20px;
    text-align: center;
  }
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

export const HeadingDesc = styled.div`
  max-width: 540px;
  margin: 10px auto;
  padding-top: 10px;
  font-size: 16px;
`;