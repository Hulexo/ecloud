import React from "react";
import { Link } from "react-router-dom";

const PrograssCharts = () => {
  return (
    <>
      <div className="offers-revenus">
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
          <p className="textpcolor">from Total</p>
        </div>
        <Charts />
      </div>
    </>
  );
};
export const Charts = () => {
  return (
    <div className="revenu-bar">
      <span className="textpcolor2">
        56% <span>Combo meals</span>
      </span>
      <div className="progress">
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: "25%" }}
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
      <span className="textpcolor3">
        25% <span>By1Get1</span>
      </span>
      <div className="progress">
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: "75%" }}
          aria-valuenow="75"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
      <span className="textpcolor4">
        19% <span>Discounted</span>
      </span>
      <div className="progress">
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: "100%" }}
          aria-valuenow="90"
          aria-valuemin="0"
          aria-valuemax="90"
        ></div>
      </div>
    </div>
  );
};
export default PrograssCharts;
