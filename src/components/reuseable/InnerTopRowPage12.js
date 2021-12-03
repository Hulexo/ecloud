import React from "react";
import { Helo, DatePeker, ChatZoom, DayIcon } from "./Helo";
// import Zoom from "../../assets/img/ChartZoom.svg";

const InnerTopRowPage12 = () => {
  return (
    <div class="row">
      <div class="col-12 mt-3 g-2">
        <div class="chartszoom">
          <div class="row">
            <div className="col helo">
              <Helo />
            </div>
            <div className="col helo">
              <Helo />
            </div>
            <DatePeker />
            <ChatZoom />
            <DayIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnerTopRowPage12;
