import React from "react";
import { Link } from "react-router-dom";
import DG from "../../assets/img/DG.svg";
import UR from "../../assets/img/UR.svg";
import { tableData5 } from "../../json/db";

const PerfronmceStatusTable = () => {
  return (
    <div className="performnce-status">
      <div className="platform-performance">
        <div className="dropdown helo">
          <select className="form-select" aria-label="">
            <option defaultValue>Platform Performence</option>
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
      <Table />
    </div>
  );
};
const Table = () => {
  return (
    <div className="performnce-body">
      <table className="table table-borderless">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Total</th>
            <th scope="col">Amount</th>
            <th scope="col">Delayed</th>
            <th scope="col">Ontime</th>
            <th scope="col">Cancel</th>
            <th scope="col">Complained</th>
            <th scope="col">offer</th>
          </tr>
        </thead>
        <tbody>
          <Tr />
        </tbody>
      </table>
    </div>
  );
};
const Tr = () => {
  return (
    <>
      {tableData5.map((data) => {
        const {
          id,
          persent,
          img,
          name,
          Total,
          Amount,
          Delayed,
          Ontime,
          Cancel,
          Complained,
          offer,
        } = data;
        return (
          <tr key={id}>
            <th scope="row">
              <span className="tabletext2">{persent}</span>
              <span>
                {img === "UR" ? (
                  <img src={UR} alt="" />
                ) : (
                  <img src={DG} alt="" />
                )}
              </span>
              <span>{name}</span>
            </th>
            <td>{Total}</td>
            <td>{Amount}</td>
            <td>{Delayed}</td>
            <td>{Ontime}</td>
            <td>{Cancel}</td>
            <td>{Complained}</td>
            <td>{offer}</td>
          </tr>
        );
      })}
    </>
  );
};

export default PerfronmceStatusTable;
