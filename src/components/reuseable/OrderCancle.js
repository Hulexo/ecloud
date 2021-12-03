import React from "react";
import { Link } from "react-router-dom";
import UR from "../../assets/img/UR.svg";

const OrderCancle = () => {
  return (
    <div className="Revenue  panelhover">
      <div className="platform-performance">
        <div className="dropdown helo">
          <select className="form-select" aria-label="">
            <option defaultValue>Cancel orders</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div className="menu-icon">
          <Link to="#">
            <i className="fal fa-ellipsis-h"></i>
          </Link>
        </div>
      </div>
      <Imges />
    </div>
  );
};

const Imges = () => {
  return (
    <>
      <div className="revenu-orders">
        <h1 className="textpcolor5">
          42 orders <span className="aed"> AED</span>
        </h1>
        <p>
          2,514 <span className="aed">AED</span>
        </p>
      </div>
      <div className="cncel-orders">
        <img src={UR} width="12px" alt="" />
        <span className="tabletext3">1.23%</span>
        <span className="order-days"> Since Yesterday</span>
      </div>
      <div className="cancelorder-percentage">
        <ul>
          <li>
            <span className="tabletext percentbg">12.52</span>
          </li>
          <li className="d-block">delay</li>
        </ul>
        <ul>
          <li>
            <span className="tabletext percentbg">12.52</span>
          </li>
          <li className="d-block">wrong</li>
        </ul>
        <ul>
          <li>
            <span className="tabletext percentbg">12.52</span>
          </li>
          <li className="d-block">quality</li>
        </ul>
      </div>
    </>
  );
};

export default OrderCancle;
