import React from "react";
import SingleTag from "./SingleTag";

const Tags = (props) => {
  const {setOrderStatus, orderStatus} = props
  return (
    <>
      <div className="row mt-3">
        <SingleTag orderStatus={orderStatus} setOrderStatus={setOrderStatus} />
        <SingleTag orderStatus={orderStatus} setOrderStatus={setOrderStatus} />
      </div>
      <div className="row mt-2 mb-3"></div>
    </>
  );
};

export default Tags;
