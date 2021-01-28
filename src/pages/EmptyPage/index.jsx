import React from "react";
import { EmptyPageWrapper, PageImg, PageText } from "./styles";

//img
import EmptyPageImg from "../../assets/images/emptyPage.gif";

const EmptyPage = ( { pageName } ) => {
  return (
    <EmptyPageWrapper>
      <PageImg src={ EmptyPageImg }/>
      <PageText>There is Not any<br/><span>{ pageName }</span> yet</PageText>
    </EmptyPageWrapper>
  );
};

export default EmptyPage;