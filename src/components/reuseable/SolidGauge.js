/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import highchartsMore from "highcharts/highcharts-more";
import highchartsSolidGauge from "highcharts/modules/solid-gauge";
highchartsMore(Highcharts);
highchartsSolidGauge(Highcharts);

const SolidGauge = () => {
  return (
    <>
      <div className="progress-circle text-center">
        <GuageChart />
      </div>
    </>
  );
};

const GuageChart = ({ lavel }) => {
  let leftValue;
  let rightValue;
  let firstColor;
  let firstRange;
  let secondRange;
  // eslint-disable-next-line no-unused-expressions
  lavel === "csatScore"
    ? ((leftValue = -100), (rightValue = `+${100}`))
    : ((leftValue = "1%"), (rightValue = "100%"));
  // eslint-disable-next-line no-unused-expressions
  lavel === "csatScore"
    ? ((firstColor = "#FACF55"), (firstRange = 40), (secondRange = 80))
    : ((firstColor = "#1665D8"), (firstRange = 70), (secondRange = 75));

  const options = {
    chart: {
      type: "gauge",
      plotBackgroundColor: false,
      plotBackgroundImage: false,
      plotBorderWidth: 0,
      plotShadow: false,
      backgroundColor: "transparent",
      height: 200,
      width: 400,
    },
    credits: {
      enabled: false,
    },

    title: {
      text: "",
    },

    pane: {
      startAngle: -90,
      endAngle: 90,
      background: null,
    },

    plotOptions: {
      gauge: {
        dataLabels: {
          enabled: false,
        },
        pivot: {
          radius: 10,
          borderWidth: 0,
          borderColor: "#9EA0A5",
          backgroundColor: {
            linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },

            stops: [[0, "#9EA0A5"]],
          },
        },
      },
    },

    yAxis: {
      labels: {
        enabled: true,
        x: 35,
        y: -10,
      },
      tickPositions: [],
      minorTickLength: 0,
      min: 0,
      max: 70,
      plotBands: [
        {
          from: 0,
          to: firstRange,
          color: firstColor, // blue or red(csat)
          thickness: "10%",
        },
      ],
    },

    series: [
      {
        enableMouseTracking: false,
        data: [
          {
            y: 40,
            dial: {
              radius: "140%",
              backgroundColor: "white",
              baseWidth: 7,
              baseLength: "55%",
              rearLength: 0,
            },
          },
          {
            y: 40,
            dial: {
              topWidth: 10,
              radius: "105%",
              baseWidth: 1,
              backgroundColor: "grey",
              baseLength: "100%",
              rearLength: 0,
              borderRadius: 90,
            },
          },
        ],
      },
    ],
  };
  return (
    <div style={{ paddingTop: "40px" }}>
      <HighchartsReact highcharts={Highcharts} options={options} />
      <h2 style={{ color: "grey", marginTop: "-40px", marginBottom: "30px" }}>
        Avg. Response time
      </h2>
    </div>
  );
};
GuageChart.propTypes = {
  target: PropTypes.number,
  lavel: PropTypes.string,
};
GuageChart.defaultProps = {
  target: 40000,
  lavel: "csatScore",
};

export default SolidGauge;
