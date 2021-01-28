import React, { useState } from "react";
import { AnswerBox, CommentCardFooterAnswersToggle } from "./styles";
import { ReactComponent as Plus } from "../../assets/icons/plus-circle-solid.svg";
import { ReactComponent as Minus } from "../../assets/icons/minus-circle-solid.svg";

const CommentCardAnswersToggle = ({children}) => {

  const [ isAnswersOpen, setIsAnswersOpen ] = useState( true );

  return (
    <>
      <CommentCardFooterAnswersToggle onClick={ () => setIsAnswersOpen( !isAnswersOpen ) }>
        {
          isAnswersOpen ? <><Minus/><span>Свернуть ветку</span></> :
            <><Plus/><span>Развернуть ветку</span></>
        }
      </CommentCardFooterAnswersToggle>
      <AnswerBox isOpen={isAnswersOpen}>
        {children}
      </AnswerBox>
    </>
  );
};

export default CommentCardAnswersToggle;