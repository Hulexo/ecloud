import React from "react";
import { Link } from "react-router-dom";
import CLOUDUpload from "../../assets/img/CLOUD-Upload.png";
import OKBtn from "../../assets/img/OKBtn.png";
import CancelOrder2 from "../../assets/img/CancelOrder2.png";

const UploadMenu = () => {
  return (
    <>
      <div className="row mt-5">
        <div className="col-12 d-flex align-items-center justify-content-center">
          <Link to="#">
            <img src={CLOUDUpload} className="img-fluid cloudupload" alt="" />
            <span className="px-5">OR</span>
            <h4 className="d-block">Upload menu file</h4>
          </Link>
          <div className="has-search ">
            <select className="form-select" aria-label="">
              <option defaultValue>Select Menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <h4 className="d-block select-menus">Select From Others</h4>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 d-flex align-items-center justify-content-center orders-btn">
          <Link to="#">
            <img src={OKBtn} className="img-fluid ok-btn" width="50px" alt="" />
          </Link>

          <Link to="#">
            <img src={CancelOrder2} width="50px" alt="" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default UploadMenu;
