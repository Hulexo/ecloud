import React from "react";
import Sidebar from "../../components/reuseable/Sidebar";
import Header from "../../components/reuseable/Header";
import Filters from "../../components/reuseable/Filters";
import Rightbar from "../../components/reuseable/Rightbar";
import Chat from "../../components/reuseable/Chat";
import Tags from "../../components/reuseable/Tags";
import FilterTable from "../../components/reuseable/FilterTable";
import Summary from "../../components/Summary";

const TableView1 = () => {
  return (
    <div className="container-fluid">
      <div className="row g-0">
        <div className="col-1">
          <Sidebar />
        </div>
        <div className="col-11">
          <Header />
          <div className="row">
            <div className="col-8 mt-3 g-2">
              <div className="mainsection ">
                <Filters />
                <Tags />
                <div className="row table-sorting">
                  <FilterTable />
                </div>
              </div>
            </div>
            <div className="col-2 g-2 mt-3">
              <Summary />
            </div>
            <div className="col-2 mt-3 g-2 helo">
              <div className="sortitem">
                <Rightbar />
                <Chat />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableView1;
