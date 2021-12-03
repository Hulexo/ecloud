import React from "react";
import { tableData3 } from "../json/db";
import CY from "../assets/img/CY.svg";
import CR from "../assets/img/CR.svg";
import CDL from "../assets/img/CDL.svg";
import CB from "../assets/img/CB.svg";
import ComplainoffCopy from "../assets/img/ComplainoffCopy.svg";
import ChatOff from "../assets/img/ChatOff.svg";
import Commentsoff from "../assets/img/Commentsoff.svg";
import Star from "../assets/img/Star.png";

const StatusTable = () => {
  return (
    <div className="row">
      <div className="col-lg-12">
        <table className="table  table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Time</th>
              <th scope="col">Date</th>
              <th scope="col">Items</th>
              <th scope="col">Platform</th>
              <th scope="col">Operator</th>
              <th scope="col">Kitchens</th>
              <th scope="col">Preparing</th>
              <th scope="col">Delivery</th>
              <th scope="col">Rider</th>
              <th scope="col">Amount</th>
              <th scope="col">Revenue</th>
              <th scope="col">Cancel</th>
              <th scope="col">offer</th>
              <th scope="col">Nat</th>
              <th scope="col">Order</th>
              <th scope="col">MOst Selling</th>
              <th scope="col">ADD on</th>
              <th scope="col">Statuse</th>
              <th scope="col">Comp</th>
              <th scope="col">Chat</th>
              <th scope="col">info</th>
            </tr>
          </thead>
          <tbody>
            <TableBody />
          </tbody>
        </table>
      </div>
    </div>
  );
};
const TableBody = () => {
  return (
    <>
      {tableData3.map((data) => {
        const {
          id,
          Time,
          Date,
          Items,
          Platform,
          Operator,
          Kitchens,
          Preparing,
          Delivery,
          Rider,
          Amount,
          Revenue,
          Cancel,
          offer,
          Nat,
          Statuse,
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
            <td>{Time}</td>
            <td>{Date}</td>
            <td>{Items}</td>
            <td>{Platform}</td>
            <td>
              <img src={CY} className="ridericon" alt="" />
              {Operator}
              <span />
            </td>
            <td>{Kitchens}</td>
            <td>
              <img src={CY} className="ridericon" alt="" />
              {Preparing}
              <span />
            </td>
            <td>{Delivery}</td>

            <td>
              <img src={CR} className="ridericon" alt="" />
              {Rider}
              <span />
            </td>
            <td>
              {Amount} <span className="aed">AED</span>
            </td>
            <td>
              {Revenue} <span className="aed">AED</span>
            </td>

            <td>
              <img src={CR} className="ridericon" alt="" />
              {Cancel === "Q" ? <span>Q</span> : <></>}
              <span />
            </td>
            <td>
              <img
                src={Star}
                className="ridericon"
                alt=""
                style={{ width: "20px" }}
              />
              {offer}
              <span />
            </td>

            <td>{Nat}</td>

            <td>
              <ul className="d-flex justify-content-between align-item-center">
                <li>
                  <img src={CDL} width="6px" alt="" />
                </li>
                <li>
                  <img src={CDL} width="6px" alt="" />
                </li>
                <li>
                  <img src={CB} width="6px" alt="" />
                </li>
                <li>
                  <img src={CY} width="6px" alt="" />
                </li>
                <li>
                  <img src={CY} width="6px" alt="" />
                </li>
              </ul>
            </td>

            <td>
              <ul>
                <li>
                  <span className="fa fa-star checked fa-0x"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                </li>
              </ul>
            </td>

            <td>
              <span className="infoalarm bg-primary">+</span>
            </td>
            {Statuse === "new" ? (
              <td className="">
                <li className="tagone">New</li>
              </td>
            ) : (
              <td className="">
                <li className="tagthree">No rider</li>
              </td>
            )}

            <td>
              <img src={ComplainoffCopy} alt="" />
            </td>
            <td>
              <img src={ChatOff} alt="" />
            </td>
            <td>
              <img src={Commentsoff} alt="" />
            </td>
          </tr>
        );
      })}
    </>
  );
};

export default StatusTable;
