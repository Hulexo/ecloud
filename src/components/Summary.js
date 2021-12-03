import React from "react";
import oval from "../assets/img/Oval.svg";
import CB from "../assets/img/CB.svg";
import CG from "../assets/img/CG.svg";
import Ovalnew from "../assets/img/Ovalnew.svg";
import Delete from "../assets/img/AddtoitemsDelete.svg";
const Summary = () => {
  return (
    <>
      <div className="summary-card panelhover">
        <div className=" summary-info">
          <h1>Summery</h1>
          <p>13 Mar 20 - 13 Apr 22</p>
        </div>
        <ul className="border-bottom">
          <li>Oreders</li>
          <li>3,852</li>
        </ul>
        <ul className="border-bottom">
          <li>Amount</li>
          <li>145,886 AED</li>
        </ul>
        <ul className="border-bottom">
          <li>Profit</li>
          <li>22,410 AED</li>
        </ul>
        <ul>
          <li>Avg. Prep time</li>
          <li>25:22</li>
        </ul>
        <ul>
          <li className="px-2">
            <img src={oval} className="ridericon" alt="" /> Prep Delayed
          </li>
          <li>45</li>
        </ul>
        <ul className="border-bottom ">
          <li className="px-2">
            <img src={CB} className="ridericon" alt="" /> Prep Ontime
          </li>
          <li> 3,807</li>
        </ul>
        <ul>
          <li>Avg. Rider time</li>
          <li>13:18</li>
        </ul>
        <ul>
          <li className="px-2">
            <img src={CG} className="ridericon" alt="" /> Rider Delayed
          </li>
          <li>25:22</li>
        </ul>
        <ul>
          <li className="px-2">
            <img src={oval} className="ridericon" alt="" /> Rider Ontime
          </li>
          <li>45</li>
        </ul>
        <ul>
          <li>Deliveroo</li>
          <li>
            <img src={Ovalnew} alt="" /> 1.3K
          </li>
          <li>
            <img src={Ovalnew} alt="" /> 2.3K
          </li>
        </ul>
        <ul>
          <li>NowNow</li>
          <li>
            <img src={Ovalnew} alt="" /> 1.3K
          </li>
          <li>
            <img src={Ovalnew} alt="" /> 1.3K
          </li>
        </ul>
        <ul>
          <li>Talabat</li>
          <li>
            <img src={Ovalnew} alt="" /> 1.3K
          </li>
          <li>
            <img src={Ovalnew} alt="" /> 1.3K
          </li>
        </ul>
        <ul>
          <li>Zoomato</li>
          <li>
            <img src={Ovalnew} alt="" /> 1.3K
          </li>
          <li>
            <img src={Ovalnew} alt="" /> 1.3K
          </li>
        </ul>
        <ul className="border-bottom">
          <li>Other</li>
          <li>
            <img src={Ovalnew} alt="" /> 1.3K
          </li>
          <li>
            <img src={Ovalnew} alt="" /> 1.3K
          </li>
        </ul>
        <ul>
          <li>
            <img src={Delete} className="ridercancel" alt="" /> Canceled
          </li>
          <li>2.6K</li>
        </ul>
        <ul>
          <li>
            <img src={Delete} className="ridercancel" alt="" /> Delayed
          </li>
          <li>2.6K</li>
        </ul>
        <ul>
          <li>
            <img src={Delete} className="ridercancel" alt="" /> Quality
          </li>
          <li>2.6K</li>
        </ul>
        <ul>
          <li>
            <img src={Delete} className="ridercancel" alt="" /> Wrong order
          </li>
          <li>2.6K</li>
        </ul>
        <ul>
          <li>
            <img src={Delete} className="ridercancel" alt="" /> Other
          </li>
          <li>2.6K</li>
        </ul>
        <ul className="border-bottom ">
          <li>Canceled Amount</li>
          <li>410 AED</li>
        </ul>
        <ul>
          <li>Menu items</li>
          <li> 7,254</li>
        </ul>
        <ul className="border-bottom">
          <li> Items Quantity </li>
          <li>10,874</li>
        </ul>
      </div>
    </>
  );
};

export default Summary;
