import styled from "styled-components";
import { Link } from "react-router-dom";

export const ForumCardStyled = styled(Link)`
  width: 100%;
  padding: 17px 0!important;
  display: flex;
  border-bottom: 1px solid rgba(164,175,221,.2);
  color:#818181;
  &:hover{
    color: black;
  }
`;

export const CardLeftData = styled.div`
  width: 60%;
  
  @media only screen and (max-width: 768px){
    width: 70%;
  }
`;

export const Icon = styled.span`
  width: 15px;
  margin-right: 8px !important;
  display: flex;
  align-items: center;
  justify-content: center;
  svg{
    height: ${ props => props.pin ? "15px" : "10px" };
  }
`;

export const Title = styled.p`
  font-size: 17px;
  font-weight: 500;
  height: fit-content;
  display: flex;
  margin: 0;
  @media only screen and (max-width: 1024px){
    font-size: 15px;
    line-height: 20px;
  }
`;

export const Description = styled.div`
  display: flex;
  font-size: 13px;
  line-height: 18px;
  font-weight: 400;
  color: rgba(80,102,123,.5);
  margin: 0;
  @media only screen and (max-width: 1024px){
    font-size: 12px;
    line-height: 16px;
    flex-direction: column;
  }
`;

export const Tags = styled.p`
  margin-right: 16px !important;
  margin-bottom: 0;
  height: fit-content;
  display: flex;
  flex-wrap: wrap;
  small {
    margin-right: 5px;
    font-size: 13px;
    line-height: 20px;
    font-weight: 400;
  }
`;

export const Tag = styled.a`
  text-decoration: none;
  color: rgba(80,102,123,.5);
  &:hover, &:visited, &:active{
    color: rgba(80,102,123,.5);
  }
`;

export const Date = styled.p`
  margin: 0;
`;

export const CardRightData = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  @media only screen and (max-width: 768px){
    justify-content: flex-end;
    width: 30%;
  }
`;

export const UserInfo = styled.div`
  width: 235px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
  @media only screen and (max-width: 768px){
    display: none;
  }
`;

export const UserImg = styled.div`
  width:34px;
  margin-right: 16px!important;
  overflow: hidden;
  border-radius: 50%;  
  img{
    width: 100%;
  }
`;

export const UserNameAndAnsweredTime = styled.div`
  margin: 0;
  @media only screen and (max-width: 1024px){
    margin-right: 16px;
  }
`;

export const UserName = styled.p`
  font-size: 14px;
  line-height: 20px;
  color: #50667b;
  font-weight: 400;
  margin: 0;
  @media only screen and (max-width: 1024px){
    font-size: 14px;
    line-height: 18px;
  }
`;

export const UserAnsweredTime = styled.p`
  font-size: 13px;
  line-height: 18px;
  font-weight: 400;
  color: rgba(80,102,123,.5);
  margin: 0;
  @media only screen and (max-width: 1024px){
    font-size: 12px;
    line-height: 16px;
  }
`;

export const AnswersBox = styled.div`
  color: #08d092;
  width: fit-content;
  display: block;
  p{
    width: fit-content;
    margin: 0 auto;
    font-weight: 400;
    font-size: 15px;
    line-height: 24px;
  }
  
  @media only screen and (max-width: 1024px){
    p{
      font-size: 14px;
      line-height: 20px;
    }
    
  }

`;

export const AnswerWaiters = styled.div`
  color: #2c2d30;
  display: block;
  text-align: center;
  margin-left: 16px !important;
  font-weight: 400;
  font-size: 15px;
  line-height: 24px;
  @media only screen and (max-width: 1024px){
    font-size: 14px;
    line-height: 20px;
  }

  p{
    font-size: 13px;
    line-height: 18px;
    font-weight: 400;
    color: rgba(80,102,123,.5);
    white-space: nowrap;
    margin: 0;
    @media only screen and (max-width: 1024px){
      font-size: 12px;
      line-height: 16px;
    } 
  }
  @media only screen and (max-width: 768px){
    display: none;
  }
`;