import React from "react";
import { Link } from "react-router-dom";
import downloadOff from "../../assets/img/downloadOff.svg";
import FullScreenOff from "../../assets/img/FullScreenOff.svg";

const TopImgCom = () => {
  return (
    <div className="downloadtag-icon">
      <Link to="#">
        <img src={downloadOff} alt="" />
      </Link>
      <Link to="#">
        <img src={FullScreenOff} alt="" />
      </Link>
    </div>
  );
};

export default TopImgCom;
