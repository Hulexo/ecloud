import React from "react";
import { Link } from "react-router-dom";
import { sidbarInfo } from "../../json/db";
import share from "../../assets/img/share.svg";
import Edit from "../../assets/img/Edit.svg";
import CancelOrder from "../../assets/img/CancelOrder.svg";

const Manu25 = () => {
  return (
    <div className="order-menu">
      <div className="menu">
        <i className="fa fa-comment-alt-slash"></i>
        <h1>Menu-25</h1>
      </div>
      {sidbarInfo.map((data) => {
        const { id, dummy, count } = data;
        return (
          <div key={id}>
            <ul>
              <li>{count}</li>
              <li>
                {dummy}
                <span>
                  {dummy} {","} {dummy} {","}
                  {dummy} {","} {dummy}
                </span>
              </li>
            </ul>
          </div>
        );
      })}
      <OrderMenuIcons />
    </div>
  );
};

const OrderMenuIcons = () => {
  return (
    <div className="ordermenu-icons">
      <Link to="">
        <img src={share} alt="" />
      </Link>
      <Link to="">
        <img src={Edit} alt="" />
      </Link>
      <Link to="">
        <img src={CancelOrder} alt="" />
      </Link>
    </div>
  );
};

export default Manu25;
