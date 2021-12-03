import React from "react";

const MenuOrderDetails = () => {
  return (
    <div className="menuorder-details ">
      <div className="row">
        <div className="col">
          <div className="platform">
            <label className="form-label">order no</label>
            <input
              className="form-control"
              type="text"
              placeholder="Name"
              aria-label="default input example"
            />
          </div>
        </div>
        <div className="col">
          <div className="platform">
            <label className="form-label">Platform</label>
            <select className="form-select" aria-label="Default select example">
              <option defaultValue>talabat</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>
        <div className="col">
          <div className="platform">
            <label className="form-label">Brand</label>
            <select className="form-select" aria-label="Default select example">
              <option defaultValue>Brand name</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>
        <div className="col">
          <div className="platform">
            <label className="form-label">Kitchen</label>
            <select className="form-select" aria-label="Default select example">
              <option defaultValue>Pizza morphi</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>
        <div className="col">
          <div className="platform">
            <label className="form-label">delivery</label>
            <select className="form-select" aria-label="Default select example">
              <option defaultValue>csr jorio</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuOrderDetails;
