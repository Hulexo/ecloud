import React from "react";
import { Link } from "react-router-dom";
import { tableData6 } from "../../json/db";

const TopItemsTable = () => {
  return (
    <div className="">
      <div className="platform-performance">
        <div className="dropdown helo">
          <select className="form-select" aria-label="">
            <option defaultValue>Top Items</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div className="menu-icon">
          <Link to="#">
            <i className="fal fa-ellipsis-h"></i>
          </Link>
        </div>
      </div>
      <div className="performnce-body">
        <Table />
      </div>
    </div>
  );
};
const Table = () => {
  return (
    <table className="table table-borderless">
      <thead>
        <tr>
          <th scope="col">Quantity</th>
        </tr>
      </thead>
      <tbody>
        <Tr />
      </tbody>
    </table>
  );
};
const Tr = () => {
  return (
    <>
      {tableData6.map((data) => {
        const { id, name, Amount } = data;
        return (
          <tr key={id}>
            <th scope="row">{Amount}</th>
            <td>{name}</td>
            <td>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "100%" }}
                  aria-valuenow="100"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </td>
          </tr>
        );
      })}
    </>
  );
};

export default TopItemsTable;
