import React from "react";
import georgemashawilogo from "../../assets/img/georgemashawilogo.png";
import Add1 from "../../assets/img/Add1.png";

const BasicInformation = () => {
  return (
    <div className="row menuorder-bg mt-3">
      <div className="col-12">
        <p>Basic information</p>
        <div className="row">
          <div className="col-1">
            <div className="company-itemlogo">
              <img src={georgemashawilogo} className="img-fluid" alt="" />
            </div>
          </div>
          <div className="col-lg-1">
            <select className="form-select" aria-label="Default select example">
              <option defaultValue>UAE</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className="col-lg-2">
            <div className="col">
              <input
                className="form-control"
                type="text"
                placeholder="mobile"
                aria-label="default input example"
              />
            </div>
          </div>
          <div className="col-lg-1">
            <select className="form-select" aria-label="Default select example">
              <option defaultValue>UAE</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className="col-lg-2">
            <div className="col">
              <input
                className="form-control"
                type="text"
                placeholder="mobile"
                aria-label="default input example"
              />
            </div>
          </div>
          <div className="col-lg-5">
            <div className="tabs">
              <div className="dropdown-tabs">
                <p>
                  <span className="w3-tag w3-teal">Tags +</span>
                </p>

                <div className="dropdown-hovertabs">
                  <div className="row">
                    <p className="mb-3">
                      <span className="w3-tag w3-teal">Eags Kooking +</span>
                      <span className="w3-tag w3-teal">Mashawi +</span>
                      <span className="w3-tag w3-teal">Sandwich +</span>
                      <span className="w3-tag w3-teal">Sandwich +</span>
                      <span className="w3-tag w3-teal">Fatayer +</span>
                    </p>

                    <div className="col-12  helo">
                      <div className="form-group has-search position-relative">
                        <img src={Add1} className="position-absolute" alt="" />
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Add Categories"
                        />
                      </div>
                    </div>

                    <div className="col-12  helo mt-3">
                      <div className="form-group has-search">
                        <span className="fa fa-search form-control-feedback"></span>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Search"
                        />
                      </div>
                    </div>
                    <div className="col-12 mt-5">
                      <p>
                        <span className="w3-tag w3-teal">Tags +</span>
                        <span className="w3-tag w3-teal">Tags +</span>
                        <span className="w3-tag w3-teal">Tags +</span>
                        <span className="w3-tag w3-teal">Tags +</span>
                        <span className="w3-tag w3-teal">Tags +</span>
                      </p>
                      <p className="py-3">
                        <span className="w3-tag w3-teal">Tags +</span>
                        <span className="w3-tag w3-teal">Tags +</span>
                        <span className="w3-tag w3-teal">Tags 1 +</span>
                        <span className="w3-tag w3-teal">Tags1 +</span>
                        <span className="w3-tag w3-teal">Tags +</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="basic-info">
          <div className="row">
            <div className="col-lg-1"></div>
            <div className="col-lg-2">
              <input
                className="form-control"
                type="text"
                placeholder="mobile"
                aria-label="default input example"
              />
            </div>
            <div className="col-lg-2">
              <input
                className="form-control"
                type="text"
                placeholder="mobile"
                aria-label="default input example"
              />
            </div>
            <div className="col-lg-2">
              <input
                className="form-control"
                type="text"
                placeholder="mobile"
                aria-label="default input example"
              />
            </div>
            <div className="col-lg-5"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicInformation;
