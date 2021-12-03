import React from "react";
import Sidebar from "../../components/reuseable/Sidebar";
import Header from "../../components/reuseable/Header";
import MenuOrderDetails from "../../components/reuseable/MenuOrderDetails";
import UserDetails from "../../components/reuseable/UserDetails";
import MenuDetails from "../../components/MenuDetails";
import CounterCart from "../../components/reuseable/CounterCart";

const BreackfastCard = () => {
  return (
    <div className="container-fluid">
      <div className="menus">
        <div className="row">
          <div className="col-1">
            <Sidebar />
          </div>
          <div className="col-11">
            <Header />
            <MenuOrderDetails />
            <UserDetails />
            <div className="menu-details">
              <div className="row">
                <MenuDetails />
                <CounterCart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreackfastCard;
