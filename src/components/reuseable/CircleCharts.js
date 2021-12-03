import React from "react";
import { Link } from "react-router-dom";
import CDL from "../../assets/img/CDL.svg";
import CB from "../../assets/img/CB.svg";
import CY from "../../assets/img/CY.svg";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import highchartsMore from "highcharts/highcharts-more";
import highchartsSolidGauge from "highcharts/modules/solid-gauge";
highchartsMore(Highcharts);
highchartsSolidGauge(Highcharts);

const CircleCharts = () => {
  return (
    <>
      <div className="item-revenu">
        <div className="platform-performance">
          <div className="dropdown helo">
            <select className="form-select" aria-label="">
              <option defaultValue>Revenue</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className="menu-icon">
            <Link to="">
              <i className="fal fa-ellipsis-h"></i>
            </Link>
          </div>
        </div>
        <div className="revenu-price">
          <h1>
            78,254 <span className="aed"> AED</span>
          </h1>
        </div>
        <ul>
          <div className="revenu-details">
            <li className="textpcolor2">
              56%
              <span>
                <img src={CDL} width="6px" alt="" />
              </span>
              <span>Burger</span>
            </li>
            <li className="textpcolor4">
              25%
              <span>
                <img src={CB} width="6px" alt="" />
              </span>
              <span>Pizza</span>
            </li>
            <li className="textpcolor3">
              19%
              <span>
                <img src={CY} width="6px" alt="" />
              </span>
              <span>Shaw</span>
            </li>

            <li>Since Yesterday</li>
          </div>

          <div>
            <Chart />
          </div>
        </ul>
      </div>
    </>
  );
};
const getConfig = (data) => {
  return {
    chart: {
      type: "solidgauge",
      height: "110%",
      backgroundColor: "transparent",
      margin: [0, 0, 0, 0],
      animation: true,
      width: 100,
    },

    title: {
      text: null,
    },

    tooltip: {
      borderWidth: 0,
      backgroundColor: "none",
      shadow: false,
      useHTML: true,
      followPointer: true,
      animation: false,
      hideDelay: 100,
    },

    pane: {
      startAngle: 0,
      endAngle: 360,
      background: [
        {
          outerRadius: "112%",
          innerRadius: "88%",
          backgroundColor: "lightgrey",
          borderWidth: 0,
        },
        {
          outerRadius: "87%",
          innerRadius: "63%",
          backgroundColor: "lightgrey",
          borderWidth: 0,
        },
        {
          outerRadius: "62%",
          innerRadius: "38%",
          backgroundColor: "lightgrey",
          borderWidth: 0,
        },
      ],
    },

    yAxis: {
      min: 0,
      max: 100,
      lineWidth: 0,
      tickPositions: [],
    },

    plotOptions: {
      solidgauge: {
        dataLabels: {
          enabled: false,
        },
        linecap: "square",
        stickyTracking: false,
        rounded: false,
      },
    },

    series: data,
  };
};
export const Chart = () => {
  const data1 = [
    {
      name: "One",
      data: [
        {
          color: "red",
          radius: "112%",
          innerRadius: "88%",
          y: 79,
        },
      ],
    },
    {
      name: "Two",
      data: [
        {
          color: "blue",
          radius: "87%",
          innerRadius: "63%",
          y: 74,
        },
      ],
    },
    {
      name: "Three",
      data: [
        {
          color: "green",
          radius: "62%",
          innerRadius: "38%",
          y: 52,
        },
      ],
    },
  ];

  const data2 = [
    {
      name: "One",
      data: [
        {
          color: "red",
          radius: "112%",
          innerRadius: "88%",
          y: 12,
        },
      ],
    },
    {
      name: "Two",
      data: [
        {
          color: "blue",
          radius: "87%",
          innerRadius: "63%",
          y: 33,
        },
      ],
    },
    {
      name: "Three",
      data: [
        {
          color: "green",
          radius: "62%",
          innerRadius: "38%",
          y: 89,
        },
      ],
    },
  ];
  const [data, setData] = React.useState(data1);
  const chartRef = React.useRef();
  React.useEffect(() => {
    window.setTimeout(() => {
      setData(data2);
    }, 2000);
  });
  return (
    <div className="App">
      <HighchartsReact
        ref={chartRef}
        highcharts={Highcharts}
        options={getConfig(data)}
      />
    </div>
  );
};

export default CircleCharts;
