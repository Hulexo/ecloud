import React from "react";
import Header from "../../components/reuseable/Header";
import OrderDetailFeilds from "../../components/reuseable/OrderDetailFeilds";
import GourmetCard from "../../components/reuseable/GourmetCard";
import CounterCardSm from "../../components/reuseable/CounterCardSm";

const GourmetChicken = () => {
  return (
    <div className="container-fluid ">
      <div className="row">
        <Header />
        <div className="row mt-2">
          <OrderDetailFeilds />
        </div>
        <div className="row mt-3">
          <div className="col-lg-10">
            <div className="menuorder-bg">
              <GourmetCard />
            </div>
          </div>
          <div class="col-lg-2">
            <CounterCardSm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GourmetChicken;
