import React, { useState } from "react";
import {
  CoursesFormStyled,
  FormBox,
  Input,
  LeftData,
  PhoneNumberInput,
  RightData,
  SubmitButton,
  UnderForm,
} from "./styles";

const CoursesForm = () => {
  const [ form, setForm ] = useState( {} );

  const gradients = [
    [ '#9dd777', '#cd4640', '#7e9f4a' ],
    [ '#90c26f', '#5eafb4', '#7e9f4a' ],
    [ '#beadbd', '#cfafaf', '#ffbf2b' ],
    [ '#cfafc4', '#adbeb0' ],
    [ '#d6a1a1', '#ffbf2b' ],
  ];

  return (
    <CoursesFormStyled gradients={ gradients } // required
                       property="background"
                       duration={ 3000 }
                       angle="45deg">
      <LeftData>
        <h1>
          Поможем определиться <br/>
          с профессией
        </h1>
        <p>
          Оставьте контактные данные, и мы ответим на&nbsp;ваши вопросы и&nbsp;поможем найти подходящий курс.
        </p>
      </LeftData>
      <RightData>
        <FormBox onSubmit={ ( e ) => {
          e.preventDefault();
          setForm( { name: e.target.name.value, phoneNumber: e.target.phoneNumber.value } );
        } }>
          <Input placeholder={ "Имя" } name={ "name" } id={ "name" }/>
          <PhoneNumberInput format="+998 (##) ###-##-##" allowEmptyFormatting
                            mask="_" placeholder={ "PhoneNumber" }
                            name={ "phoneNumber" } id={ "phoneNumber" }/>
          <SubmitButton>
            Отправить
          </SubmitButton>

          <UnderForm>
            Отправляя заявку, вы даёте согласие на обработку своих персональных данных в соответствии с
            <a href=""> политикой конфиденциальности</a>.
          </UnderForm>
        </FormBox>
      </RightData>
    </CoursesFormStyled>

  );
};

export default CoursesForm;