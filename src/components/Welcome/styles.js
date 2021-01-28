import styled from "styled-components";

export const WelcomeWrapper = styled.div`
  margin: 50px;
  @media screen and (max-width: 780px) {
    margin: 0;
  }
`;

export const WelcomeInner = styled.div`
  width: 90%;
  height: 500px;
  display: flex;
  background-color: transparent;
  margin: 0 auto;
  border-radius: 18px;
  border: 3px dashed #FEC02C;

  @media screen and (max-width: 1150px) {
    width: 100%;
    height: auto;
  }
  @media screen and (max-width: 780px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0;
    border-radius: 0;
  }
`;

export const WelcomeContent = styled.div`
  width: 70%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* border: 2px solid black; */
  @media screen and (max-width: 500px) {
    text-align: center;
    width: 100%;
    padding-right: 20px;
    padding-left: 0;
  }
`;

export const WelcomeHeading = styled.h1`
  font-size: 36px;
  padding-left: 20px;
  font-weight: 700;
  color: #000;
  margin-top: -40px;
  margin-bottom: 40px;
  @media screen and (max-width: 500px) {
    font-size: 25px;
    margin-top: 0px;

  }
`;

export const WelcomeParagraph = styled.div`
  font-size: 22px;
  font-weight: 400;
  padding-left: 20px;
  line-height: 1.5;
  color: #14130F;
  @media screen and (max-width: 1040px) {
    font-size: 18px;
  }
`;

export const WelcomeImage = styled.div`
  padding: 20px;
  display: flex;
  align-items: flex-end;
`;

export const WelcomeAuthor = styled.img`
  width: 467px;
  height: 412px;
  margin: 0 auto;
  display: block;
  @media screen and (max-width: 1040px) {
    width: 400px;
    height: auto;
  }
  @media screen and (max-width: 500px) {
    width: 250px;
  }
  @media screen and (max-width: 400px) {
    width: 250px;
  }
`;
