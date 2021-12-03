import React from "react";
import LinesChart from "./LinesChart";
import CircleCharts from "./CircleCharts";
import PrograssCharts from "./PrograssCharts";
import VerticleCharts from "./VerticleCharts";

const ChartRow = () => {
  return (
    <div className="row">
      <div className="col-lg-3 panelhover">
        <LinesChart />
      </div>
      <div className="col-lg-3 panelhover">
        <CircleCharts />
      </div>
      <div className="col-lg-3 panelhover">
        <PrograssCharts />
      </div>
      <div className="col-lg-3 panelhover">
        <VerticleCharts />
      </div>
    </div>
  );
};

export default ChartRow;
