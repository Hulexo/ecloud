import React from "react";
import SingleTag from "./SingleTag";

const Tags = () => {
  return (
    <>
      <div className="row mt-3">
        <SingleTag />
        <SingleTag />
      </div>
      <div className="row mt-2 mb-3"></div>
    </>
  );
};

export default Tags;
