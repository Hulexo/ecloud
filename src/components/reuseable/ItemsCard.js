import React from "react";
import { CardItems } from "../../json/db";
import TileCardItems from "./TileCardItems";
import MyVerticallyCenteredModal from "./PopUpModel";
import CDL from "../../assets/img/CDL.svg";
import CB from "../../assets/img/CB.svg";
import CY from "../../assets/img/CY.svg";
import Star from "../../assets/img/Star.svg";

const ItemsCard = ({ active }) => {
  return (
    <div className="tab-content">
      {active === "grid" && <GridCard />}
      <TileCardItems active={active} />
    </div>
  );
};
const GridCard = () => {
  return (
    <div className="tab-pane active" id="home">
      <div className="row">
        <div className="col-lg-12 p-4 order-tabsdetails">
          <div className="mid">
            <h1> starters</h1>
          </div>
          <div className="row">
            <Card1 />
          </div>
          <div className="row">
            <h1 className="textpcolor horizental">Main course</h1>
            <Card2 />
          </div>
        </div>
      </div>
    </div>
  );
};
const Card1 = () => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      {CardItems.map((data) => {
        const { id, name, price } = data;
        return (
          <div
            className="col-lg-3 mt-3"
            key={id}
            onClick={() => setModalShow(true)}
          >
            <div className=" starters">
              <div className="starters-icons">
                <ul>
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
                <div className="text-right">
                  <img style={{ float: "right" }} src={Star} alt="" />
                </div>
              </div>

              <h4 className="textpcolor">{name}</h4>

              <div className="starters-price d-flex justify-content-between align-item-center">
                <h1 className="textpcolor">
                  {price} <span className="aed"> AED</span>
                </h1>
                <div className="rating-star">
                  <li>
                    <span className="fa fa-star checked fa-0x"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                    <span className="infoalarm bg-primary">+</span>
                    <span className="infoalarm">𝒊</span>
                  </li>
                </div>
              </div>
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

const Card2 = () => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      {CardItems.map((data) => {
        const { id, name, price } = data;
        return (
          <div
            className="col-lg-3 mt-3"
            key={id}
            onClick={() => setModalShow(true)}
          >
            <div className=" starters">
              <ul className="d-flex">
                <li>
                  <img src="./assets/img/CDL.svg" width="6px" alt="" />
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

              <h4 className="textpcolor">{name}</h4>

              <div className="starters-price d-flex justify-content-between align-item-center">
                <h1 className="textpcolor">
                  {price} <span className="aed"> AED</span>
                </h1>
                <div className="rating-star">
                  <li>
                    <span className="fa fa-star checked fa-0x"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                    <span className="infoalarm bg-primary">+</span>
                    <span className="infoalarm">𝒊</span>
                  </li>
                </div>
              </div>
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

export default ItemsCard;
