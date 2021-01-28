import styled from "styled-components";
import { TextTitle } from "../../components/WebinarsItemTextDataSection/styles";

export const ForumItemPageStyled = styled.div`
  width: 100%;
  padding: 32px;
  margin: auto;
  display: flex;
  @media only screen and (max-width: 1024px){
    padding: 16px;
  }
  @media only screen and (max-width: 924px){
    width: 100%;
  }
  @media only screen and (max-width: 768px){
    flex-direction: column;
  }
`;

export const ForumItemPageContainer = styled.div`
  width:70%;
  margin-right: 32px;
  @media only screen and (max-width: 1280px){
    width:60%;
  }
  @media only screen and (max-width: 768px){
    width:100%;
  }
`;

export const Title = styled( TextTitle )`
  margin-bottom: 8px;
`;

export const ForumTopicPage = styled.div`
  margin: 24px 0;
  display: flex;
`;

export const ForumTopicImg = styled.div`
  width: 32px;
  height: 34px;
  margin-right: 16px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  img{
    width: 100%;
    height: auto;
  }
`;

export const ForumTopicTextBox = styled.div`
  width: calc(100% - 50px);
`;

export const ForumTopicText = styled.div`
  border: 1px solid rgba(164,175,221,.2);
  padding: 8px 16px;
  font-weight: 400;
  font-size: 15px;
  line-height: 24px;
  color: #2c2d30;
  position: relative;
  
  &:before{
    width: 16px;
    height: 16px;
    content: "";
    position: absolute;
    left: -8px;
    top: 8px;
    margin: auto;
    border-left: 1px solid rgba(164,175,221,.2);
    border-bottom: 1px solid rgba(164,175,221,.2);
    background-color: #fff;
    transform: rotate(45deg);
  }
  
  @media only screen and (max-width: 1024px){
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #2c2d30;
  }
`;

export const ForumTopicUnderText = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 10px;
  span{
    display: flex;
    flex-wrap: wrap;
  }
`;

export const IconTextBox = styled.div`
  display: flex;
  align-items: center;
  font-size: 13px;
  line-height: 18px;
  font-weight: 400;
  color: rgba(80,102,123,.5);
  margin-right: 10px;
  svg{
    height: 13px;
    margin-right: 5px;
    ${ props => props.right && "margin-left: 5px" };
  }
  
  @media only screen and (max-width: 1024px){
    font-size: 12px;
    line-height: 16px;
    font-weight: 400;
    
    svg{
      height: 12px;
    }
  }
  
`;

export const FollowBox = styled.div`
  display: flex;
  align-items: center;
  p{
    font-size: 13px;
    line-height: 18px;
    font-weight: 400;
    margin: 0;
  }
  
  @media only screen and (max-width: 1024px){
    p{
      font-size: 12px;
      line-height: 16px;
      font-weight: 400;
    }
  }
  
`;

export const FollowButton = styled.button`
  width: fit-content;
  height: auto;
  font-size: 14px;
  line-height: 1.428571429;
  background-color: #08d092!important;
  color: white;
  border: 0;
  padding: 8px 16px;
  border-radius: 4px;
  margin-right: 16px;
  &:focus{
    outline: 0;
  }
  
  svg{
    height: 12px;
    margin-right: 8px;
    transform: rotate(45deg);
  }
  
  @media only screen and (max-width: 1024px){
    font-size: 12px;
    line-height: 16px;
    font-weight: 400;
    
    svg{
      height: 10px;
    }
  }
  
`;

export const CommentsContainer = styled.div`
  width: 100%;
  margin-top: 24px;
`;

export const CommentsBoxTitle = styled.p`
  font-size: 17px;
  line-height: 27px;
  font-weight: 500;
  color: #3f5368;
  
  span{
    color: rgba(80,102,123,.5);
  }
  
  @media only screen and (max-width: 1024px){
    font-size: 15px;
    line-height: 24px;
  }
`;

export const ForumItemPageAside = styled.div`
  width:30%;
  @media only screen and (max-width: 1280px){
    width:40%;
  }
  @media only screen and (max-width: 768px){
    width:100%;
  }
`;

export const ForumItemPageAsideContainer = styled.div`
  width:100%;
  margin-bottom: 32px;
`;

export const ForumItemPageAsideTitle = styled.p`
  font-size: 17px;
  line-height: 24px;
  font-weight: 500;
  color: #50667b;
  margin-bottom: 16px;
  @media only screen and (max-width: 1024px){
    font-size: 15px;
    line-height: 20px;
  }
`;

export const AsideCourseCardBox = styled.div`
  display: flex;
  margin-bottom: 24px;
`;

export const AsideCircleCardIcon = styled.div`
  width: 50px;
  height: 50px;
  margin-right: 16px;
  border-radius: 50%;
  overflow: hidden;
  img{
    width: 100%;
    height: 100%;
  }
`;

export const AsideCourseCardText = styled.div`
  width: calc(100% - 66px);
  display: flex;
  justify-content: space-between;
`;

export const AsideCourseCardTitleAndSub = styled.div`
  margin-right: 16px;
`;

export const AsideCardTitle = styled.p`
  font-size: 15px;
  line-height: 24px;
  color: #50667b;
  margin-bottom: ${ props => props.mb ? props.mb + "px" : 0 };
  @media only screen and (max-width: 1024px){
    font-size: 14px;
    line-height: 20px;
  }
`;

export const AsideCourseCardSubTitle = styled.p`
  color: rgba(80,102,123,.5);
  font-size: 13px;
  line-height: 18px;
  font-weight: 400;
  margin: 0;
  
  @media only screen and (max-width: 1024px){
    font-size: 12px;
    line-height: 16px;
  }
`;

export const AsideCourseCardDate = styled.div`
  text-align: center;
  color: #08d092;
  line-height: 24px;
  height: fit-content;
  p{
    font-size: 15px;
    margin: 0;
  }
  div{
    font-size: 11px;
  }
`;

export const AsideRectCardIcon = styled.div`
  width: 128px;
  height: 72px;
  margin-right: 16px;
  img{
    width: 100%;
  }
`;

export const AsideBlogCardText = styled.div`
  width: calc(100% - 144px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const AsideBlogCardTitle = styled.div`
  margin-bottom: 8px;
  font-size: 15px;
  line-height: 24px;
  
  @media only screen and (max-width: 1024px){
    font-size: 14px;
    line-height: 20px;
  }
`;

export const AsideCardIconBoxGreen = styled.div`
  color: #08d092;
  display: flex;
  align-items: center;
  margin-right: 16px;
  svg{
    display: flex;
    color: #08d092;
  }
`;