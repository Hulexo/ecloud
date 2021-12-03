import React from "react";
import { Link } from "react-router-dom";
import { Charts } from "./PrograssCharts";
import { Chart } from "./CircleCharts";

const ItemRevenuWithChart = () => {
  return (
    <div className="item-revenu">
      <div className="platform-performance">
        <div className="dropdown helo">
          <select className="form-select" aria-label="">
            <option defaultValue>offer in orders</option>
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
      <div className="revenu-price">
        <h1 className="py-2">
          62% <span>From Total Orders</span>
        </h1>
      </div>
      <ul className="order-progress row">
        <div className="col-8">
          <Charts />
        </div>
        <div className="col-4">
          <Chart />
        </div>
      </ul>
    </div>
  );
};

export default ItemRevenuWithChart;
