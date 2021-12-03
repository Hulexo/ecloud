/* eslint-disable no-lone-blocks */
import React from "react";
import { smallCardDetail, largeCardDetail } from "../json/db";

const ManuCardDetail = () => {
  return (
    <div className="row">
      <div className="col-lg-3 ">
        <ColOneCard />
      </div>
      <div className="col-lg-3">
        <ColTwoCard />
      </div>
      <div className="col-lg-3">
        <ColOneCard />
      </div>
      <div className="col-lg-3">
        <ColTwoCard />
      </div>
    </div>
  );
};

const ColOneCard = () => {
  return (
    <div className="card-blog mt-3">
      {smallCardDetail.map((data) => {
        const { id, title, lable, price, casids, notAvail } = data;
        return (
          <div key={id} className="panelhover">
            <div className="menu-title">{title}</div>
            <ul>
              <li>{lable}</li>
              <div className="rating-star">
                <li className="menuorderprice">{price}</li>
                <li>
                  <span className="fa fa-star checked fa-0x"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                  <span className="infoalarm">𝒊</span>
                </li>
              </div>
            </ul>
            <ul>
              <li>{casids}</li>
              <div className="rating-star">
                <li className="menuorderprice">{price} </li>
                <li>
                  <span className="infoalarm">𝒊</span>
                </li>
              </div>
            </ul>
            <ul>
              <li>{casids}</li>
              <div className="rating-star">
                <li className="menuorderprice">{price} </li>
                <li>
                  <span className="infoalarm">𝒊</span>
                </li>
              </div>
            </ul>
            <ul>
              <li>{casids}</li>
              <div className="rating-star">
                <li className="menuorderprice">{price} </li>
                <li>
                  <span className="infoalarm">𝒊</span>
                </li>
              </div>
            </ul>
            <ul>
              <li>{casids}</li>
              <div className="rating-star">
                <li className="menuorderprice">{price} </li>
                <li>
                  <span className="infoalarm">𝒊</span>
                </li>
              </div>
            </ul>
            <ul>
              <li>{casids}</li>
              <div className="rating-star">
                <li className="text-danger">{notAvail}</li>
                <li>
                  <span className="">
                    <i className="fas fa-lock text-danger"></i>
                  </span>
                </li>
              </div>
            </ul>
          </div>
        );
      })}
    </div>
  );
};

const ColTwoCard = () => {
  return (
    <div className="card-blog mt-3">
      {largeCardDetail.map((data) => {
        const { id, title, lable, price, casids, notAvail } = data;
        return (
          <div key={id} className="panelhover">
            <div className="menu-title">{title}</div>
            <ul>
              <li>{lable}</li>
              <div className="rating-star">
                <li className="menuorderprice">{price}</li>
                <li>
                  <span className="fa fa-star checked fa-0x"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                  <span className="infoalarm">𝒊</span>
                </li>
              </div>
            </ul>
            <ul>
              <li>{casids}</li>
              <div className="rating-star">
                <li className="menuorderprice">{price}</li>
                <li>
                  <span className="infoalarm">𝒊</span>
                </li>
              </div>
            </ul>
            <ul>
              <li>{casids}</li>
              <div className="rating-star">
                <li className="menuorderprice">{price}</li>
                <li>
                  <span className="infoalarm">𝒊</span>
                </li>
              </div>
            </ul>
            <ul>
              <li>{casids}</li>
              <div className="rating-star">
                <li className="menuorderprice">{price}</li>
                <li>
                  <span className="infoalarm">𝒊</span>
                </li>
              </div>
            </ul>
            <ul>
              <li>{casids}</li>
              <div className="rating-star">
                <li className="menuorderprice">{price}</li>
                <li>
                  <span className="infoalarm">𝒊</span>
                </li>
              </div>
            </ul>
            <ul>
              <li>{casids}</li>
              <div className="rating-star">
                <li className="text-danger">{notAvail} </li>
                <li>
                  <span className="">
                    <i className="fas fa-lock text-danger"></i>
                  </span>
                </li>
              </div>
            </ul>
            <ul>
              <li>{lable}</li>
              <div className="rating-star">
                <li className="menuorderprice">{price}</li>
                <li>
                  <span className="fa fa-star checked fa-0x"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                  <span className="infoalarm">𝒊</span>
                </li>
              </div>
            </ul>
            <ul>
              <li>{casids}</li>
              <div className="rating-star">
                <li className="menuorderprice">{price}</li>
                <li>
                  <span className="infoalarm">𝒊</span>
                </li>
              </div>
            </ul>
            <ul>
              <li>{casids}</li>
              <div className="rating-star">
                <li className="menuorderprice">{price}</li>
                <li>
                  <span className="infoalarm">𝒊</span>
                </li>
              </div>
            </ul>
            <ul>
              <li>{casids}</li>
              <div className="rating-star">
                <li className="menuorderprice">{price}</li>
                <li>
                  <span className="infoalarm">𝒊</span>
                </li>
              </div>
            </ul>
            <ul>
              <li>{casids}</li>
              <div className="rating-star">
                <li className="menuorderprice">{price}</li>
                <li>
                  <span className="infoalarm">𝒊</span>
                </li>
              </div>
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default ManuCardDetail;
