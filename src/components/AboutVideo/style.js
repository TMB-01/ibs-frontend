import styled from "styled-components";

export const AboutVideo = styled.div`
  padding: 20px;
  display: flex;
  margin: 40px;
  justify-content: center;
  @media screen and (max-width: 600px) {
    margin-top: -15px;
    margin-left: 0;
    margin-right: 0;
    margin-bottom: 0;
    padding: 0;
  }
  .youtube-video {
    width: 720px;
    height: 400px;
    border-radius: 18px;
    margin: 0 auto;
    z-index: 1;
    @media screen and (max-width: 800px) {
      height: 300px;
    }
    @media screen and (max-width: 600px) {
      height: 250px;
      border-radius: 9px;
    }
  }
`;

export const AboutVideoPlace = styled.div`
  width: 720px;
  height: 400px;
  background-color: #8aff8d;
  border-radius: 18px;
  margin: 0 auto;
  position: relative;
  @media screen and (max-width: 800px) {
    height: 300px;
  }
  @media screen and (max-width: 600px) {
    height: 250px;
  }
`;

export const AboutVideoButton = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-decoration: none;
  color: #fff;
  transition: color 0.2s;
  :hover {
    color: #ffbf2b;
  }
  .video-button {
    font-size: 60px;
    width: 1em;
    height: 1em;
    cursor: pointer;
  }
`;
