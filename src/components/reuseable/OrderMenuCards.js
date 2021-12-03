import React from "react";
import UR from "../../assets/img/UR.svg";
import DG from "../../assets/img/DG.svg";
import InfoAlarm from "../../assets/img/InfoAlarm.svg";

const OrderMenuCards = () => {
  return (
    <div className="row">
      <div className="col-lg-3">
        <CardOne />
      </div>
      <div className="col-lg-3">
        <div className="ordermenu-cards panelhover">
          <CardTwo />
        </div>
        <div className="ordermenu-cards mt-3 panelhover">
          <CardTwo />
        </div>
      </div>
      <div className="col-lg-6">
        <CardThree />
        <div className="row">
          <div className="col-lg-6">
            <div className="ordermenu-cards mt-3 panelhover">
              <CardTwo />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="ordermenu-cards mt-3 panelhover">
              <CardTwo />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CardOne = () => {
  return (
    <div className="ordermenu-cards panelhover">
      <div className="menucard-title">Card Title</div>
      <p>
        000,000,00<span className="aed"> AED</span>
      </p>
      <ul>
        <li>
          <img src={UR} alt="" />
        </li>
        <li>
          <span className="text-danger">1.23%</span> last month
        </li>
      </ul>

      <ul>
        <li>
          <img src={DG} alt="" />
        </li>
        <li>
          <span className="text-danger">1.23%</span> last month
        </li>
      </ul>
      <ul>
        <li>
          <img src={DG} alt="" />
        </li>
        <li>
          <span className="text-danger">1.23%</span> last month
        </li>
      </ul>
      <ul>
        <li>
          <img src={DG} alt="" />
        </li>
        <li>
          <span className="text-danger">1.23%</span> last month
        </li>
      </ul>
    </div>
  );
};
const CardTwo = () => {
  return (
    <div className="">
      <div className="menucard-title">Card Title</div>
      <p>
        000,000,00<span className="aed"> AED</span>
      </p>
      <ul>
        <li>
          <img src={UR} alt="" />
        </li>
        <li>
          <span className="text-danger">1.23%</span> last month
        </li>
      </ul>
    </div>
  );
};
const CardThree = () => {
  return (
    <div className="ordermenu-cards panelhover">
      <div className="ordermenu-details">
        <div className="main">
          <div className="menucard-title">Card Title</div>
          <p>
            000,000,00<span className="aed"> AED</span>
          </p>
          <ul>
            <li>
              <img src={UR} alt="" />
            </li>
            <li>
              <span className="text-danger">1.23%</span> last month
            </li>
          </ul>
        </div>
        <div className="menudec">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit <br />
            Cupiditate, recusandae consectetur adipisicing elit?
          </p>
        </div>
        <div className="">
          <img src={InfoAlarm} alt="" />
        </div>
      </div>
    </div>
  );
};
export default OrderMenuCards;
