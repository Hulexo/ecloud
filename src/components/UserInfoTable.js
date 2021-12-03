import React from "react";
import Pagination from "./reuseable/Pagination";
import { Link } from "react-router-dom";
import CLDB from "../assets/img/CLDB.svg";
import { tableData4 } from "../json/db";

const UserInfoTable = () => {
  return (
    <>
      <div className="row mt-5">
        <div className="col-12">
          <table className="table table-hover table-responsive">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">Name</th>
                <th scope="col">Spec</th>
                <th scope="col">Bar</th>
                <th scope="col">Cusin</th>
                <th scope="col">Contact</th>
                <th scope="col">Pos</th>
                <th scope="col">Mobile</th>
                <th scope="col">Emirats</th>
                <th scope="col">Brand</th>
                <th scope="col">Start</th>
                <th scope="col">End</th>
                <th scope="col">Phone</th>
                <th scope="col">Show</th>
                <th scope="col">Edit</th>
              </tr>
            </thead>
            <tbody>
              <Tr />
            </tbody>
          </table>
        </div>
      </div>
      <Pagination />
    </>
  );
};
const Tr = () => {
  return (
    <>
      {tableData4.map((data) => {
        const {
          id,
          Name,
          Spec,
          Bar,
          Cusin,
          Contact,
          Pos,
          Mobile,
          Emirats,
          Brand,
          Start,
          End,
          Phone,
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
            </th>
            <td>{Name}</td>
            <td>{Spec}</td>
            <td>{Bar}</td>
            <td>{Cusin}</td>
            <td>{Contact}</td>
            <td>{Pos}</td>
            <td>{Mobile}</td>
            <td>{Emirats}</td>
            <td>{Brand}</td>
            <td>{Start}</td>
            <td>{End}</td>
            <td>{Phone}</td>
            <td>
              <img src={CLDB} alt="" />
            </td>
            <td>
              <Link to="#">
                <i className="far fa-edit"></i>
              </Link>
            </td>
          </tr>
        );
      })}
    </>
  );
};

export default UserInfoTable;
