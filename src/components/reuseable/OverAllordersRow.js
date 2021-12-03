import React from "react";
import { Link } from "react-router-dom";
import YearRangeSlider from "./YearRangeSlider";
// import ChartZoom from "../../assets/img/ChartZoom.svg";
const OverAllordersRow = () => {
  return (
    <>
      <div className="col helo">
        <div className="overall-orders">
          <select className="form-select border-0" aria-label="">
            <option defaultValue>Overall Orders</option>
            <option value="1">Delayed</option>
            <option value="2">Ontime</option>
            <option value="3">Canceled</option>
            <option value="4">With Offer</option>
            <option value="5">Preparing</option>
            <option value="6">Complained</option>
          </select>
        </div>
      </div>
      <div className="col helo">
        <div className="overall-orders">
          <select className="form-select border-0" aria-label="">
            <option defaultValue>By </option>
            <option value="1">BY Platform</option>
            <option value="2">Overall</option>
            <option value="3">Kitchen</option>
            <option value="">Platform</option>
            <option value="">Menu Items</option>
            <option value="">Price</option>
            <option value="">Area</option>
            <option value="">Brand</option>
          </select>
        </div>
      </div>
      <TagsDrop />
      <div className="col">
        <div className="datepick">
          <input type="date" name="dateofbirth" id="dateofbirth" />
        </div>
      </div>
      <div className="col-lg-5">
        <YearRangeSlider />
        {/* <div className="chartzoom-img">
          <img src={ChartZoom} className="img-fluid" alt="" />
        </div> */}
      </div>
    </>
  );
};
export const TagsDrop = () => {
  return (
    <div className="col helo">
      <div className="orders-tagmenu">
        <div className="status-mega">
          <ul className="">
            <li className="dropdown">
              <Link to="#">
                Tag <i className="fa fa-angle-down"></i>
              </Link>
              <div className="mega-menu">
                <div className="status-menu">
                  <div className="item">
                    <ul>
                      <li className="order-title">
                        <Link to="#">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          ALL status
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          Delayed
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          Complain
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          Rider
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          Canceled
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          Chat
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          0-15 AED
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          15-50 AED
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          15-50 AED
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          offers
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="item">
                    <ul>
                      <li className="order-title">
                        <Link to="#">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          10 Platforms
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          Talabat
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          Zomato
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          800 Getfood
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          Kareem
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          Delivery
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          kabil
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          Lunchon
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          Groupon
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          Instafood
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="item">
                    <ul>
                      <li className="order-title">
                        <Link to="#">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          ALL Day Time
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          0:00
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          01:00
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          0:00
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          02:00
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          0:00
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          03:00
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          0:00
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          05:00
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          06:00
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="item">
                    <ul>
                      <li className="order-title">
                        <Link to="#">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          All Kitchens
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          Talabat
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          Zomato
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          800 Getfood
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          Kareem
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          Delivery
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          kabil
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          Lunchon
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          Groupon
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          Instafood
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="item">
                    <ul>
                      <li className="order-title">
                        <Link to="#">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          ALL Menu items
                        </Link>
                      </li>

                      <div className="form-group has-search">
                        <span className="fa fa-search form-control-feedback"></span>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Search"
                        />
                      </div>

                      <div className="dropselect d-flex align-items-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <select
                          className="form-select form-select-lg "
                          aria-label=".form-select-lg example"
                        >
                          <option defaultValue>Pizza</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>
                      <div className="dropselect d-flex align-items-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <select
                          className="form-select form-select-lg "
                          aria-label=".form-select-lg example"
                        >
                          <option defaultValue>Burger</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>
                      <li>
                        <Link to="#">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          Margrita
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          /Vegan
                        </Link>
                      </li>
                      <div className="dropselect d-flex align-items-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <select
                          className="form-select form-select-lg "
                          aria-label=".form-select-lg example"
                        >
                          <option defaultValue>Maxican</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>

                      <li>
                        <Link to="#">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          Cheese Round
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="item">
                    <ul>
                      <li className="order-title">
                        <Link to="#">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          Menu Pref
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          Talabat
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          Zomato
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          800 Getfood
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          Kareem
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          Delivery
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          kabil
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          Lunchon
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          Groupon
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          Instafood
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="item">
                    <ul>
                      <li className="order-title">
                        <Link to="#">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          Customer Nationality
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          Arab
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          Asian
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          Local Getfood
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          Indian
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          Pakistani
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          Philipino
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          African
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="item">
                    <ul>
                      <li className="order-title">
                        <Link to="#">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          ALL Menu items
                        </Link>
                      </li>

                      <div className="form-group has-search">
                        <span className="fa fa-search form-control-feedback"></span>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Search"
                        />
                      </div>

                      <div className="dropselect d-flex align-items-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <select
                          className="form-select form-select-lg "
                          aria-label=".form-select-lg example"
                        >
                          <option defaultValue>Pizza</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>
                      <div className="dropselect d-flex align-items-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <select
                          className="form-select form-select-lg "
                          aria-label=".form-select-lg example"
                        >
                          <option defaultValue>Burger</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>
                      <li>
                        <Link to="#">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          Margrita
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          Vegan
                        </Link>
                      </li>
                      <div className="dropselect d-flex align-items-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <select
                          className="form-select form-select-lg "
                          aria-label=".form-select-lg example"
                        >
                          <option defaultValue>Maxican</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>

                      <li>
                        <Link to="#">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          Cheese Round
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OverAllordersRow;
