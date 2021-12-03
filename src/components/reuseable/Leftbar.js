import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/CLOUD-Logo.svg";
import ICONStatisticsCopy from "../../assets/img/ICONStatisticsCopy.svg";
import ICONOrderCopy from "../../assets/img/ICONOrderCopy.svg";
import ICONKitchenCopy from "../../assets/img/ICONKitchenCopy.svg";
import ICONFinanceCopy from "../../assets/img/ICONFinanceCopy.svg";
import ICONPerformanceCopy from "../../assets/img/ICONPerformanceCopy.svg";
import ICONBrandCopy from "../../assets/img/ICONBrandCopy.svg";
import ICONMenuCopy from "../../assets/img/ICONMenuCopy.svg";
import ICONCustomerCopy from "../../assets/img/ICONCustomerCopy.svg";
import ICONPlatformCopy from "../../assets/img/ICONPlatformCopy.svg";
import ICONDeliveryCopy from "../../assets/img/ICONDeliveryCopy.svg";

const Leftbar = () => {
  return (
    <div className="dashbord-sidebar">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="cloud-logo" className="img-fluid" />
        </Link>
      </div>

      <div className="leftmenu">
        <ul>
          <li className="icon-stats">
            <Link to="#">
              <img
                src={ICONStatisticsCopy}
                alt="ICON Statistics"
                className="img-fluid"
              />{" "}
            </Link>
          </li>

          <li className="icon-order">
            <Link to="/page-8">
              <img src={ICONOrderCopy} alt="ICON order" className="img-fluid" />{" "}
            </Link>
          </li>
          <li className="icon-kitchen">
            <Link to="#">
              <img
                src={ICONKitchenCopy}
                alt="ICON kitchen"
                className="img-fluid"
              />
            </Link>
          </li>
          <li className="icon-finance">
            <Link to="#">
              <img
                src={ICONFinanceCopy}
                alt="ICON Finance"
                className="img-fluid"
              />
            </Link>
          </li>
          <li className="icon-perfomnce">
            <Link to="#">
              <img
                src={ICONPerformanceCopy}
                alt="ICON Performance"
                className="img-fluid"
              />
            </Link>
          </li>
          <li className="icon-brnd">
            <Link to="#">
              <img src={ICONBrandCopy} alt="ICON Brand" className="img-fluid" />
            </Link>
          </li>
          <li className="icon-menu">
            <Link to="#">
              <img src={ICONMenuCopy} alt="ICON Menu" className="img-fluid" />
            </Link>
          </li>
          <li className="icon-custmer">
            <Link to="#">
              <img
                src={ICONCustomerCopy}
                alt="ICON Customer"
                className="img-fluid"
              />
            </Link>
          </li>
          <li className="icon-platform">
            <Link to="#">
              <img
                src={ICONPlatformCopy}
                alt="ICON Platform"
                className="img-fluid"
              />
            </Link>
          </li>
          <li className="icon-delivery">
            <Link to="#">
              <img
                src={ICONDeliveryCopy}
                alt="ICON delivery"
                className="img-fluid"
              />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Leftbar;
