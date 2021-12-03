import React from "react";
import Leftbar from "../../components/reuseable/Leftbar";
import Header from "../../components/reuseable/Header";
import IconsTabs from "../../components/reuseable/IconsTabs";
import PerfronmceStatusTable from "../../components/reuseable/PerfronmceStatusTable";
import TopItemsTable from "../../components/reuseable/TopItemsTable";
import TopItemWithMetter from "../../components/reuseable/TopItemWithMetter";
import OrderTypeWithChart from "../../components/reuseable/OrderTypeWithChart";
import ItemRevenuWithChart from "../../components/reuseable/ItemRevenuWithChart";

const SelectionMain = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-1">
          <Leftbar />
        </div>
        <div className="col-lg-11">
          <Header />
          <div className="row mt-4">
            <div className="col-12">
              <div className="menuorder-bg">
                <IconsTabs />
                <div className="row">
                  <div className="col-lg-6">
                    <PerfronmceStatusTable />
                  </div>
                  <div className="col-lg-2 Revenue">
                    <TopItemsTable />
                  </div>
                  <div className="col-lg-4">
                    <div className="row">
                      <div className="col-lg-6">
                        <TopItemWithMetter />
                      </div>
                      <div className="col-lg-6">
                        <OrderTypeWithChart />
                      </div>
                      <div className="col-12">
                        <ItemRevenuWithChart />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectionMain;
