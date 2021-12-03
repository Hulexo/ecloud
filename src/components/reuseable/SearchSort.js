import React from "react";
import { Helo, HashSearch } from "./Helo";
import downloadOff from "../../assets/img/downloadOff.svg";

const SearchSort = () => {
  return (
    <div className="row menuorder-bg mt-2">
      <div className="col-3">
        <Helo />
      </div>
      <div className="col-2">
        <HashSearch />
      </div>
      <div className="col-7 text-end">
        <img src={downloadOff} alt="" />
      </div>
    </div>
  );
};

export default SearchSort;
