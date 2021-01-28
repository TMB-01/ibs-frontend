import React, { useState } from "react";
import {
  AfterSubmission,
  BlogBottomPopupStyled, CancelButton,
  DataRight,
  EmailBox,
  EmailInput,
  EmailWrapper, PolicyPopup,
  PopupIcon,
  SendEmail,
  Texts,
} from "./styles";

//icons
import { ReactComponent as GiftIcon } from "../../assets/icons/gift.svg";
import { ReactComponent as SendIcon } from "../../assets/icons/sendEmail.svg";
import { ReactComponent as CancelIcon } from "../../assets/icons/cancelSmall.svg";

const BlogBottomPopup = () => {

  const [ isOpen, setIsOpen ] = useState( true );
  const [ submitEmail, setSubmitEmail ] = useState( "" );

  return (
    <BlogBottomPopupStyled submitedEmail={ submitEmail } isOpen={ isOpen }>
      <PopupIcon submited={ submitEmail }>
        <GiftIcon/>
      </PopupIcon>
      <DataRight submited={ submitEmail }>
        <Texts>
          <h1>
            Дарим курс за подписку!
          </h1>
          <p>
            Подпишитесь на нашу рассылку, и мы пришлем вам курс “Основы программирования”
          </p>
        </Texts>

        <EmailWrapper>
          <EmailBox onSubmit={ ( e ) => {
            e.preventDefault();
            setSubmitEmail( e.target.email.value );
          } }>
            <EmailInput id={ "email" } name={ "email" } type={ "email" } placeholder={ "Ваш e-mail" }/>
            <SendEmail>
              <SendIcon/>
            </SendEmail>
          </EmailBox>
          <PolicyPopup>
            Политика конфиденциальности
          </PolicyPopup>
        </EmailWrapper>
      </DataRight>

      <AfterSubmission submited={ submitEmail }>
        <h1>
          Мы добавили вам курс!
        </h1>
        <p>
          Зайдите в систему и вы сразу сможете приступить к обучению.
        </p>
      </AfterSubmission>
      <CancelButton onClick={ () => setIsOpen( !isOpen ) }>
        <CancelIcon/>
      </CancelButton>
    </BlogBottomPopupStyled>
  );
};

export default BlogBottomPopup;