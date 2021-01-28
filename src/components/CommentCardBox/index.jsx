import React from "react";
import {
  CommentCardBody,
  CommentCardBoxStyled,
  CommentCardDate,
  CommentCardDot,
  CommentCardFooter,
  CommentCardHeader,
  CommentCardMenuButton,
  CommentCardParagraph,
  CommentCardUserImg,
  CommentCardUserName,
} from "./styles";
import ForumCommentsInput from "../../components/ForumCommentsInput";

//icons
import { ReactComponent as MenuBar } from "../../assets/icons/three-dots.svg";
import CommentCardAnswersToggle from "../CommentCardAnswersToggle";

const CommentCardBox = (
  {
    userImg,
    userName,
    date,
    texts,
    numberOfLikes,
    answers,
  },
) => {
  return (
    <CommentCardBoxStyled>
      <CommentCardHeader>
        <CommentCardUserImg>
          <img
            src={ userImg }
            alt="user"
          />
        </CommentCardUserImg>
        <CommentCardUserName>
          { userName }
        </CommentCardUserName>
        <CommentCardDate>
          <CommentCardDot>•</CommentCardDot>
          { date }
        </CommentCardDate>
        <CommentCardMenuButton>
          <MenuBar/>
        </CommentCardMenuButton>
      </CommentCardHeader>

      <CommentCardBody>
        <CommentCardParagraph>
          { texts.map( ( text ) =>
            <>{ text }<br/></>,
          ) }
          {/*Адаптив под мобильные устройства!<br/>*/ }
          {/*- Комментарии при наборе текста вместо пробела копирует введённые значения ранее.<br/>*/ }
          {/*- Многие страницы не адаптированы вообще например форма заполнения рюземе. Это самое что кидается мне в глаза*/ }
          {/*остальное так по-мелочи. <br/>*/ }
        </CommentCardParagraph>
        {/*<CommentCardBodyAnswerLikeBox>*/ }
        {/*  <CommentCardBodyAnswerOrLikeBox>*/ }
        {/*    Ответить*/ }
        {/*  </CommentCardBodyAnswerOrLikeBox>*/ }
        {/*  <CommentCardBodyAnswerOrLikeBox like>*/ }
        {/*    Спасибо<Like/>2*/ }
        {/*  </CommentCardBodyAnswerOrLikeBox>*/ }
        {/*</CommentCardBodyAnswerLikeBox>*/ }

        <ForumCommentsInput replyToComment numberOfLikes={ numberOfLikes }/>
      </CommentCardBody>
      { answers.length>0 ?
        <CommentCardFooter>
          <CommentCardAnswersToggle>
            { answers.map( (
              {
                userImg,
                userName,
                date,
                texts,
                numberOfLikes,
                answers,
              } ) =>
              <CommentCardBox userImg={ userImg }
                              userName={ userName }
                              date={ date }
                              texts={ texts }
                              numberOfLikes={ numberOfLikes }
                              answers={ answers }
              />,
            ) }
          </CommentCardAnswersToggle>
          {/*<CommentCardBox/>*/ }
        </CommentCardFooter>:""
      }

    </CommentCardBoxStyled>
  );
};

export default CommentCardBox;