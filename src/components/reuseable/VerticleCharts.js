import React from "react";
import { Link } from "react-router-dom";
import CDL from "../../assets/img/CDL.svg";
import CB from "../../assets/img/CB.svg";

import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";

const VerticleCharts = () => {
  return (
    <>
      <div className="orders-revnue">
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
          <div className="mapss mt-2">
            <Charts />
          </div>
        </div>
      </div>
    </>
  );
};
export const Charts = () => {
  const options = {
    title: {
      text: "",
    },
    chart: {
      events: {},
      backgroundColor: "transparent",
      height: "80%",
    },
    xAxis: {
      categories: ["A", "B", "C"],
    },
    series: [
      { data: [{ y: 10 }, { y: 20 }, { y: 30 }], type: "column" },
      { data: [{ y: 20 }, { y: 10 }, { y: 10 }], type: "column" },
    ],
  };
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};
export default VerticleCharts;
