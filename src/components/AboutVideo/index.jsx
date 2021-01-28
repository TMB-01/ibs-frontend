import React from "react";
import { AboutVideo } from "./style";

const AboutVideoSection = () => {
  return (
    <AboutVideo>
      <iframe
        width="720"
        height="400"
        src="https://www.youtube.com/embed/f0c7pSCoZqE"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        className="youtube-video"
      />
    </AboutVideo>
  );
};

export default AboutVideoSection;
