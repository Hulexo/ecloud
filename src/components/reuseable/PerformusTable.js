import React from "react";
import DG from "../../assets/img/DG.svg";
import UR from "../../assets/img/UR.svg";
import { PerformancePlaform } from "../../json/db";

const PerformusTable = () => {
  return (
    <div className="performnce-body">
      <table className="table table-borderless  table-hover">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">order</th>
            <th scope="col">Sales AED</th>
            <th scope="col">Revenue AED</th>
          </tr>
        </thead>
        <TBody />
      </table>
    </div>
  );
};

const TBody = () => {
  return (
    <tbody>
      <Tr />
    </tbody>
  );
};
const Tr = () => {
  return PerformancePlaform.map((data) => {
    const { id, pesentage, name, order, Sales, Revenue, img } = data;
    return (
      <tr key={id}>
        <th scope="row">
          <span className="tabletext2">{pesentage}</span>
          <span>
            {img === "down" ? <img src={UR} alt="" /> : <img src={DG} alt="" />}
          </span>
          <span>{name}</span>
        </th>
        <td>{order}</td>
        <td>{Sales}</td>
        <td>
          {Revenue}
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
  });
};

export default PerformusTable;
