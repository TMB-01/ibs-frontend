import styled from "styled-components";
import { Link } from "react-router-dom";

export const WebinarCardBox = styled(Link)`
  width: ${ props => props.fullWidth ? "100%" : "49%" };
  height: ${ props => props.fullWidth ? "50%" : "fit-content" };
  display: ${ props => props.mainFirstCard ? "block" : "flex" };
  padding-bottom: ${ props => props.mainFirstCard ? "15px" : "20px" };
  margin: 0;
  cursor: pointer;
  
  @media only screen and (max-width: 1024px){
    display: block;
    padding-bottom: 15px;
  }
  @media only screen and (max-width: 768px){
    width: 100%;
  }
  
`;

export const WebinarPoster = styled.div`
  width: ${ props => props.mainFirstCard ? "100%" : "50%" };
  height:fit-content;
  margin-bottom: 16px;
  border-radius: 5px;
  position: relative;
  background-color: rgba(80, 102, 123, 0.4);
  margin-right: 16px;
  img {
    width: 100%;
    border-radius: 5px;
  }
  
  &:hover {
    .till {
      left: 8px;
    }
  }
  @media only screen and (max-width: 1024px){
    width: 100%; 
  }
`;

export const TimeTillWebinar = styled.div`
  width: fit-content;
  padding: 8px 16px;
  background-color: #00E4E3;
  font-size: 12px;
  font-weight: 500;
  border-radius: 4px;
  position: absolute;
  top: 8px;
  left: -8px;
  color: white;
  transition-duration: .2s;
  span {
    text-transform: uppercase;
  }
`;

export const PosterCover = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition-duration: .2s;
  background-color: transparent;
  border-radius: 5px;
  &:hover{
    background-color: rgba(80, 102, 123, 0.4);  
  }
`;

export const WebinarData = styled.div`
  width: ${ props => props.mainFirstCard ? "100%" : "50%" };
  @media only screen and (max-width: 1024px){
    width: 100%; 
  }
`;

export const WebinarDate = styled.div`
  font-size: 12px;
  color: black;
  @media only screen and (max-width: 1024px){
    font-size: 10px;
  }
`;

export const WebinarTitle = styled.div`
  width: 100%;
  font-weight: 500;
  font-size: 17px;
  line-height: 24px;
  cursor: pointer;
  color: #3F5368;
  @media only screen and (max-width: 1024px){
    font-size: 15px;
  }
`;

export const WebinarAuthor = styled.div`
  width: 100%;
  font-size: 13px;
  line-height: 18px;
  font-weight: 400;
  margin: 5px 0 15px;
  color: black;
  opacity: .5;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
  @media only screen and (max-width: 1024px){
    font-size: 12px;
    line-height: 16px;
  }
`;

export const WebinarIcons = styled.div`
  width: 100%;
  display:flex;
  font-size: 13px;
  line-height: 18px;
  font-weight: 400;
`;

export const WebinarIconBox = styled.div`
  height: 16px;
  display:flex;
  align-items: center;
  margin-right: 16px;

`;

export const WebinarIcon = styled.div`
  color: #DCE0E5;
  margin-right: 3px;
  svg{
    height: 16px;
  }

`;

export const WebinarIconNumber = styled.div`
  font-size: 14px;
  font-weight: 400;
  @media only screen and (max-width: 1024px){
    font-size: 12px;
  }
`;


