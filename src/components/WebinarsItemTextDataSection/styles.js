import styled from "styled-components";
import { WebinarAuthor, WebinarDate } from "../WebinarCard/styles";
import { Tags } from "../ForumCard/styles";
import { StickyContainer } from "react-sticky";

export const TextDataStyled = styled.div`
  padding: 24px 32px;
  display: flex;
  @media only screen and (max-width:1024px){
    padding: 12px 16px;
  }
  
  @media only screen and (max-width:768px){
    flex-direction: column;
  }
`;

export const TextDataBox = styled.div`
  width: 63%;
  @media only screen and (max-width:768px){
    width:100%
  }
`;

export const TextTitle = styled.p`
  margin-bottom: 32px;
  font-weight: 500;
  font-size: 34px;
  line-height: 44px;
  color:  #3f5368; //#50667b;
  
  @media only screen and (max-width: 1024px){
    font-size: 24px;
    line-height: 32px;
  }
  
`;

export const TextDataSocialMediasBox = styled.div`
  display: flex;
`;

export const TextDataSocialMedias = styled.a`
  text-decoration: none;
  width: 40px;
  padding: 2px 8px;
  background-color: ${ props => props.bgColor };
  color: white;
  border-radius: 4px;
  margin-right: 8px;
  &:hover{
    color:white
  }
`;

export const WebinarData = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  white-space: nowrap;
  padding: 32px 0 40px;
  flex-wrap: wrap;
  div:nth-child(3){
    width: fit-content;
  }
`;

export const Date = styled( WebinarDate )`
  width: fit-content;
  line-height: unset;
  margin-right: 32px;
`;

export const Author = styled( WebinarAuthor )`
  width: fit-content;
  margin: 10px 32px 10px 0;
  display: inline-flex;
  align-items: center;
`;

export const AuthorPic = styled.div`
  margin-right: 8px;
  width: 24px;
  height: 24px;
  overflow: hidden;
  border-radius: 50%;
  img{
    width: 100%;
  }
`;

export const Paragraph = styled.p`
  margin-bottom: 16px;
  font-size: 15px;
  font-weight: 400;
  line-height: 24px;
  color: #3f5368;
  strong{
    margin-bottom: 8px;
    display: inline-block;
    font-weight: 700;
  }
 
`;

export const HashtagTags = styled( Tags )`
  color: rgba(80,102,123,.5);
`;

export const AttendeesContainer = styled( StickyContainer )`
  width: 37%;
  @media only screen and (max-width:768px){
    width:100%
  }
`;

export const AttendeesBox = styled.div`
  width: 100%;
  margin: auto;
  background-color: #f4f5fa;
  max-height: 450px;
  overflow-y: auto;
  overflow-x: hidden;
  border-radius: 4px;
  //top: 24px !important;

`;

export const AttendeesTitle = styled.p`
  font-size: 24px;
  line-height: 32px;
  color: #50667b;
  padding: 32px 16px;
  margin-bottom: 0;
  
  @media only screen and (max-width:1024px){
    font-size: 20px;
    line-height: 28px;
  }
  
`;

export const AttendeesUsers = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const AttendeesUserBox = styled.div`
  width: 33.3333333%;
  padding: 0 16px 32px;
  @media only screen and (max-width:768px){
    width:25%
  }
  @media only screen and (max-width:425px){
    width:33.333333333%
  }
`;

export const AttendeesUserImg = styled.div`
  margin-bottom: 8px;
  img{
    width: 64px;
    height: 64px;
    margin: auto;
    display: block;
    border-radius: 50%;
  }
`;

export const AttendeesUserName = styled.p`
  font-size: 13px;
  line-height: 18px;
  font-weight: 400;
  text-align: center;
  color: rgba(80,102,123,.5);
`;

