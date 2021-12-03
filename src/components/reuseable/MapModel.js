import React from "react";
import { Link } from "react-router-dom";
import GoogleMaps from "./GoogleMaps";

const MapModel = () => {
  return (
    <div className="container-fluid company-catageri  popup-page">
      <div className="row justify-content-center">
        <div className="col-lg-4">
          <div className="map-popup">
            <div className="row">
              <div className="col-12">
                <div name="workmap">
                  <GoogleMaps />
                </div>
              </div>
            </div>
            <div className="row mt-3 mb-3">
              <div className="col-12">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Google Map Search"
                  aria-label="default input example"
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-12">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Address"
                  aria-label="default input example"
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-12">
                <input
                  className="form-control"
                  type="text"
                  placeholder="latitude"
                  aria-label="default input example"
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-12">
                <input
                  className="form-control"
                  type="text"
                  placeholder="longitude"
                  aria-label="default input example"
                />
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-12 text-center">
                <div className="checkmark">
                  <Link to="#">
                    <i className="fa fa-check"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapModel;
