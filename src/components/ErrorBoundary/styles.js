import styled from 'styled-components';


export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Component = styled.div`
  width: 50%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  img {
    width: 80%;
    height: 50%;
    object-fit: cover;
  }
  span {
    font-size: 18px;
    color: grey;
    font-weight: 500;
  }
`;