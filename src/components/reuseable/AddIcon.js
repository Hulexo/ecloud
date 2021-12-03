import React from "react";
import { Link } from "react-router-dom";
import AddOrder from "../../assets/img/AddOrder.svg";

const AddIcon = () => {
  return (
    <div className="add-icon ">
      <Link to="">
        <img src={AddOrder} alt="" />
      </Link>
    </div>
  );
};

export default AddIcon;
