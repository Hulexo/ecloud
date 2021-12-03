import React from "react";
import oval from "../../assets/img/Oval.svg";
import chatoff from "../../assets/img/ChatOff.svg";
import { TableData } from "../../json/db";

const FilterTable = () => {
  return (
    <div className="table-responsive">
      <Table />
    </div>
  );
};

const Table = () => {
  return (
    <table className="table table-bordered table-hover">
      <thead>
        <tr>
          <th scope="col">Num</th>
          <th scope="col">Brand</th>
          <th scope="col">Menu</th>
          <th scope="col">Total</th>
          <th scope="col">Rider</th>
          <th scope="col">Preparing</th>
          <th scope="col">Amount</th>
          <th scope="col">Profit</th>
          <th scope="col">Time</th>
          <th scope="col">Date</th>
          <th scope="col">Cancel</th>
          <th scope="col">Chat</th>
        </tr>
      </thead>
      <tbody>
        <TableBody />
      </tbody>
    </table>
  );
};

const TableBody = () => {
  return (
    <>
      {TableData.map((data) => {
        const {
          id,
          Brand,
          status,
          Menu,
          Total,
          Rider,
          Preparing,
          Amount,
          Profit,
          Time,
          Date,
          Cancel,
        } = data;
        return (
          <tr key={id}>
            <th scope="row">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              {Brand}
            </th>

            <td>{status}</td>
            <td>{Menu}</td>
            <td>{Total}</td>
            <td>
              <img src={oval} className="ridericon" alt="" />
              <span>{Rider}</span>
            </td>
            <td>
              <img src={oval} className="ridericon" alt="" />
              <span>{Preparing}</span>
            </td>
            <td>
              {Amount} <span className="aed">AED</span>
            </td>
            <td>
              {Profit} <span className="aed">AED</span>
            </td>
            <td>{Time}</td>
            <td>{Date}</td>
            <td>
              <img src={oval} className="ridericon" alt="" />
              <span>{Cancel}</span>
            </td>
            <td>
              <img src={chatoff} alt="" />
            </td>
          </tr>
        );
      })}
    </>
  );
};

export default FilterTable;
