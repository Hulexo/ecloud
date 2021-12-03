import React from "react";
import CDL from "../../assets/img/CDL.svg";
import CB from "../../assets/img/CB.svg";
import CY from "../../assets/img/CY.svg";
import Star from "../../assets/img/Star.svg";

const GourmetCard = () => {
  return (
    <div className="col-lg-5">
      <div className="starters">
        <div className="starters-icons">
          <h4 className="textpcolor">Gourmet Chicken Mediterranean Pizza</h4>

          <div className="itemlists">
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
              <li>
                <img style={{ float: "right" }} src={Star} alt="" />
              </li>
            </ul>
          </div>
        </div>

        <p className="item-listdes">
          Olives oil sauce, chopped garlic, fresh spinach leaves, grilled
          chicken, sun dried tomatoes, feta cheese, zesty herbs
        </p>

        <div
          className="
                    starters-price
                    d-flex
                    justify-content-between
                    align-item-center
                  "
        >
          <h1 className="textpcolor">
            2541 <span className="aed"> AED</span>
          </h1>
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
      </div>
    </div>
  );
};

export default GourmetCard;
