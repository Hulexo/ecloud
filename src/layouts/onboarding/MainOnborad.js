import React from "react";
import Leftbar from "../../components/reuseable/Leftbar";
import Header from "../../components/reuseable/HeadIcons";
import TotaleKitchen from "../../components/reuseable/TotaleKitchen";
import UserInfoTable from "../../components/UserInfoTable";

const MainOnborad = () => {
  return (
    <div>
      <div className="container-fluid ">
        <section className="kitchen-page">
          <div className="row">
            <div className="col-lg-1">
              <Leftbar />
            </div>
            <div className="col-lg-11">
              <div className="menuorder-bg">
                <Header />
                <TotaleKitchen />
                <UserInfoTable />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MainOnborad;
