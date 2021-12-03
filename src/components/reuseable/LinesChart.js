import React from "react";
import { Link } from "react-router-dom";
import DG from "../../assets/img/DG.svg";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";

const LinesChart = () => {
  return (
    <>
      <div className=" Revenue">
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
          <p className="tabletext2">
            2% <img src={DG} width="10px" alt="" />
          </p>
        </div>
        <p className="revenu-report">Compare with last months</p>
        <div
          className="revenu-bitmap text-center"
          style={{ height: 150 + "px", width: 200 + "px" }}
        >
          <Chart />
        </div>
      </div>
    </>
  );
};
const Chart = () => {
  const options = {
    chart: {
      hight: 100,
      backgroundColor: "transparent",
      margin: [0, 0, 0, 0],
      height: "70%",
    },
    title: {
      text: "",
    },
    series: [
      {
        data: Array.from({ length: 5 }, () => Math.floor(Math.random() * 50)),
        yAxis: 1,
      },
    ],
    yAxis: [
      {
        labels: {
          enabled: false,
        },
        title: {
          text: null,
        },
      },
      {
        labels: {
          enabled: false,
        },
        title: {
          text: null,
        },
      },
      {
        labels: {
          enabled: false,
        },
        title: {
          text: null,
        },
      },
    ],
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};
export default LinesChart;
