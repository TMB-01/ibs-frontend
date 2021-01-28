import styled from "styled-components";

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

export const BenefitsSection = styled.div`
  padding: 50px 0 0;
  @media screen and (max-width: 479px) {
    padding: 30px 0 40px;
  }
`;

export const BenefitsContainer = styled(Container)`
  width: 100%;
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  @media screen and (max-width: 479px) {
    margin-bottom: -20px;
    margin-top: -20px;
  } ;
`;

export const RowItem = styled.div`
  box-sizing: border-box;
  margin: 27px 12px;
  text-align: center;
  width: 300px;
  padding-bottom: 40px;

  @media screen and (max-width: 767px) {
    width: 175px;
    font-size: 16px;
  }
  @media screen and (max-width: 479px) {
    width: 150px;
    font-size: 14px;
    margin: 20px auto;
    justify-content: center;
  }
`;

export const Icon = styled.div`
  position: relative;
  width: 102px;
  height: 102px;
  border-radius: 50%;
  background-color: transparent;
  margin: 0 auto 15px;
  border: 2px dashed #FEC02A;
  font-size: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AboutDesc = styled.p`
  font-size: 16px;
`;

export const IconImg = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 62px;
  height: auto;
`;
