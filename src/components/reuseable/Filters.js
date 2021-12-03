import React from "react";
import Status from "./statusManu";
import Chartzoom from "../../assets/img/ChartZoom.svg";

const Filters = () => {
  return (
    <div className="chartszoom">
      <div className="row">
        <div className="col-2 helo">
          <Status />
        </div>
        <div className="col-3">
          <div className="datepick panelhover">
            <input type="date" name="dateofbirth" id="dateofbirth" />
          </div>
        </div>
        <div className="col-5">
          <div className="chartzoom-img">
            <img src={Chartzoom} className="img-fluid" alt="" />
          </div>
        </div>
        <div className="col-2">
          <div className="chartzoom-option">
            <span className="">Y</span>
            <span className="">M</span>
            <span className="">W</span>
            <span className="">H</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
