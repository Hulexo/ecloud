import React from "react";
import { tableData2 } from "../../json/db";
import Oval from "../../assets/img/Oval.svg";
import Commentsoff from "../../assets/img/Commentsoff.svg";
import ChatOff from "../../assets/img/ChatOff.svg";
import Complainoff from "../../assets/img/Complainoff.svg";

const TableTwo = (props) => {
  return (
    <div className="row">
      <div className="col-lg-12">
        <div className="orderdetail-tables">
          <table className="table table-hover table-responsive">
            <tbody>
              <TableRow />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
const TableRow = (props) => {
  return (
    <>
      {tableData2.map((data) => {
        const {
          id,
          condition,
          time,
          orderTime,
          orderValue,
          customerName,
          customerId,
          customerNo,
          items,
          dish,
          adress,
          pending,
          others,
          price,
          deliveryCharges,
          currentStatus,
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
            <td>
              {orderTime}
              <span>{orderValue}</span>
            </td>
            <td>
              {customerName} <span>{customerId}</span>
            </td>
            <td>
              {customerNo} <span>{items}</span>
            </td>
            <td>
              {dish}
              <span>{adress}</span>
            </td>
            <td>
              <img src={Oval} className="ridericon" alt="" />
              {pending}
              {condition === "doneyellow" ? (
                <span className="tabletext">Done</span>
              ) : condition === "progblue" ? (
                <span>
                  <div className="progress">
                    <div
                      className="progress-bar "
                      role="progressbar"
                      aria-valuenow="0"
                      style={{ width: "25%" }}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </span>
              ) : condition === "progred" ? (
                <span>
                  <div className="progress">
                    <div
                      className="progress-bar  bg-danger"
                      role="progressbar"
                      aria-valuenow="0"
                      style={{ width: "25%" }}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </span>
              ) : condition === "donered" ? (
                <span className="text-danger">Done</span>
              ) : (
                <></>
              )}
            </td>
            <td>
              {others} <span>{pending}</span>
            </td>
            <td>
              {price} <span>{deliveryCharges}</span>
            </td>
            {currentStatus === "new" ? (
              <td>
                <li className="tagone"> New</li>
              </td>
            ) : currentStatus === "preparing" ? (
              <td>
                <span>{time}</span>
                <li className="tagtwo">Preparing</li>
              </td>
            ) : currentStatus === "norider" ? (
              <td>
                <span>{time}</span> <li className="tagthree">No rider</li>
              </td>
            ) : currentStatus === "ontheway" ? (
              <td>
                <span>{time}</span> <li className="tagfour">on the way</li>
              </td>
            ) : currentStatus === "ontime" ? (
              <td>
                <span>{time}</span> <li className="tagthree">ontime</li>
              </td>
            ) : (
              <></>
            )}
            <td className="chatsicons">
              <img src={Commentsoff} alt="" />
              <img src={ChatOff} alt="" />
              <img src={Complainoff} alt="" />
            </td>
          </tr>
        );
      })}
    </>
  );
};

export default TableTwo;
