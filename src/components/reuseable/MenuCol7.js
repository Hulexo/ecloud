import React from "react";
import { CardItems } from "../../json/db";
import Star from "../../assets/img/Star.svg";
import CDL from "../../assets/img/CDL.svg";
import CB from "../../assets/img/CB.svg";
import CY from "../../assets/img/CY.svg";
import { Link, useLocation } from "react-router-dom";

const MenuCol7 = () => {
  const location = useLocation();
  const currentUrl = location.pathname;
  return (
    <>
      <div className="starters-menus">
        {currentUrl !== "/page-18" && (
          <>
            <h2 className="text-white">
              Menu
              {currentUrl === "/page-17" && (
                <div className="dropdown-tabs">
                  <p>
                    <Link to="#">
                      <span className="w3-tag1 w3-teal">ADD +</span>
                      <span className="w3-tag2 w3-teal">Edit +</span>
                      <span className="w3-tag3 w3-teal">Cancel +</span>
                    </Link>
                  </p>
                </div>
              )}
            </h2>
          </>
        )}
        <table className="table">
          <thead>
            <tr>
              <th scope="col">STARTERS</th>
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <Tr />
          </tbody>
        </table>
      </div>
    </>
  );
};

const Tr = () => {
  return (
    <>
      {CardItems.map((data) => {
        const { id, name, price, img } = data;
        return (
          <tr key={id}>
            <th scope="row">{name}</th>
            <td>
              <span className="aed">AED</span>
              {price}
              {img === "yes" && (
                <div className="text-right d-inline-flex mx-3">
                  <img
                    style={{ float: "right" }}
                    src={Star}
                    width="16px"
                    alt=""
                  />
                </div>
              )}
            </td>
            <td>
              <div className="itemlists">
                <ul className="d-flex">
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
              </div>
            </td>
            <td>
              <div className="starters-price d-flex justify-content-between align-item-center">
                <div className="rating-star">
                  <li>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                    <span className="infoalarm bg-primary">+</span>
                    <span className="infoalarm">𝒊</span>
                  </li>
                </div>
              </div>
            </td>
          </tr>
        );
      })}
    </>
  );
};

export default MenuCol7;
