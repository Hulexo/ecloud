import React from "react";
import { Link } from "react-router-dom";
import Tab1 from "../../assets/img/Kitchendashoff.svg";
import Tab2 from "../../assets/img/Orderson.svg";
import Tab3 from "../../assets/img/KitchenTableoff.svg";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="kitchendash">
        <Link to="#">
          <img src={Tab1} className="img-fluid" alt="" />
        </Link>
      </div>
      <div className="orderon">
        <Link to="#">
          <img src={Tab2} alt="" />
        </Link>
      </div>
      <div className="kitchentableon">
        <Link to="#">
          <img src={Tab3} className="img-fluid" alt="" />
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
