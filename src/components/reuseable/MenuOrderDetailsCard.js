import React from "react";
import { Link, useLocation } from "react-router-dom";
import Manu25 from "./Manu25";
import Commentsoff from "../../assets/img/Commentsoff.svg";
import Complainoff from "../../assets/img/Complainoff.svg";
import CardRiderOff from "../../assets/img/CardRiderOff.svg";
import Path1 from "../../assets/img/Path1.svg";

const MenuOrderDetailsCard = () => {
  const location = useLocation();
  const currentUrl = location.pathname;

  return (
    <div className=" ">
      <div className="orderdetail">
        <div className="ordername">
          <h1>Order Detail</h1>
        </div>
        <div className="ordertime text-white">12.22</div>
        <div>
          {currentUrl === "/order-detail1" && <li className="tagone">New</li>}
          {currentUrl === "/order-detail2" && (
            <li className="tagtwo">Preparing</li>
          )}
          {currentUrl === "/order-detail3" && (
            <li className="tagthree">No rider</li>
          )}
          {currentUrl === "/order-detail4" && (
            <li className="tagthree">Delayed</li>
          )}
          {currentUrl === "/order-detail5" && (
            <li className="tagfour">ontime</li>
          )}
        </div>
      </div>
      <div className="orderplatform">
        <div className="platform-title">
          <i className="fa fa-truck fa-2x"></i>
          <h1>Platform</h1>
        </div>
        <div className="orderno">
          <Detail />
        </div>
      </div>
      <div className="orderbrandname">
        <div className="brandname">
          <h1>Brandname</h1>
        </div>
        <ul>
          <li>
            Brnad <span>Brand Name sdfsfdfssfsdfvs</span>
          </li>
        </ul>
      </div>
      <div className="delivery">
        <div className="deliveryname">
          <img src={CardRiderOff} alt="" />
          <span>Delivery</span>
        </div>
        <div className="deliverydetails">
          <Detail />
        </div>
      </div>
      <div className="customers">
        <div className="customer-name">
          <i className="fa fa-user fa-2x"></i>
          <h1>Customer</h1>
        </div>
        <div className="customer-details">
          <Detail />
        </div>
        <div className="pathicons">
          <Link to="">
            <img src={Path1} alt="" />
          </Link>
          <Link to="">
            <img src={Complainoff} alt="" />
          </Link>
          <Link to="">
            <img src={Commentsoff} alt="" />
          </Link>
        </div>
      </div>
      <div className="kitchen">
        <div className="kitchen-name">
          <i className="fa fa-oven"></i>
          <h1>Kitchen</h1>
        </div>
        <div className="kitchen-details">
          <Detail />
        </div>
        <div className="pathicons">
          <Link to="">
            <img src={Path1} alt="" />
          </Link>
          <Link to="">
            <img src={Complainoff} alt="" />
          </Link>
          <Link to="">
            <img src={Commentsoff} alt="" />
          </Link>
        </div>
      </div>
      <Manu25 />
    </div>
  );
};
const Detail = () => {
  return (
    <>
      <ul>
        <li>
          order no <span>5874122698</span>
        </li>
      </ul>
      <ul>
        <li>
          platform<span>Talabat</span>
        </li>
      </ul>
      <ul>
        <li>
          Time<span>2:22 </span>
        </li>
      </ul>
      <ul>
        <li>
          Date<span>03-02-21</span>
        </li>
      </ul>
      <ul>
        <li>
          Amount<span>84.33 AED</span>
        </li>
      </ul>
    </>
  );
};

export default MenuOrderDetailsCard;
