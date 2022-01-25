import React from "react";
import { sidbarInfo } from "../../json/db";

const Rightbar = () => {
  return (
    <div className="panelhover">
      <select className="form-select" aria-label="">
        <option defaultValue>sort by</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
      <div className="mt-2">
        {sidbarInfo.map((data) => {
          const { id, dummy, count } = data;

          return (
            <div className="itemsname" key={id}>
              <ul>
                <li className="itemname-title"> {dummy}</li>
                <li className="itemdetail">
                  <span>{count}</span>
                  {dummy} {dummy}
                  <br />
                  {dummy} {dummy}
                </li>
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Rightbar;
