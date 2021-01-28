import styled from "styled-components";

export const VideoSectionBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;
  position: relative;
  @media only screen and (max-width:1024px){
    flex-direction: column;
  }
`;

export const VideoBox = styled.div`
  width: 63%;
  position: relative;
  height: 100%;
  img{
    width: 100%;
    height: auto;
  }
  @media only screen and (max-width:1024px){
    width:100%
  }
`;

export const VideoBoxCover = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0,0,0,.4);
`;

export const VideoBoxCoverData = styled.div`
  width: fit-content;
  color: white;
  font-weight: 500;
  text-align: center;
  svg{
    width: 96px;
    height: 96px;
    margin-bottom: 16px;
  }
  
  p{
    margin-bottom: 10px;
    font-size: 17px;
    line-height: 24px;
  }
  h1{
    font-size: 24px;
    line-height: 32px;
    margin-bottom: 24px;
    color: white;
  }
  button{
    width: 240px;
    height: auto;
    font-size: 14px;
    line-height: 1.428571429;
    background-color: #08d092!important;
    border: 0;
    padding: 8px 12px;
    border-radius: 4px;
    &:focus{
      outline: 0;
    }
  }
  
  @media only screen and (max-width: 1024px){
    p{
      font-size: 15px;
      line-height: 20px;
    }
    h1{
      font-size: 20px;
      line-height: 28px;
    }
  }
  
  @media only screen and (max-width: 768px){
    svg{
      display: none;
    }
  }
`;

export const RecWebinarsBox = styled.div`
  width: 37%;
  height: 100%;
  overflow: auto;
  background-color: #50667b;
  color: #f4f5fa;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  h2{
    padding: 24px 32px;
    font-weight: 400;
    font-size: 24px;
    line-height: 32px;
    color: white;
  }
  @media only screen and (max-width:1024px){
    width:100%;
    position:unset;
    max-height: 400px;
    
    h2{
      font-size: 20px;
      line-height: 28px;
    }
    
  }
  
  @media only screen and (max-width:1024px){
    max-height: 200px;
  } 
`;

export const RecCards = styled.div`
  height: 100%;
  overflow: auto;
`;