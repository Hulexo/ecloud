import React, { useState } from "react";
import { Link } from "react-router-dom";
import CDL from "../../assets/img/CDL.svg";
import CB from "../../assets/img/CB.svg";
import CY from "../../assets/img/CY.svg";
import AddOrders from "../../assets/img/AddOrders.svg";

const CounterCardItems = () => {
  return (
    <>
      <div className="startersorder-count">
        <Counter />
      </div>
      <div className="startersorder-count">
        <Counter2 />
      </div>
      <div className="startersorder-count">
        <Counter2 />
      </div>

      <div className="totalpayment">
        <SubTotal />
      </div>
    </>
  );
};
const Counter = () => {
  const [count, setCount] = useState(5);

  return (
    <>
      <div className="quantityy d-flex justify-content-between align-item-center">
        <div className="qty mt-2">
          <span className="minus" onClick={() => setCount(count - 1)}>
            -
          </span>
          <input type="number" className="count" name="qty" value={count} />
          <span className="plus" onClick={() => setCount(0)}>
            +
          </span>
        </div>
        <div className=" mt-2 quantity-prices">
          <h1>
            276.AED
            <span className="d-block">
              <span className="infoalarm bg-primary">+</span>20 aed
            </span>
          </h1>
        </div>
      </div>

      <h4>Chicken Shawarma Family Dish</h4>

      <div className="startersorder-countprice border-bottom">
        <div>
          <ul>
            <li>
              <img src={CDL} width="6px" alt="" />
            </li>
            <li>
              <img src={CDL} width="6px" alt="" />
            </li>
            <li>
              <img src={CB} width="6px" alt="" />
            </li>
            <li>
              <img src={CY} width="6px" alt="" />
            </li>
            <li>
              <img src={CY} width="6px" alt="" />
            </li>
          </ul>
        </div>
        <div>
          <h1>
            <span className="infoalarm">
              <strong>i</strong>
            </span>
          </h1>
        </div>
      </div>
    </>
  );
};
const Counter2 = () => {
  const [count, setCount] = useState(1);
  return (
    <>
      <div className="quantityy d-flex justify-content-between align-item-center">
        <div className="qty mt-2">
          <span className="minus" onClick={() => setCount(count - 1)}>
            -
          </span>
          <input type="number" className="count" name="qty" value={count} />
          <span className="add" onClick={() => setCount(count + 1)}>
            +
          </span>
        </div>
        <div className=" mt-2 quantity-prices">
          <h1>
            276.AED
            <span className="d-block">
              <span className="infoalarm bg-primary">+</span>20 aed
            </span>
          </h1>
        </div>
      </div>

      <h4>Chicken Shawarma Family Dish</h4>

      <div className="startersorder-countprice border-bottom">
        <div>
          <ul>
            <li>
              <img src={CDL} width="6px" alt="" />
            </li>
            <li>
              <img src={CDL} width="6px" alt="" />
            </li>
            <li>
              <img src={CB} width="6px" alt="" />
            </li>
            <li>
              <img src={CY} width="6px" alt="" />
            </li>
            <li>
              <img src={CY} width="6px" alt="" />
            </li>
          </ul>
        </div>
        <div>
          <h1>
            <span className="infoalarm">
              <strong>i</strong>
            </span>
          </h1>
        </div>
      </div>
    </>
  );
};
const SubTotal = () => {
  return (
    <>
      <ul>
        <div className="sub-total">
          <li>subtotal</li>
          <li className="text-white">AED 626.00</li>
        </div>
        <div className="sub-total">
          <li>Service Charge</li> <li className=" text-white">AED 626.00</li>
        </div>
        <div className="sub-total">
          <li>order items</li> <li className=" text-white">Items</li>
        </div>
        <div className="sub-total">
          <li>Avg.time</li> <li className=" text-white">626.00</li>
        </div>
        <div className="sub-total">
          <li>Total Amount</li> <li className=" text-white">AED 635.000</li>
        </div>
        <div className="mt-3 px-3">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            placeholder="coments"
            rows="6"
          ></textarea>
        </div>
        <div className="add-btn mt-5">
          <Link to="#">
            <img src={AddOrders} alt="" />
          </Link>
        </div>
      </ul>
    </>
  );
};

export default CounterCardItems;
