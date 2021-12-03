import React from "react";
import { Helo } from "./Helo";
import UR from "../../assets/img/UR.svg";
import Capture2 from "../../assets/img/Capture2.PNG";

const TitleCard3by2 = () => {
  return (
    <>
      <div className="col-lg-2">
        <Card />
        <Card />
      </div>
      <div className="col-lg-2">
        <Card />
        <Card />
      </div>
      <div className="col-lg-2">
        <Card />
        <Card />
      </div>
      <div class="col-lg-6 charts-cards mt-3">
        <Card2 />
      </div>
    </>
  );
};
const Card = () => {
  return (
    <>
      <div class="charts-cards mt-3">
        <h1>Card Title</h1>
        <h4>
          000,000,00 <span class="aed">AED</span>
        </h4>
        <img src={UR} width="12px" alt="" />
        <span class="tabletext3">1.23%</span>
        <p class="textpcolor">Since last month</p>
      </div>
    </>
  );
};
const Card2 = () => {
  return (
    <>
      <div class="col-lg-3 helo mb-3">
        <Helo />
      </div>
      <div class="chartgraps">
        <img src={Capture2} class="img-fluid" alt="" />
      </div>
    </>
  );
};

export default TitleCard3by2;
