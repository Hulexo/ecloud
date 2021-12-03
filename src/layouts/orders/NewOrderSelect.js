import React from "react";
import Header from "../../components/reuseable/Header";
import OrderDetailFeilds from "../../components/reuseable/OrderDetailFeilds";
import OrderCompHead from "../../components/reuseable/OrderCompHead";
import CounterCardItems from "../../components/reuseable/CounterCardItems";

const NewOrderSelect = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <Header />
        <div className="row mt-2">
          <OrderDetailFeilds />
        </div>
        <div className="row mt-3">
          <div className="col-lg-10">
            <div className="menuorder-bg">
              <OrderCompHead />
            </div>
          </div>
          <div className="col-lg-2 menuorder-bg">
            <CounterCardItems />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewOrderSelect;
