import styled from 'styled-components'

export const AboutStatistics = styled.div `
  display: flex;
  flex-wrap: wrap;
  margin: 32px -12px -15px;
  justify-content: center;
  background: #ececec;
  border-radius: 18px;
  align-items: center;
`;

export const StatisticsItem = styled.div `
  box-sizing: border-box;
  margin: 40px 12px;
  text-align: center;
  width: calc(25% - 24px);
  p {
    font-size: 18px;
    margin: 0;
  }
`;