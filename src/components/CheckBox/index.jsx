import React, { useState } from "react";
import { CheckBoxStyled, Label } from "./styles";

const CheckBox = ( { name, text } ) => {

  const [ checked, setChecked ] = useState( true );

  return (
    <CheckBoxStyled>
      <input type="checkbox" name={ name } id={ name } value={ checked }/>
      <Label htmlFor={ name } checked={ checked } onClick={ () => setChecked( !checked ) }>
        { text }
      </Label>
    </CheckBoxStyled>
  );
};

export default CheckBox;