import styled from "styled-components";

export const FacultiesItems = styled.div`
  max-width: 904px;
  margin: 0 auto;
  background-color: white;
`;

export const FacultiesEachItem = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  margin: 0 0 67px;
  @media screen and (max-width: 767px) {
    display: block;
    margin: 0 0 50px;
  }
`;

export const FacultiesItemInner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 1 100%;
  @media screen and (max-width: 479px) {
    display: block;
  }
  @media screen and (max-width: 767px) {
    margin: 0 0 20px;
  }
`;

export const FacultiesItemIcon = styled.div`
  position: relative;
  -webkit-box-flex: 0;
  flex: 0 0 auto;
  width: 124px;
  height: 124px;
  border-radius: 18px;
  background: transparent;
  border: 2px dashed #FEC02C;
  @media screen and (max-width: 479px) {
    margin: 0 auto 10px;
  }
  @media screen and (max-width: 575px) {
    width: 82px;
    height: 82px;
  }
`;

export const FacultiesItemIconImage = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  img {
    width: 62px;
    height: 62px;
  }
`;

export const FacultiesContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1 1 100%;
  align-items: flex-start;
  padding: 0 100px 0 30px;
  @media screen and (max-width: 479px) {
    justify-content: center;
    text-align: center;
    padding: 0;
  }
  @media screen and (max-width: 767px) {
    padding: 0 0 0 20px;
  }
  @media screen and (max-width: 991px) {
    padding: 0 30px;
  }
`;

export const FacultiesAction = styled.div`
  flex: 0 0 auto;
  -webkit-box-flex: 0;
  @media screen and (max-width: 767px) {
    margin: 0 auto;
    display: flex;
    justify-content: center;
  }
`;

export const FacultiesDesc = styled.p`
  font-size: 18px;
`;

export const BtnGroups = styled.div`
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  .btn-black {
    color: #fff;
    border-color: #2a2c39;
    background-color: #2a2c39;
    margin: 10px 20px;
  }
  .btn-purple {
    color: #fff;
    border-color: #8244f7;
    background-color: #8244f7;
  }
`;

export const MainButton = styled.div`
  display: inline-block;
  font-size: 16px;
  line-height: 1;
  font-weight: 600;
  text-align: center;
  text-decoration: none;
  -webkit-border-radius: 6px;
  border-radius: 6px;
  /* letter-spacing: 0; */
  padding: 12px 22px;
  color: #000;
  background-color: #ffbf2b;
  -webkit-transition: all 0.2s;
  -o-transition: all 0.2s;
  transition: .5s;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  span {
    font-size: 20px;
    margin-left: 10px;
  }
  &:hover {
    background-color: #A4A4A7;
    color: white;
  }
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