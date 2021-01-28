import styled from 'styled-components'


export const Row = styled.div `
  display: flex;
  flex-wrap: wrap;
  margin: -27px -12px;
  width: 90vw;
  justify-content: center;
`;

export const RowItem = styled.div `
  box-sizing: border-box;
  margin: 12px 27px;
  text-align: center;
  width: calc(33.33%- 24px);
  padding-bottom: 40px;
  .about {
    font-size: 25px;
    margin: 0;
  }
`;

export const Icon = styled.div `
  position: relative;
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background-color: #f3f1ee;
  margin: 0 auto 15px;
  p {
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
  .icons {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 42px;
    height: auto;
  }
`;

