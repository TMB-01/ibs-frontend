import React, { useState } from "react";
import {
  ButtonsBox, CloseButton,
  CommentsInput,
  CommentsInputBox,
  CommentsInputContainer, CommentsInputMainBox, CommentsInputTool,
  CommentsInputTools,
  CommentsInputUserImg, SubmitButton,
} from "./styles";
import UserImg from "../../assets/images/user.png";
//icons
import { ReactComponent as Code } from "../../assets/icons/input-tool-code.svg";
import { ReactComponent as Bold } from "../../assets/icons/input-tool-bold.svg";
import { ReactComponent as Italic } from "../../assets/icons/input-tool-italic.svg";
import { ReactComponent as Del } from "../../assets/icons/input-tool-strikethrough.svg";
import { ReactComponent as Ul } from "../../assets/icons/input-tool-list-ul.svg";
import { ReactComponent as Ol } from "../../assets/icons/input-tool-list-ol.svg";
import { ReactComponent as Quote } from "../../assets/icons/input-tool-quote-left.svg";
import { ReactComponent as Link } from "../../assets/icons/input-tool-link.svg";
import { ReactComponent as Eye } from "../../assets/icons/input-tool-eye.svg";
import { ReactComponent as Question } from "../../assets/icons/input-tool-question-circle.svg";
import { ReactComponent as Close } from "../../assets/icons/cancel.svg";
import { ReactComponent as Like } from "../../assets/icons/like-filled.svg";

import { CommentCardBodyAnswerLikeBox, CommentCardBodyAnswerOrLikeBox } from "./styles";

const ForumCommentsInput = ( { replyToComment, numberOfLikes } ) => {

  const [ isOpen, setIsOpen ] = useState( false );
  const [ inputValue, setInputValue ] = useState( "" );

  return (
    <>
      <CommentCardBodyAnswerLikeBox isOpen={ isOpen } replyToComment={ replyToComment }>
        <CommentCardBodyAnswerOrLikeBox onClick={ () => setIsOpen( true ) }>
          Ответить
        </CommentCardBodyAnswerOrLikeBox>
        <CommentCardBodyAnswerOrLikeBox like>
          Спасибо<Like/>{ numberOfLikes }
        </CommentCardBodyAnswerOrLikeBox>
      </CommentCardBodyAnswerLikeBox>

      <CommentsInputContainer isOpen={ isOpen } replyToComment={ replyToComment }>
        <CommentsInputUserImg replyToComment={ replyToComment }>
          <img src={ UserImg } alt="user"/>
        </CommentsInputUserImg>

        <CommentsInputMainBox replyToComment={ replyToComment }>
          <CommentsInputBox>
            <CommentsInput onClick={ () => setIsOpen( true ) }
                           minRows={ isOpen ? 2 : 1 }
                           placeholder={ "Ваш комментарий" }
                           onChange={ ( e ) => setInputValue( e.target.value ) }
                           value={ inputValue }
            />
            <CommentsInputTools isOpen={ isOpen }>
              <CommentsInputTool>
                <Code/>
              </CommentsInputTool>
              <CommentsInputTool>
                <Bold/>
              </CommentsInputTool>
              <CommentsInputTool>
                <Italic/>
              </CommentsInputTool>
              <CommentsInputTool>
                <Del/>
              </CommentsInputTool>
              <CommentsInputTool>
                <Ul/>
              </CommentsInputTool>
              <CommentsInputTool>
                <Ol/>
              </CommentsInputTool>
              <CommentsInputTool>
                <Quote/>
              </CommentsInputTool>
              <CommentsInputTool>
                <Link/>
              </CommentsInputTool>
              <CommentsInputTool>
                <Eye/>
              </CommentsInputTool>
              <CommentsInputTool>
                <Question/>
              </CommentsInputTool>
            </CommentsInputTools>
          </CommentsInputBox>
          <ButtonsBox isOpen={ isOpen }>
            <SubmitButton enabled={ inputValue }>
              ОТПРАВИТЬ
            </SubmitButton>
            <CloseButton onClick={ () => setIsOpen( false ) }>
              <Close/>
            </CloseButton>
          </ButtonsBox>
        </CommentsInputMainBox>

      </CommentsInputContainer>
    </>
  );
};

export default ForumCommentsInput;