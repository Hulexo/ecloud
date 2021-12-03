import React from "react";
import { Icons } from "./Helo";
import Capture from "../../assets/img/Capture.PNG";

const LegendaAera = () => {
  return (
    <>
      <div class="col-lg-10 padding-0">
        <img src={Capture} class="chartgrps" alt="" />
      </div>
      <div class="col-lg-2 padding-0">
        <Icons />
      </div>
    </>
  );
};

export default LegendaAera;
