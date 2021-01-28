import React, { useState } from "react";
import {
  BottomPopupStyled,
  ButtonPopup,
  CancelButton,
  ImgGadgets,
  TextsBox,
} from "./styles";
//img
import discount10 from "../../assets/images/discount10.png";
import discount20 from "../../assets/images/discount20.png";
import Girls from "../../assets/images/girls-text.png";
import NewComer from "../../assets/images/newcomer.png";

//icon
import { ReactComponent as CancelIcon } from "../../assets/icons/cancelSmall.svg";

const CourseBottomPopup = ( { setShow, popUpName } ) => {

  const [ isOpenToggle, setIsOpenToggle ] = useState( true );

  return (
    <BottomPopupStyled isOpen={ isOpenToggle } popUpName={ popUpName }>
      <span>
        <TextsBox>
          <h1>
            Lorem ipsum dolor sit amet.
          </h1>
          <div>
            <img src={ popUpName === "girls" ? Girls : popUpName === "new-comer" ? NewComer : "" }
                 alt="girls discount"/>
          </div>
        </TextsBox>
        <ImgGadgets src={ popUpName === "girls" ? discount10 : popUpName === "new-comer" ? discount20 : "" }
                    alt="gadgets"/>
        <ButtonPopup onClick={ () => setShow( true ) } popUpName={ popUpName }>Buy Course</ButtonPopup>
        <CancelButton onClick={ () =>
          setIsOpenToggle( !isOpenToggle )
        }>
          <CancelIcon/>
        </CancelButton>
      </span>
    </BottomPopupStyled>
  );
};

export default CourseBottomPopup;