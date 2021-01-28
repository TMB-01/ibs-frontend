import styled from 'styled-components';


export const Main = styled.div`
  padding: 60px 0;
`;

export const CtaIcon = styled.div`
  margin: 0 0 25px;
  img {
    margin: 0 auto;
    display: block;
    width: 70px;
  }
`;

export const CtaHeading = styled.div`
  max-width: 670px;
  margin: 0 auto 32px;
  text-align: center;
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
