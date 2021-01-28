import styled from "styled-components";

export const Main = styled.div`
  padding: 0 0 30px;
  @media screen and (max-width: 550px) {
    margin-top: -50px;
  }
`;

export const FacultiesHeader = styled.div`
  margin: 0 0 56px;
  text-align: center;
`;

export const FacultiesDesc = styled.p`
  font-size: 18px;
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
  margin-top: 100px;
  @media screen and (max-width: 479px) {
    margin: 0 0 5px;
  }
  @media screen and (max-width: 575px) {
    font-size: 28px;
  } ;
`;