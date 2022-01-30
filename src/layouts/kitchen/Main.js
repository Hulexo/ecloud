import React, { useState } from "react";
import Sidebar from "../../components/reuseable/Sidebar";
import Header from "../../components/reuseable/Header";
import OrderStatus from "../../components/reuseable/OrderStatus";
import Card from "../../components/reuseable/Card";
import OrderThumbnail from "../../components/reuseable/OrderThumbnail";
import Rightbar from "../../components/reuseable/Rightbar";
import Chat from "../../components/reuseable/Chat";

const Main = () => {
  const [sort, setSort] = useState("All");

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-1">
          <Sidebar />
        </div>
        <div className="col-11">
          <Header />
          <div className="inner-sec">
            <div className="row">
              <div className="col-10" style={{ backgroundColor: "#1f2327" }}>
                <OrderStatus />
                <Card />
                <OrderThumbnail />
              </div>
              <div className="col-2 helo">
                <div className="sortitem">
                  <Rightbar sort={sort} setSort={setSort} />
                  <Chat />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
