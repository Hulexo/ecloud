import React from "react";

const UserDetails = () => {
  return (
    <div className="user-details">
      <div className="row">
        <div className="col">
          <input
            className="form-control"
            type="text"
            placeholder="Default input"
            aria-label="default input example"
          />
        </div>
        <div className="col">
          <input
            className="form-control"
            type="text"
            placeholder="mobile"
            aria-label="default input example"
          />
        </div>
        <div className="col">
          <input
            className="form-control"
            type="text"
            placeholder="email"
            aria-label="default input example"
          />
        </div>
        <div className="col-lg-1">
          <select className="form-select" aria-label="Default select example">
            <option defaultValue>emirat</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div className="col-lg-1">
          <select className="form-select" aria-label="Default select example">
            <option defaultValue>UAE</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div className="col-lg-1">
          <select className="form-select" aria-label="Default select example">
            <option defaultValue>Home</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div className="col">
          <input
            className="form-control"
            type="text"
            placeholder="City"
            aria-label="default input example"
          />
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-8">
          <input
            className="form-control"
            type="text"
            placeholder="Address"
            aria-label="default input example"
          />
        </div>
        <div className="col-4">
          <input
            className="form-control"
            type="text"
            placeholder="Building flor no"
            aria-label="default input example"
          />
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
