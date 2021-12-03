import React from "react";
import CLOUDCompare from "../../assets/img/CLOUD-Compare.png";
import MenuCol7 from "./MenuCol7";

const MenuComparisonTool = () => {
  return (
    <section className="menucomarison-tool">
      <h1 className="text-white">Menu comparison tool</h1>
      <div className="row justify-content-center">
        <div className="col-lg-5 helo">
          <select className="form-select" aria-label="">
            <option defaultChecked>Select Menu 1</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <div className="mt-5">
            <MenuCol7 />
          </div>
        </div>
        <div className="col-lg-5 helo">
          <select className="form-select" aria-label="">
            <option defaultChecked>Select Menu 2</option>

            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="comparison-icon">
            <img src={CLOUDCompare} className="img-fluid " alt="" />
            <h2 className="d-block">
              Message for the Onboarding <br />
              from cloud team
            </h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col text-center mt-5">
          <div className="submitt-btns text-center">
            <button type="button" className="btn btn-danger">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuComparisonTool;
