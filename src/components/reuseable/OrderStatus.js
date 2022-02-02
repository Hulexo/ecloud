import React from "react";
import CardRiderOff from "../../assets/img/CardRiderOff.svg";
import CardPrinterOff from "../../assets/img/CardPrinterOff.svg";

const OrderStatus = () => {
  return (
    <div className="row">
      <div className="orderstatus">
        <div className="totalorders">
          <p>
            162 <span>Total Order today</span>
          </p>
        </div>
        <div className="deliver">
          <p>
            90 <span>Deliverd</span>
          </p>
        </div>
        <div className="ongoing">
          <p>
            72 <span>Ongoing</span>
          </p>
        </div>
        <div className="circle">
          <span class="circle_inner" />
          <span>20</span>
        </div>
        <div className="circle">
          <span class="circle_inner2" />
          <span>15</span>
        </div>
        <div className="circle">
          <span class="circle_inner3" />
          <span>27</span>
        </div>
        <div className="circle">
          <span class="circle_inner4" />
          <span>15</span>
        </div>
        <div className="circle">
          <img src={CardRiderOff} alt="" />
          <span>15</span>
        </div>
        <div className="circle">
          <img src={CardPrinterOff} alt="" />
          <span>15</span>
        </div>
        <div className="circle">
          <p>
            25:22 <span>Avg Preparing</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderStatus;
