import React from "react";
import {
  AnswersBox, 
  AnswerWaiters,
  CardLeftData,
  CardRightData,
  Date,
  Description,
  ForumCardStyled,
  Icon,
  Tag,
  Tags,
  Title, 
  UserAnsweredTime, 
  UserImg,
  UserInfo, 
  UserName, 
  UserNameAndAnsweredTime,
} from "./styles";

//icons
import { ReactComponent as Pin } from "../../assets/icons/pin.svg";
import { ReactComponent as Hashtag } from "../../assets/icons/hashtag-solid.svg";

const ForumCard = (
  {
    title,
    hashtags,
    date,
    img,
    fullName,
    answeredTime,
    answers,
    answerWaiters,
  },
) => {
  return (
    <ForumCardStyled to={"/forums/1"}>
      <CardLeftData>
        <Title>
          <Icon pin>
            <Pin pin/>
          </Icon>
          { title }
        </Title>
        <Description>
          <Tags>
            <Icon>
              <Hashtag/>
            </Icon>

            {
              hashtags.map( ( hashtag, index ) =>
                <React.Fragment key={index}>
                  <Tag>
                    { hashtag }
                  </Tag>
                  { index !== hashtags.length - 1 && <small>,</small> }
                </React.Fragment>,
              )
            }
          </Tags>
          <Date>
            { date }
          </Date>
        </Description>
      </CardLeftData>
      <CardRightData>
        <UserInfo>
          <UserImg>
            <img src={ img } alt=""/>
          </UserImg>
          <UserNameAndAnsweredTime>
            <UserName>
              { fullName }
            </UserName>
            <UserAnsweredTime>
              { answeredTime }
            </UserAnsweredTime>
          </UserNameAndAnsweredTime>
        </UserInfo>
        <AnswersBox>
          <p>
            { answers }
          </p>
          <p>
            Ответов
          </p>
        </AnswersBox>
        <AnswerWaiters>
          { answerWaiters }
          <p>
            Ждут ответа
          </p>
        </AnswerWaiters>
      </CardRightData>
    </ForumCardStyled>
  );
};

export default ForumCard;