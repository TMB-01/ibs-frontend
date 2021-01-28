import styled from "styled-components";

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
  }
`;

export const AboutItemsContainer = styled.div`
  margin-top: 50px;
  @media screen and (max-width: 550px) {
    margin-top: 100px;
    margin-bottom: -50px;
  }
`

export const AboutItemFirst = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -12px;
  margin-left: -12px;
  align-items: center;
  justify-content: center;
  margin-bottom: -50px;
  height: auto;
  flex-direction: row;
  margin-top: -50px;
  .item-text {
    padding-top: 50px;
  }
  @media screen and(min-width: 1500px) {
    margin-bottom: -100px;
    margin-top: 50px;
  }
  @media screen and (max-width: 575px) {
    text-align: center;
  }
  @media screen and (max-width: 866px) {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
  }
`;

export const AboutItemSecond = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -12px;
  margin-left: -12px;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
  flex-direction: row;
  .item-text {
    padding-top: 140px;
  }
  .item-second {
    margin-top: -100px;
    @media screen and (min-width: 1500px) {
    margin-top: 50px;
  }
  }
  @media screen and (min-width: 1500px) {
    margin-bottom: 100px;
  }
  @media screen and (max-width: 575px) {
    text-align: center;
    margin-bottom: 50px;
  }
  @media screen and (max-width: 866px) {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
  }
`;

export const AboutItemText = styled.div`
  box-sizing: border-box;
  margin-left: 12px;
  margin-right: 12px;
  width: calc(50% - 24px);

  @media screen and (max-width: 575px) {
    -webkit-box-ordinal-group: 3;
    order: 2;
    width: calc(100% - 24px);
    margin-top: -50px;
  }
`;

export const ItemsHeading = styled(Heading)`
  background: none;
  @media screen and (max-width: 575px) {
    font-size: 25px;
  }
`;

export const AboutItemImage = styled.div`
  box-sizing: border-box;
  margin-right: -12px;
  margin-left: -12px;
  width: calc(50% - 24px);
  margin-top: -50px;
  display: flex;
  justify-content: center;
  padding-top: -50px;
  margin-bottom: -100px;
  /* border: 2px solid red; */
  @media screen and (max-width: 575px) {
    -webkit-box-ordinal-group: 2;
    order: 1;
    margin-bottom: -20px;
    z-index: -1;
    width: calc(100% - 24px);

    img {
      top: 18px;
      left: -10px;

      @media screen and (max-width: 575px) {
        position: static;
        max-height: 260px;
      }

      @media screen and (max-width: 479px) {
        max-height: 180px;
      }
    }
  }
`;

export const HeadingDesc = styled.p`
  font-size: 16px;
  @media screen and (max-width: 575px) {
    font-size: 16px;
  }
`;
