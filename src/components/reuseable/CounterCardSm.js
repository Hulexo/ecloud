import React, { useState } from "react";

const CounterCardSm = () => {
  const [count, setCount] = useState(1);
  return (
    <>
      <div className="startersorder-count border-bottom addproduct">
        <div className="quantityy d-flex justify-content-between align-item-center">
          <div className="qty mt-2">
            <span className="minus" onClick={() => setCount(count + 1)}>
              +
            </span>
            <input type="number" className="count" name="qty" value={count} />
            <span className="plus" onClick={() => setCount(0)}>
              +
            </span>
          </div>
          <div className="mt-2 quantity-prices">
            <h1>276.AED</h1>
          </div>
        </div>

        <h4>Chicken Casadia</h4>
      </div>
      <div className="startersorder-count border-bottom addproduct">
        <div className="quantityy d-flex justify-content-between align-item-center">
          <div className="qty"></div>
          <div className="mt-2 quantity-prices">
            <h1>276.AED</h1>
          </div>
        </div>

        <h4>Lime Cake</h4>
      </div>
      <div className="startersorder-count border-bottom addproduct">
        <div className="quantityy d-flex justify-content-between align-item-center">
          <div className="qty"></div>
          <div className="mt-2 quantity-prices">
            <h1>276.AED</h1>
          </div>
        </div>

        <h4>
          Chicken & Potatoes In Three Coriander Sauce and beef slices Chicken &
          Potatoes In Three Coriander Sauce and beef slices
        </h4>
      </div>
      <div className="startersorder-count border-bottom addproduct">
        <div className="quantityy d-flex justify-content-between align-item-center">
          <div className="qty"></div>
          <div className="mt-2 quantity-prices">
            <h1>276.AED</h1>
          </div>
        </div>

        <h4>Lime Cake</h4>
      </div>
      <div className="startersorder-count border-bottom addproduct">
        <div className="quantityy d-flex justify-content-between align-item-center">
          <div className="qty"></div>
          <div className="mt-2 quantity-prices">
            <h1>276.AED</h1>
          </div>
        </div>

        <h4>Lime Cake</h4>
      </div>
      <div className="startersorder-count border-bottom addproduct">
        <div className="quantityy d-flex justify-content-between align-item-center">
          <div className="qty"></div>
          <div className="mt-2 quantity-prices">
            <h1>276.AED</h1>
          </div>
        </div>

        <h4>Chicken & Potatoes In Three Coriander</h4>
      </div>
    </>
  );
};

export default CounterCardSm;
