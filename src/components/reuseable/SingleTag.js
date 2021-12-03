import React from "react";

export const SingleTag = () => {
  return (
    <div className="col-sm-2">
      <div className="tags helo">
        <select className="form-select" aria-label="">
          <option defaultValue>Tags</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
    </div>
  );
};
export default SingleTag;
