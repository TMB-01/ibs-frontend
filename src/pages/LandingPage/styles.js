import styled from 'styled-components';

export const AppWrapper = styled.div`
  display: flex;
  min-height: 100vh;
`;

export const MainWrapper = styled.div`
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  width: 100%;
  .desktop {
    position: absolute;
    top: 140px;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: -1;
    display: block;
    @media screen and (max-width: 800px) {
      display: none;
    }
    @media screen and (min-width: 1140px) {
      height: 5000px;
    }
    .cls-1 {
      animation: fadeIn 0s forwards;
      opacity: 0;

      @keyframes fadeIn {
        0% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
  position: relative;
  min-width: 320px;
  text-align: center;
`;