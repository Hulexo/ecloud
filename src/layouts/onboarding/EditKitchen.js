import React from "react";
import Header from "../../components/reuseable/Header";
import BasicInformation from "../../components/reuseable/BasicInformation";
import Branch1 from "../../components/reuseable/Branch1";
import AddRow from "../../components/reuseable/AddRow";
import SearchSort from "../../components/reuseable/SearchSort";
import CategoryTable from "../../components/reuseable/CategoryTable";
import AddRowRight from "../../components/reuseable/AddRowRight";
import UploadMenu from "../../components/reuseable/UploadMenu";

const EditKitchen = () => {
  return (
    <div className="container-fluid ">
      <div className="row">
        <div className="col-12">
          <div className="company-catageri px-5">
            <Header />
            <BasicInformation />
            <Branch1 />
            <AddRow />
            <SearchSort />
            <CategoryTable />
            <AddRowRight />
            <UploadMenu />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditKitchen;
