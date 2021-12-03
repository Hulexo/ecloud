import React from "react";
import Star from "../../assets/img/Star.svg";
import CR from "../../assets/img/CR.svg";
import CY from "../../assets/img/CY.svg";
import { ChickenAndPotatoesCardData } from "../../json/db";

const ChickenAndPotatoesCard = () => {
  return (
    <div className="row">
      <div className="col-2">
        <Row1 />
      </div>
      <div className="col-2">
        <Row1 />
      </div>
    </div>
  );
};
const Row1 = () => {
  return (
    <>
      {ChickenAndPotatoesCardData.map((data) => {
        const { id, p, star, stausImg, price, ratting, plus, i } = data;
        return (
          <div class="starters py-3 mt-2" key={id}>
            <div class="d-flex justify-content-between align-item-center">
              <p class="textpcolor">{p}</p>

              {star === "yes" && (
                <div class="text-right">
                  <img src={Star} alt="" />
                </div>
              )}
            </div>
            <ul>
              {stausImg === "yes" && (
                <li class="py-2 px-2">
                  <img src={CR} width="6px" alt="" />
                  <img src={CY} width="6px" alt="" />
                  <img src={CY} width="6px" alt="" />
                </li>
              )}

              <br />
              <li>
                {price} <span class="aed">AED</span>
              </li>
              <br />
              <div class="starters-price d-flex justify-content-between align-item-center py-2 ">
                <li>
                  {ratting === "yes" && (
                    <>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star"></span>
                      <span class="fa fa-star"></span>
                    </>
                  )}
                  {plus === "yes" && (
                    <span class="infoalarm bg-primary">+</span>
                  )}
                  {i === "yes" && <span class="infoalarm">𝒊</span>}
                </li>
              </div>
            </ul>
          </div>
        );
      })}
    </>
  );
};

export default ChickenAndPotatoesCard;
