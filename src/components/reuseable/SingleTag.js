import React from "react";

export const SingleTag = (props) => {
  const { setOrderStatus, orderStatus } = props;
  const handleChange = (e) => {
    setOrderStatus(e.target.value);
  };
  return (
    <div className="col-sm-2">
      <div className="tags helo">
        <select
          defaultValue={orderStatus}
          className="form-select"
          onChange={handleChange}
          aria-label=""
        >
          <option value="All" selected>
            Tags
          </option>
          <option value="Delivered">Delivered</option>
          <option value="Pending">Pending</option>
          <option value="Delivery">Delivery</option>
        </select>
      </div>
    </div>
  );
};
export default SingleTag;
