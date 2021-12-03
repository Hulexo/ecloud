import React from "react";
import MenuComparison from "../../components/reuseable/MenuComparison";
import StartarTable from "../../components/reuseable/StartarTable";
import StarterTable2 from "../../components/reuseable/StarterTable2";
import { Buttons, SavaButtons } from "../../components/reuseable/Helo";

const CompareMenu3 = () => {
  return (
    <div className="container-fluid">
      <section className="menucomarison-tool comparison-inner">
        <MenuComparison />
        <div className="row justify-content-center">
          <div className="col-4">
            <StartarTable />
          </div>
          <div class="col-lg-2">
            <Buttons />
          </div>
          <div className="col-4">
            <StarterTable2 />
          </div>
          <div className="row">
            <SavaButtons />
          </div>
        </div>
      </section>
    </div>
  );
};

export default CompareMenu3;
