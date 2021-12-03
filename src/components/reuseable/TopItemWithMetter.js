import React from "react";
import { Link } from "react-router-dom";
import AnimatedGaugeMtter from "./AnimatedGaugeMtter";

const TopItemWithMetter = () => {
  return (
    <div className="performnce-status">
      <div className="platform-performance">
        <div className="dropdown helo">
          <select className="form-select" aria-label="">
            <option defaultValue>Top Items</option>
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
      <div className="progress-circle text-center">
        <AnimatedGaugeMtter />
      </div>
      <div className="order-responsive">
        <ul>
          <li className="tabletext3">
            6.00 <span className="d-block">operators</span>
          </li>
          <li className="tabletext3">
            6.00 <span className="d-block">operators</span>
          </li>
          <li className="textpcolor3">
            6.00 <span className="d-block">operators</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopItemWithMetter;
