import React from "react";
import { Link } from "react-router-dom";
import DarkMap from "./DarkMap";

const KetchinDrop = () => {
  return (
    <div className="row">
      <div className="col-lg-12">
        <div className="mapbox  panelhover">
          <div className="platform-performance">
            <div className="dropdown helo">
              <select className="form-select" aria-label="">
                <option defaultValue>Kitchens</option>
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
          <DarkMap />
        </div>
      </div>
    </div>
  );
};

export default KetchinDrop;
