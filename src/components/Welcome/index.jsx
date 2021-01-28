import React from "react";

//styles
import {
  WelcomeInner,
  WelcomeWrapper,
  WelcomeHeading,
  WelcomeContent,
  WelcomeParagraph,
  WelcomeImage,
  WelcomeAuthor,
} from "./styles";


const Welcome = () => {
  return (
    <WelcomeWrapper>
      <WelcomeInner>
        <WelcomeContent>
          <WelcomeHeading>Добро пожаловать</WelcomeHeading>
          <WelcomeParagraph>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro rem accusamus ut est quisquam saepe quaerat molestiae eum totam excepturi unde optio nesciunt expedita, fugit modi at labore suscipit mollitia similique necessitatibus alias reprehenderit iure repellendus. Dignissimos eligendi porro nihil.
          </WelcomeParagraph>
        </WelcomeContent>
        <WelcomeImage>
          <WelcomeAuthor src="https://ba.uz/wp-content/themes/landing/images/bobir.png" />
        </WelcomeImage>
      </WelcomeInner>
    </WelcomeWrapper>
  );
};

export default Welcome;