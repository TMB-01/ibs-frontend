import React from "react";
import ToggleImg from "../../assets/images/menu.png";

const Toggle = (props) => {
  return (
    <>
      {/* eslint-disable-next-line react/prop-types */}
      <img
        src={ToggleImg}
        onClick={props.click}
        style={{ width: 30, marginLeft: 30 }}
      />
    </>
  );
};

export default Toggle;
