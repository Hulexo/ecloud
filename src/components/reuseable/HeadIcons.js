import React from "react";
import { Link } from "react-router-dom";
import share from "../../assets/img/share.svg";

const HeadIcons = () => {
  return (
    <div className="row">
      <div className="col-lg-6">
        <h1 className="text-white kitchen-title">Kitchens</h1>
      </div>
      <div className="col-3 mt-2 helo">
        <div className="form-group has-search">
          <span className="fa fa-search form-control-feedback"></span>
          <input type="text" className="form-control" placeholder="Search" />
        </div>
      </div>
      <div className="col-3 mt-2">
        <div className="header-rightside">
          <div className="path">
            <Link to="#">
              <i className="far fa-envelope"></i>
            </Link>
          </div>
          <div className="iconbell">
            <Link to="#">
              <i className="fal fa-bell"></i>
            </Link>
          </div>

          <div className="exportdata">
            <img src={share} className="img-fluid" alt="" />
          </div>
          <div className="gktext">
            <p className="gktext">GK</p>
          </div>
          <div className="usernametogle">
            <select className="form-select" aria-label="">
              <option defaultValue>User name</option>
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

export default HeadIcons;
