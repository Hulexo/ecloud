/* eslint-disable array-callback-return */
import React from "react";
import DG from "../../assets/img/DG.svg";
// import UR from "../../assets/img/UR.svg";

const PrograssBarCom = () => {
  let readings = [
    {
      name: "",
      value: 40,
      values2: "12",
      massege: "others",
      massege2: "842K",
      color: "#023e8a",
    },
    {
      name: "",
      value: 30,
      values2: "15",
      massege: "Burger",
      massege2: "42K",
      color: "#4361ee",
    },
    {
      name: "",
      value: 20,
      values2: "75",
      massege: "Pizza",
      massege2: "2K",
      color: "#0077b6",
    },
    {
      name: "",
      value: 10,
      values2: "2",
      massege: "Sushi",
      massege2: "0.1K",
      color: "#bdb2ff",
    },
  ];
  let values =
    readings &&
    readings.length &&
    readings.map((item, i) => {
      if (item.value > 0) {
        return (
          <div
            className="value"
            style={{ color: item.color, width: item.value + "%" }}
            key={i}
          >
            <span>{item.value}%</span>
          </div>
        );
      }
    });

  let calibrations =
    readings &&
    readings.length &&
    readings.map((item, i) => {
      if (item.value > 0) {
        return (
          <div
            className="graduation"
            style={{ color: item.color, width: item.value + "%" }}
            key={i}
          >
            <span>|</span>
          </div>
        );
      }
    });

  let bars =
    readings &&
    readings.length &&
    readings.map((item, i) => {
      if (item.value > 0) {
        return (
          <div
            className="bar "
            style={{ backgroundColor: item.color, width: item.value + "%" }}
            key={i}
          ></div>
        );
      }
    });

  let massage =
    readings &&
    readings.length &&
    readings.map((item, i) => {
      if (item.value > 0) {
        return (
          <div
            className="value"
            style={{ color: item.color, width: item.value + "%" }}
            key={i}
          >
            <span>{item.massege}</span>
          </div>
        );
      }
    });

  let values2 =
    readings &&
    readings.length &&
    readings.map((item, i) => {
      if (item.value > 0) {
        return (
          <div
            className="value"
            style={{ color: item.color, width: item.value + "%" }}
            key={i}
          >
            <span className="customtext">
              <img src={DG} alt="" />
              <span style={{ color: "#52d674" }}>{item.values2}%</span>
            </span>
          </div>
        );
      }
    });

  let massege2 =
    readings &&
    readings.length &&
    readings.map((item, i) => {
      if (item.value > 0) {
        return (
          <div
            className="value"
            style={{ color: item.color, width: item.value + "%" }}
            key={i}
          >
            <span>{item.massege2}</span>
          </div>
        );
      }
    }, this);

  return (
    <div className="multicolor-bar">
      <div className="values">{massage === "" ? "" : massage}</div>
      <div className="values">{values === "" ? "" : values}</div>
      <div className="scale">{calibrations === "" ? "" : calibrations}</div>
      <div className="bars">{bars === "" ? "" : bars}</div>
      <div className="values">{values2 === "" ? "" : values2}</div>
      <div className="values">{massege2 === "" ? "" : massege2}</div>
    </div>
  );
};

export default PrograssBarCom;
