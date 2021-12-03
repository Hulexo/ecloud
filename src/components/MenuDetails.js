import React from "react";
import { Link } from "react-router-dom";
import ManuCardDetail from "./ManuCardDetail";

const MenuDetails = () => {
  return (
    <>
      <div className="col-lg-9 mt-3">
        <div className="row justify-content-between">
          <div className="col-lg-4">
            <div className="privousorder">
              <input
                className="form-control"
                type="text"
                placeholder="Privious orders"
                aria-label="default input example"
              />
            </div>
          </div>
          <div className="col-lg-3 d-flex align-items-center">
            <div className="form-group has-search">
              <span className="fa fa-search form-control-feedback"></span>
              <input
                type="text"
                className="form-control border-0"
                placeholder="menu search"
              />
            </div>
            <div className="sharicon">
              <Link to="">
                <i className="fas fa-share fa-2x"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className="menu-catageri">
          <div className="row">
            <ManuCardDetail />
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuDetails;
