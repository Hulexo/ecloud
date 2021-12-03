import React from "react";
import { Link } from "react-router-dom";
import Add1 from "../../assets/img/Add1.png";

const AddRow = () => {
  return (
    <div className="row">
      <div className="col">
        <div className="add-items mt-3">
          <Link to="#">
            <img src={Add1} width="60px" alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AddRow;
