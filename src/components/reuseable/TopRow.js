import React from "react";
import ChartZoom from "../../assets/img/ChartZoom.svg";

const TopRow = () => {
  return (
    <div className="row mt-4">
      <div className="col helo">
        <select className="form-select border-0" aria-label="">
          <option selected>Cancel Orders</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
      <div className="col helo">
        <select className="form-select border-0" aria-label="">
          <option selected>Platform</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
      <div className="col helo">
        <select className="form-select" aria-label="">
          <option defaultValue>Tags</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
      <div className="col">
        <div className="datepick">
          <input type="date" name="dateofbirth" id="dateofbirth" />
        </div>
      </div>
      <div className="col-lg-5">
        <div className="chartzoom-img">
          <img src={ChartZoom} className="img-fluid" alt="" />
        </div>
      </div>
    </div>
  );
};

export default TopRow;
