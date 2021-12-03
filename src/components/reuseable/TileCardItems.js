import React from "react";
import { CardItems } from "../../json/db";
import MyVerticallyCenteredModal from "./PopUpModel";
import CDL from "../../assets/img/CDL.svg";
import CB from "../../assets/img/CB.svg";
import CY from "../../assets/img/CY.svg";
import Star2 from "../../assets/img/Star2.svg";

const TileCardItems = ({ active }) => {
  return <div>{active === "tile" && <TileCard />}</div>;
};
const TileCard = () => {
  return (
    <div class="tab-pane" id="profile">
      <div class="row">
        <div class="col-lg-12 p-4 order-tabsdetails">
          <div class="mid">
            <h1> starters</h1>
          </div>
          <div class="row">
            <TileCard1 />
          </div>
          <h1 class="textpcolor horizental">Main course</h1>
          <div class="row">
            <div className="mt-3"></div>
            <TileCard2 />
          </div>
        </div>
      </div>
    </div>
  );
};
const TileCard1 = () => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      {CardItems.map((data) => {
        const { id, name, price, img } = data;
        return (
          <div
            class="all-detailsorders d-flex justify-content-between align-item-center"
            key={id}
            onClick={() => setModalShow(true)}
          >
            <h1 class="item-title">{name}</h1>
            <div class="all-detailsorder-menu d-flex justify-content-between">
              <h1>
                {price} <span>AED</span>
              </h1>
              <ul class="d-flex">
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
              {img === "yes" && (
                <div class="all-detailsorders-staricon">
                  <img src={Star2} alt="" />
                </div>
              )}
              <ul>
                <li>
                  <span class="fa fa-star checked fa-0x"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                  <span class="infoalarm bg-primary">+</span>
                  <span class="infoalarm">𝒊</span>
                </li>
              </ul>
            </div>
          </div>
        );
      })}
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};
const TileCard2 = () => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      {CardItems.map((data) => {
        const { id, name, price, img } = data;
        return (
          <div
            class="all-detailsorders d-flex justify-content-between align-item-center"
            key={id}
            onClick={() => setModalShow(true)}
          >
            <h1 class="item-title">{name}</h1>
            <div class="all-detailsorder-menu d-flex justify-content-between">
              <h1>
                {price} <span>AED</span>
              </h1>
              <ul class="d-flex">
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
              {img === "yes" ? (
                <div class="all-detailsorders-staricon">
                  <img src={Star2} alt="" />
                </div>
              ) : (
                <></>
              )}
              <ul>
                <li>
                  <span class="fa fa-star checked fa-0x"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                  <span class="infoalarm bg-primary">+</span>
                  <span class="infoalarm">𝒊</span>
                </li>
              </ul>
            </div>
          </div>
        );
      })}
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default TileCardItems;
