import React from "react";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const SplineChartLine = () => {
  return (
    <div className="live-orderchat">
      <Charts />
    </div>
  );
};
const Charts = () => {
  const options = {
    chart: {
      type: "spline",
      backgroundColor: "transparent",
    },
    title: {
      text: "",
    },
    series: [
      {
        data: [1, 2, 1, 4, 3, 6],
      },
      {
        data: [3, 3, 4, 5, 2, 1],
      },
      {
        data: [4, 1, 3, 5, 3, 2],
      },
      {
        data: [2, 1, 3, 3, 1, 6],
      },
    ],
  };
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};
export default SplineChartLine;
