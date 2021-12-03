import React, { useState } from "react";
import { Link } from "react-router-dom";
import Add2 from "../../assets/img/Add2.svg";

const CounterCart = () => {
  return (
    <div className="col-lg-3 mt-3">
      <div className="menu-item panelhover">
        <div className="menu-cart">
          <Counter />
          <p>Chicken Casadia</p>
        </div>
        <div className="menu-cart border-bottom ">
          <Counter />
          <p>Chicken Casadia</p>
        </div>

        <div className="menu-cart border-bottom ">
          <Counter />
          <p>
            Chicken & Potatoes In Three Coriander Sauce and beef slices Chicken
            & Potatoes In Three Coriander Sauce and beef slices
          </p>
        </div>

        <div className="menu-cart border-bottom ">
          <Counter />
          <p>Chicken Casadia</p>
        </div>

        <div className="menu-cart border-bottom ">
          <Counter />
          <p>Chicken Casadia</p>
        </div>

        <div className="menu-cart border-bottom ">
          <Counter />
          <p>Chicken Casadia</p>
        </div>
        <div className="totalpayment">
          <ul>
            <div className="subtotal">
              <li>subtotal</li> <li>AED 626.00</li>
            </div>
            <div className="subtotal">
              <li>Service Charge</li> <li>AED 626.00</li>
            </div>
            <div className="subtotal">
              <li>order items</li> <li>Items</li>
            </div>
            <div className="subtotal">
              <li>Avg.time</li> <li>626.00</li>
            </div>
            <div className="subtotal">
              <li>Total Amount</li> <li>AED 635.000</li>
            </div>
            <div className="mt-3 px-3">
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                placeholder="coments"
                rows="3"
              ></textarea>
            </div>
            <div className="add-btn">
              <Link to="">
                <img src={Add2} alt="" />
              </Link>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};
const Counter = () => {
  const [isCount, setIsCount] = useState(1);
  return (
    <div className="menu-cartadd">
      <i
        className="fal fa-plus fa-3x"
        onClick={() => setIsCount(isCount + 1)}
      ></i>
      <span className="count">{isCount}</span>
      <span>
        <i
          className="fal fa-minus fa-3x"
          onClick={() => setIsCount(isCount - 1)}
        ></i>
      </span>
      <span className="menuprices">
        280.0 <span className="aed">AED</span>
      </span>
    </div>
  );
};

export default CounterCart;
