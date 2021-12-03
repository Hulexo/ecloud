import React from "react";
import { Link } from "react-router-dom";
import ChatAdd from "../../assets/img/ChatAdd.svg";

const AddRowRight = () => {
  return (
    <div className="row">
      <div className="col-12 d-flex justify-content-end py-3">
        <Link to="#">
          <img src={ChatAdd} className="img-fluid" alt="" />
        </Link>
      </div>
    </div>
  );
};

export default AddRowRight;
