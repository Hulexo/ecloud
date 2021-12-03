import React from "react";
import { Link } from "react-router-dom";
import Path from "../../assets/img/Path.png";
import Add1 from "../../assets/img/Add1.png";
import CheckMark from "../../assets/img/CheckMark.svg";

const Branch1 = () => {
  return (
    <div className="row menuorder-bg mt-2">
      <div className="col-12 ">
        <p className="py-1">Branch 1</p>
        <div className="row">
          <div className="col-lg-1">
            <select className="form-select" aria-label="Default select example">
              <option defaultValue>UAE</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className="col-11">
            <div className="user-address">
              <input
                className="form-control"
                type="text"
                placeholder="Address"
                aria-label="default input example"
              />
              <Link to="#">
                <img src={Path} alt="" />
              </Link>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-lg-2">
            <div className="col">
              <input
                className="form-control"
                type="text"
                placeholder="mobile"
                aria-label="default input example"
              />
            </div>
          </div>
          <div className="col-lg-1">
            <select className="form-select" aria-label="Default select example">
              <option defaultValue>UAE</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className="col-lg-1">
            <select className="form-select" aria-label="Default select example">
              <option defaultValue>UAE</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className="col-lg-2 d-inline-flex align-items-center">
            <img src={CheckMark} width="20px" alt="" />
            <p className="textpcolor px-2">View / Hide Name</p>
          </div>
          <div className="col-lg-6 d-inline-flex align-items-center">
            <div className="col-4  helo">
              <div className="form-group has-search position-relative">
                <img src={Add1} className="position-absolute" alt="" />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Add Categories"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Branch1;
