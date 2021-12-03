import React from "react";
import { Link } from "react-router-dom";
import Zoom from "../../assets/img/ChartZoom.svg";
import downloadOff from "../../assets/img/downloadOff.svg";
import TableViewOff from "../../assets/img/TableViewOff.svg";
import FullScreenOff from "../../assets/img/FullScreenOff.svg";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

export const Helo = () => {
  return (
    <div className="overall-orders">
      <select className="form-select" aria-label="">
        <option defaultValue>Item Selected</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
  );
};
export const DatePeker = () => {
  return (
    <div class="col-2">
      <div className="datepick panelhover">
        <input type="date" name="dateofbirth" id="dateofbirth" />
      </div>
    </div>
  );
};
export const ChatZoom = () => {
  return (
    <div class="col-4">
      <div class="chartzoom-img">
        <img src={Zoom} class="img-fluid" alt="" />
      </div>
    </div>
  );
};
export const DayIcon = () => {
  return (
    <div class="col-2">
      <div class="chartzoom-option">
        <span class="">Y</span>
        <span class="">M</span>
        <span class="">W</span>
        <span class="">H</span>
      </div>
    </div>
  );
};
export const Icons = () => {
  return (
    <div className="icons">
      <Link to="#">
        <img src={downloadOff} alt="" />
      </Link>
      <Link to="#">
        <img src={TableViewOff} alt="" />
      </Link>
      <Link to="#">
        <img src={FullScreenOff} alt="" />
      </Link>
    </div>
  );
};
export const HashSearch = () => {
  return (
    <div className="has-search">
      <select className="form-select" aria-label="">
        <option defaultValue>sort by</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
  );
};

export const MixManakeesh = () => {
  return (
    <div className="helo">
      <select className="form-select" aria-label="">
        <option defaultValue>Mix Manakeesh</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
  );
};

export const Buttons = () => {
  return (
    <div className="submitt-btns inner-btn text-center">
      <button type="button" className="btn btn-secondary">
        Match -&gt;
      </button>
      <button type="button" className="btn btn-secondary">
        Delete unmatch
      </button>
      <button type="button" className="btn btn-secondary">
        Edit unmatch
      </button>
      <button type="button" className="btn btn-secondary">
        Edit Menu
      </button>
    </div>
  );
};

export const SelectMenu2 = () => {
  return (
    <div className="helo">
      <select className="form-select" aria-label="">
        <option defaultValue>Select Menu 2</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
  );
};

export const SavaButtons = () => {
  return (
    <div className="col">
      <div className="submitt-btns text-center">
        <button type="button" className="btn btn-primary">
          Save Changes +
        </button>
        <button type="button" className="btn btn-secondary">
          Save a Copy
        </button>
        <button type="button" className="btn btn-danger">
          Cancel
        </button>
      </div>
    </div>
  );
};
