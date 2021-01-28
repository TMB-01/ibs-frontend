import React from "react";
import {
  WebinarCardBox,
  WebinarPoster,
  WebinarData,
  WebinarDate,
  WebinarTitle,
  WebinarAuthor,
  WebinarIcons,
  WebinarIconBox,
  WebinarIcon,
  WebinarIconNumber,
  TimeTillWebinar,
  PosterCover,
} from "./styles";

//Icons
import { ReactComponent as Group } from "../../assets/icons/group.svg";
import { ReactComponent as Comments } from "../../assets/icons/comments.svg";
import { ReactComponent as Like } from "../../assets/icons/like-filled.svg";

const WebinarCard = (
  {
    mainFirstCard,
    fullWidth,
    posterImg,
    tillWebinar,
    date,
    title,
    author,
    numberOfPeople,
    numberOfComments,
    numberOfLikes,
  },
) => {
  return (
    <WebinarCardBox 
      mainFirstCard={ mainFirstCard } 
      fullWidth={ fullWidth } 
      to={"/webinars/1"}
    >
      <WebinarPoster mainFirstCard={ mainFirstCard }>
        <img
          src={ posterImg }
          alt={ title }/>
        <TimeTillWebinar className="till">
          <span>Через </span>{ tillWebinar }
        </TimeTillWebinar>
        <PosterCover/>
      </WebinarPoster>
      <WebinarData mainFirstCard={ mainFirstCard }>
        <WebinarDate>
          { date }
        </WebinarDate>
        <WebinarTitle>
          { title }
        </WebinarTitle>
        <WebinarAuthor>
          { author }
        </WebinarAuthor>
        <WebinarIcons>
          <WebinarIconBox>
            <WebinarIcon><Group/></WebinarIcon>
            <WebinarIconNumber>
              { numberOfPeople }
            </WebinarIconNumber>
          </WebinarIconBox>
          <WebinarIconBox>
            <WebinarIcon><Comments/></WebinarIcon>
            <WebinarIconNumber>
              { numberOfComments }
            </WebinarIconNumber>
          </WebinarIconBox>
          <WebinarIconBox>
            <WebinarIcon><Like/></WebinarIcon>
            <WebinarIconNumber>
              { numberOfLikes }
            </WebinarIconNumber>
          </WebinarIconBox>
        </WebinarIcons>
      </WebinarData>
    </WebinarCardBox>
  );
};

export default WebinarCard;