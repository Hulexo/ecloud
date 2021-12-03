import React from "react";
import { Link } from "react-router-dom";
import SplineChartLine from "./SplineChartLine";

const SplineChart = () => {
  return (
    <div className="live-orders">
      <div className="platform-performance">
        <div className="dropdown helo">
          <select className="form-select" aria-label="">
            <option defaultValue>Platform Performence</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div className="menu-icon">
          <Link to="#">
            <i className="fal fa-ellipsis-h"></i>
          </Link>
        </div>
      </div>
      <SplineChartLine />
    </div>
  );
};

export default SplineChart;
