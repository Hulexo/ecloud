/* eslint-disable array-callback-return */
import React from "react";
import { Link } from "react-router-dom";
import Prograss from "./PrograssBarCom";

const PrograssBars = () => {
  return (
    <div className="row">
      <div className="col-12">
        <div className="top-menuorders  panelhover">
          <div className="platform-performance">
            <div className="dropdown helo">
              <select className="form-select" aria-label="">
                <option selected>Platform Performence</option>
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
          <Prograss />
        </div>
      </div>
    </div>
  );
};

export default PrograssBars;
