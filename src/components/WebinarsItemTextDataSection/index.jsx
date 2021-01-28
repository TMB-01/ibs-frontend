import React from "react";

import { Sticky } from "react-sticky";

import {
  AttendeesBox,
  AttendeesContainer, 
  AttendeesTitle, 
  AttendeesUserBox, 
  AttendeesUserImg, 
  AttendeesUserName, 
  AttendeesUsers,
  Author, AuthorPic,
  Date, HashtagTags, Paragraph,
  TextDataBox,
  TextDataSocialMedias,
  TextDataSocialMediasBox,
  TextDataStyled,
  TextTitle,
  WebinarData,
} from "./styles";
import { Icon, Tag } from "../ForumCard/styles";

//icons
import { ReactComponent as Vk } from "../../assets/icons/webinar_vk.svg";
import { ReactComponent as Facebook } from "../../assets/icons/webinar_facebook.svg";
import { ReactComponent as Twitter } from "../../assets/icons/webinar_twitter.svg";
import { ReactComponent as Ok } from "../../assets/icons/webinar_ok.svg";
import { ReactComponent as Mail } from "../../assets/icons/webinar_mail.svg";
import { ReactComponent as Link } from "../../assets/icons/webinar_link.svg";
import { ReactComponent as Hashtag } from "../../assets/icons/hashtag-solid.svg";
import { ReactComponent as Group } from "../../assets/icons/group.svg";
import { ReactComponent as Comments } from "../../assets/icons/comments.svg";
import { ReactComponent as Like } from "../../assets/icons/like-filled.svg";

import {
  WebinarIcon,
  WebinarIconBox,
  WebinarIconNumber,
  WebinarIcons,
} from "../WebinarCard/styles";

const WebinarsItemTextDataSection = ( { webinarInfo } ) => {

  // const hashtags = [ "баги на сайте", "гикбрейнс", "сайт" ];

  return (
    <TextDataStyled>
      <TextDataBox>
        <TextTitle>
          { webinarInfo.title }
        </TextTitle>
        <TextDataSocialMediasBox>
          <TextDataSocialMedias bgColor="#4d75a3">
            <Vk/>
          </TextDataSocialMedias>
          <TextDataSocialMedias bgColor="#3e5294">
            <Facebook/>
          </TextDataSocialMedias>
          <TextDataSocialMedias bgColor="#55acee">
            <Twitter/>
          </TextDataSocialMedias>
          <TextDataSocialMedias bgColor="#f48120">
            <Ok/>
          </TextDataSocialMedias>
          <TextDataSocialMedias bgColor="rgba(80,102,123,.2)">
            <Mail/>
          </TextDataSocialMedias>
          <TextDataSocialMedias bgColor="#08d092">
            <Link/>
          </TextDataSocialMedias>
        </TextDataSocialMediasBox>
        <WebinarData>
          <Date>
            {/*{ date }*/ }
            { webinarInfo.textDataDate }
          </Date>
          <Author>
            <AuthorPic>
              <img
                src={ webinarInfo.authorImg }
                alt="Thumb"/>
            </AuthorPic>
            {/*{ author }*/ }
            { webinarInfo.author }
          </Author>

          <WebinarIcons>
            <WebinarIconBox>
              <WebinarIcon><Group/></WebinarIcon>
              <WebinarIconNumber>
                {/*{ numberOfPeople }*/ }
                { webinarInfo.numberOfPeople }
              </WebinarIconNumber>
            </WebinarIconBox>
            <WebinarIconBox>
              <WebinarIcon><Comments/></WebinarIcon>
              <WebinarIconNumber>
                {/*{ numberOfComments }*/ }
                { webinarInfo.numberOfComments }
              </WebinarIconNumber>
            </WebinarIconBox>
            <WebinarIconBox>
              <WebinarIcon><Like/></WebinarIcon>
              <WebinarIconNumber>
                {/*{ numberOfLikes }*/ }
                { webinarInfo.numberOfLikes }
              </WebinarIconNumber>
            </WebinarIconBox>
          </WebinarIcons>
        </WebinarData>

        { webinarInfo.paragraphs.map(
          ( { strong, text } ) =>
            <Paragraph>
              <strong>
                { strong }
              </strong>
              <br/>
              { text.map(
                ( textValue ) =>
                  <>
                    { textValue }
                    <br/>
                  </>,
              ) }
            </Paragraph>,
        ) }
        <HashtagTags>
          <Icon>
            <Hashtag/>
          </Icon>
          {
            webinarInfo.hashtags.map( ( hashtag, index ) =>
              <React.Fragment key={ index }>
                <Tag>
                  { hashtag }
                </Tag>
                { index !== webinarInfo.hashtags.length - 1 && <small>,</small> }
              </React.Fragment>,
            )
          }
        </HashtagTags>
      </TextDataBox>
      <AttendeesContainer>

        <Sticky distanceFromTop={ 20 }>
          { ( { style } ) => (
            <AttendeesBox style={ style }>
              <AttendeesTitle>
                Участники { webinarInfo.numberOfPeople }
              </AttendeesTitle>
              <AttendeesUsers>
                { webinarInfo.attendees.map( ( { img, name } ) =>
                  <AttendeesUserBox>
                    <AttendeesUserImg>
                      <img src={ img } alt="Anonymous"/>
                    </AttendeesUserImg>
                    <AttendeesUserName>
                      { name }
                    </AttendeesUserName>
                  </AttendeesUserBox>,
                ) }
              </AttendeesUsers>
            </AttendeesBox> ) }
        </Sticky>
      </AttendeesContainer>
    </TextDataStyled>
  );
};

export default WebinarsItemTextDataSection;