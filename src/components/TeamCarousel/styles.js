import styled from 'styled-components';

//button styles
export const ButtonLeft = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px dashed #FEC02A;
  font-size: 30px;
  margin-top: auto;
  margin-bottom: auto;
  &:focus {
    outline: none;
  }
  @media screen and (max-width: 550px) {
    margin-left: -30px;
  }
`

export const ButtonRight = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px dashed #FEC02A;
  font-size: 30px;
  margin-top: auto;
  margin-bottom: auto;
  &:focus {
    outline: none;
  }
  @media screen and (max-width: 550px) {
    margin-right: -30px;
  }
`
