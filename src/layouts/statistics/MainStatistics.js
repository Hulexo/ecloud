import React from "react";
import Leftbar from "../../components/reuseable/Leftbar";
import Header from "../../components/reuseable/Header";
import PlatformPerformence from "../../components/PlatformPerformence";
import PlatformPerformanceMetter from "../../components/reuseable/PlatformPerformanceMetter";
import PrograssBars from "../../components/reuseable/PrograssBars";
import ChartRow from "../../components/reuseable/ChartRow";
import KitchinDrop from "../../components/reuseable/KetchinDrop";
import OrderCancle from "../../components/reuseable/OrderCancle";
import SplineChart from "../../components/reuseable/SplineChart";

const MainStatistics = () => {
  return (
    <div className="container-fluid ">
      <div className="row">
        <div className="col-lg-1 px-0">
          <Leftbar />
        </div>
        <div className="col-lg-11  px-0 dashbg">
          <Header />
          <div className="row mt-4">
            <div className="col-lg-4">
              <PlatformPerformence />
              <div className="avg-responsetime  panelhover">
                <PlatformPerformanceMetter />
              </div>
              <PrograssBars />
            </div>
            <div className="col-lg-8">
              <ChartRow />
              <KitchinDrop />
              <div className="row">
                <div className="col-lg-3 mt-4">
                  <OrderCancle />
                </div>
                <div className="col-lg-9  panelhover">
                  <SplineChart />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainStatistics;
