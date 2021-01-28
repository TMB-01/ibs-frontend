import React from "react";
import { RecCardAuthor, RecCardBox, RecCardData, RecCardDate, RecCardPoster, RecCardTitle } from "./styles";

const WebinarsRecCard = ( { poster, date, title, author } ) => {
  return (
    <RecCardBox>
      <RecCardPoster>
        <img src={ poster }
             alt=""/>
      </RecCardPoster>
      <RecCardData>

        <RecCardDate>{date}</RecCardDate>
        <RecCardTitle>{title}</RecCardTitle>
        <RecCardAuthor>{author}</RecCardAuthor>
      </RecCardData>

    </RecCardBox>
  );
};

export default WebinarsRecCard;