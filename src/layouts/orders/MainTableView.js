import React from "react";
import Sidebar from "../../components/reuseable/Sidebar";
import Header from "../../components/reuseable/Header";
import OrderStatus from "../../components/reuseable/OrderStatus";
import OrderMenuCards from "../../components/reuseable/OrderMenuCards";
import StatusSearchDate from "../../components/reuseable/StatusSearchDate";
import TableTwo from "../../components/reuseable/TableTwo";
import MenuOrderDetailsCard from "../../components/reuseable/MenuOrderDetailsCard";
import AddIcon from "../../components/reuseable/AddIcon";

const MainTableView = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-1">
          <Sidebar />
        </div>
        <div className="col-11">
          <Header />
          <section className="userorder-details">
            <div className="row mt-3">
              <div className="col-lg-9">
                <div className="order-cards">
                  <OrderStatus />
                  <OrderMenuCards />
                  <StatusSearchDate />
                  <TableTwo />
                </div>
              </div>
              <div className="col-lg-3 menuorder-detailscard ">
                <MenuOrderDetailsCard />
              </div>
            </div>
          </section>
        </div>
      </div>
      <AddIcon />
    </div>
  );
};

export default MainTableView;
