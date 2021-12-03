/* eslint-disable no-unused-vars */
import React from "react";
import classname from "classnames";
import { useHistory } from "react-router-dom";
import CardRiderOff from "../../assets/img/CardRiderOff.svg";
import share from "../../assets/img/share.svg";
import CardPrinterOff from "../../assets/img/CardPrinterOff.svg";
import { cardInfo } from "../../json/db";

const Card = () => {
  const history = useHistory();

  return (
    <div className="row">
      <div className="col-12">
        <div className="row cards ">
          {cardInfo.map((card) => {
            const {
              id,
              color,
              title,
              orderStatus,
              statusCode,
              cardID,
              item,
              status,
              dropTitle,
              drop1,
              drop2,
              drop3,
              dummy,
              count,
            } = card;
            return (
              <div className="col-3 panelhover" key={id}>
                <div className="card">
                  <div className="card-body">
                    <div>
                      <h5
                        className={classname("card-title", {
                          "card-title-1": color === "yellow",
                          "card-title-2": color === "purple",
                          "card-title-3": color === "green",
                          "card-title-4": color === "red",
                        })}
                      >
                        {title}
                      </h5>
                    </div>
                    <div className="card-text">
                      <div className="card-orderstsus">
                        <p
                          className={classname("", {
                            tabletext: color === "yellow",
                            textpcolor4: color === "purple",
                            tabletext2: color === "green",
                            tabletext3: color === "red",
                          })}
                        >
                          {orderStatus}
                        </p>
                        <p
                          className={classname("", {
                            tabletext: color === "yellow",
                            textpcolor4: color === "purple",
                            tabletext2: color === "green",
                            tabletext3: color === "red",
                          })}
                        >
                          {statusCode}
                        </p>
                      </div>
                      <p className="usrname">{cardID}</p>
                      <div className="card-delivry">
                        <h2>{item}</h2>
                        <p>{status}</p>
                      </div>
                      <div className="cardselect-dropdown">
                        <select title="Pick a number" className="selectpicker">
                          <option>{dropTitle}</option>
                          <option>{drop1}</option>
                          <option>{drop2}</option>
                          <option>{drop3}</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="itemsname">
                    <ul>
                      <li className="itemname-title">{dummy}</li>
                      <li className="itemdetail">
                        <span>00</span> {dummy} <br /> {dummy} {dummy}
                      </li>
                      <li className="itemname-title">{dummy}</li>
                      <li className="itemdetail">
                        <span>{count}</span> {dummy} <br /> {dummy} {dummy}
                      </li>
                    </ul>
                  </div>
                  <div className="riderstatus">
                    <div className="div">
                      <img src={CardRiderOff} alt="" />
                    </div>
                    <div className="div">
                      <img src={share} alt="" />
                    </div>
                    <div className="div">
                      <img src={CardPrinterOff} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Card;
