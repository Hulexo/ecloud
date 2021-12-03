import React from "react";
import BasicInfoCol5 from "../../components/reuseable/BasicInfoCol5";
import MenuCol7 from "../../components/reuseable/MenuCol7";
import ButtonsThree from "../../components/reuseable/ButtonsThree";

const KitchenUpload1 = () => {
  return (
    <div className="container-fluid">
      <section className="menu-informations">
        <div className="row">
          <div div className="col-lg-5">
            <BasicInfoCol5 />
          </div>
          <div div className="col-lg-7">
            <MenuCol7 />
          </div>
        </div>
        <div className="row">
          <ButtonsThree />
        </div>
      </section>
    </div>
  );
};

export default KitchenUpload1;
