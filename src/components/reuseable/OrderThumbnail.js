import React from "react";
import { Link } from "react-router-dom";
import big from "../../assets/img/OrderBigThumbnail01.svg";
import small from "../../assets/img/OrdersmallThumbnail01.svg";

const OrderThumbnail = () => {
  return (
    <div className="orderthumbail">
      <div className="items">123</div>
      <div>
        <Link to="#">
          <img src={big} alt="" />
        </Link>
      </div>
      <div className="orderthumbail-notifiaction">
        <div>
          <Link to="#">
            <img src={big} alt="" />
          </Link>
          <Link to="#">
            <img src={big} alt="" />
          </Link>
        </div>
        <div>
          <span>8</span>
        </div>
      </div>
      <div>
        <Link to="#">
          <img src={small} alt="" />
        </Link>
      </div>

      <div>
        <Link to="#">
          <img src={small} alt="" />
        </Link>
      </div>
      <div className="orderthumbail-notifiaction">
        <div>
          <Link to="#">
            <img src={small} alt="" />
          </Link>
        </div>
        <div>
          <span>2</span>
        </div>
      </div>

      <div>
        <Link to="#">
          <img src={small} alt="" />
        </Link>
      </div>
    </div>
  );
};

export default OrderThumbnail;
