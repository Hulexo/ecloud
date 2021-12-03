import React from "react";
import { Link } from "react-router-dom";
import AnimatedGaugeMtter from "./AnimatedGaugeMtter";
import PerformusTable from "./PerformusTable";

const PlatformPerformanceMetter = () => {
  return (
    <>
      <div className="platform-performance ">
        <div className="dropdown helo">
          <select className="form-select" aria-label="">
            <option defaultValue>Kitchens Performence</option>
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
      <div className="performnce-body">
        <AnimatedGaugeMtter />
        <h2
          style={{ color: "gray", textAlign: "center", marginBottom: "10px" }}
        >
          Avg. response time
        </h2>
        <PerformusTable />
      </div>
    </>
  );
};

export default PlatformPerformanceMetter;
