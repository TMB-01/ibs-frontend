import React from "react";
import { RecWebinarsBox, VideoBox, VideoBoxCover, VideoBoxCoverData, VideoSectionBox } from "./styles";

//icons
import { ReactComponent as Timer } from "../../assets/icons/timer.svg";
import WebinarsRecCard from "../WebinarsRecCard";

const WebinarsItemVideoSection = ( { webinarCardInfo ,time}) => {

  return (
    <VideoSectionBox>
      <VideoBox>
        <img src="https://d2xzmw6cctk25h.cloudfront.net/event/3143/image/medium-fb1564d96f6faeaf8d566821e0eb353d.png"
             alt=""/>
        <VideoBoxCover>
          <VideoBoxCoverData>
            <Timer/>
            <p>Мероприятие начнется</p>
            <h1>{ time }</h1>
            <button>Записаться</button>
          </VideoBoxCoverData>

        </VideoBoxCover>
      </VideoBox>
      <RecWebinarsBox>
        <h2>Рекомендуемые</h2>
        { webinarCardInfo.map( ( { poster, date, title, author } ) =>
          <WebinarsRecCard poster={ poster } date={ date } title={ title } author={ author }/>,
        ) }
      </RecWebinarsBox>

    </VideoSectionBox>
  );
};

export default WebinarsItemVideoSection;