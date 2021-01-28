import React from "react";
import {
  TestsCardData,
  TestsCardIcon,
  TestsCardName,
  TestsCardStyled,
  TestsCardTests,
  TestsCardTestsBox,
} from "./styles";

const TestsCard = ( { icon, name, levels } ) => {
  return (
    <TestsCardStyled>
      <TestsCardIcon>
        <img width="80"
             src={ icon }
             alt={ name }/>
      </TestsCardIcon>
      <TestsCardData>
        <TestsCardName>{ name }</TestsCardName>
        <TestsCardTestsBox>
          { levels.map( ( { level } ) =>
            <TestsCardTests>{ level }</TestsCardTests>,
          ) }
        </TestsCardTestsBox>
      </TestsCardData>

    </TestsCardStyled>
  );
};

export default TestsCard;