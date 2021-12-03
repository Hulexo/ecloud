import React from "react";
import Header from "../../components/reuseable/Header";
import Sidebar from "../../components/reuseable/Sidebar";
import InnerTopRowPage12 from "../../components/reuseable/InnerTopRowPage12";
import LegendaAera from "../../components/reuseable/LegendaAera";
import { Area3 } from "../../components/reuseable/ChartAreaCom";
import Chat from "../../components/reuseable/Chat";

const DashboardView3 = () => {
  return (
    <div className="container-fluid ">
      <div class="charts-group">
        <div className="row g-0">
          <div className="col-lg-1">
            <Sidebar />
          </div>
          <div className="col-11">
            <div className="row">
              <Header />
            </div>
            <div class="mainsection mt-3">
              <InnerTopRowPage12 />
              <div className="row no-gutters mt-3">
                <LegendaAera />
                <Area3 />
              </div>
            </div>
          </div>
        </div>
        <Chat />
      </div>
    </div>
  );
};

export default DashboardView3;
