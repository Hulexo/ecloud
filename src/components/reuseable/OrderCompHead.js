import React, { useState } from "react";
// import { Link } from "react-router-dom";
import ItemsCard from "./ItemsCard";
import Tabs from "./Tabs";
import KitchenTableoff from "../../assets/img/KitchenTableoff.svg";
import Kitchendashoff from "../../assets/img/Kitchendashoff.svg";
import share from "../../assets/img/share.svg";

const OrderCompHead = () => {
  const [active, setActive] = useState("grid");
  return (
    <>
      <div className="row">
        <div className="col mt-2 helo">
          <select className="form-select" aria-label="">
            <option defaultValue>item selected</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div className="col mt-2 helo">
          <select className="form-select" aria-label="">
            <option defaultValue>item selected</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div className="col mt-2 helo">
          <select className="form-select" aria-label="">
            <option defaultValue>item selected</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div className="col mt-2 helo">
          <select className="form-select" aria-label="">
            <option defaultValue>item selected</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div className="col-3 mt-2 helo">
          <div className="form-group has-search">
            <span className="fa fa-search form-control-feedback"></span>
            <input type="text" className="form-control" placeholder="Search" />
          </div>
        </div>
        <div className="col mt-2 d-flex align-item-center justify-content-center">
          <ul className="d-flex">
            <li onClick={() => setActive("tile")}>
              <img src={KitchenTableoff} alt="" />
            </li>
            <li onClick={() => setActive("grid")}>
              <img src={Kitchendashoff} alt="" />
            </li>
            <li>
              <img src={share} alt="" />
            </li>
          </ul>
        </div>
      </div>
      <div className="row">
        <Tabs />
        <div className="col-lg-10">
          <ItemsCard active={active} />
        </div>
      </div>
    </>
  );
};

export default OrderCompHead;
