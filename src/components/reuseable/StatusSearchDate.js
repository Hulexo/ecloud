import React from "react";
// import Tags from "../reuseable/Tags";

const StatusSearchDate = () => {
  return (
    <div>
      <div className="row mt-3">
        <div className="col-lg-6 helo">
          <select className="form-select" aria-label="Default select example">
            <option selected>Status</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div className="col-lg-3 helo">
          <div className="form-group has-search">
            <span className="fa fa-search form-control-feedback"></span>
            <input type="text" className="form-control" placeholder="Search" />
          </div>
        </div>
        <div className="col-lg-3 helo">
          <div className="datepick">
            <input type="date" name="Date" id="dateofbirth" />
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-lg-2">
          <div className="tags helo">
            <select className="form-select" aria-label="">
              <option selected>Tags</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>
        <div className="col-lg-2">
          <div className="tags helo">
            <select className="form-select" aria-label="">
              <option selected>Tags</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatusSearchDate;
