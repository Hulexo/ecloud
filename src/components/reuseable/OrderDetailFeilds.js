import React from "react";
import { Link } from "react-router-dom";
import Path from "../../assets/img/Path.png";

const OrderDetailFeilds = () => {
  return (
    <div className="col-lg-12">
      <div className="menuorder-bg">
        <section className="menuorder-details">
          <div className="row">
            <div className="col">
              <div className="platform">
                <label for="exampleFormControlInput1" className="form-label">
                  order no
                </label>
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
                <label for="exampleFormControlInput1" className="form-label">
                  Platform
                </label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option defaultValue>talabat</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
            <div className="col">
              <div className="platform">
                <label for="exampleFormControlInput1" className="form-label">
                  Brand
                </label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option defaultValue>Brand name</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
            <div className="col">
              <div className="platform">
                <label for="exampleFormControlInput1" className="form-label">
                  Kitchen
                </label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option defaultValue>Pizza morphi</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
            <div className="col">
              <div className="platform">
                <label for="exampleFormControlInput1" className="form-label">
                  delivery
                </label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option defaultValue>csr jorio</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
          </div>
        </section>
        <section className="user-details">
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
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option defaultValue>emirat</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className="col-lg-1">
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option defaultValue>UAE</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className="col-lg-1">
              <select
                className="form-select"
                aria-label="Default select example"
              >
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
            <div className="col-8 user-address">
              <div className="user-address">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Address"
                  aria-label="default input example"
                />
                <Link to="#">
                  <img src={Path} alt="" />
                </Link>
              </div>
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
        </section>
      </div>
    </div>
  );
};

export default OrderDetailFeilds;
