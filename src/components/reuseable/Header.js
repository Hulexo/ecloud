import React from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import logo from "../../assets/img/CLOUD-Logo.svg";
import share from "../../assets/img/share.svg";
import dark from "../../assets/img/SwitchtoLigh.svg";
import ICONKitchen from "../../assets/img/ICONKitchen.svg";

const Header = () => {
  const location = useLocation();
  const history = useHistory();
  const currentUrl = location.pathname;
  return (
    <div className="row topbar">
      {currentUrl === "/main-statictics" ? (
        <>
          <div className="col-lg-5">
            <div className="datetitle">
              <h1>Tue 02 Mar 2021</h1>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="times">
              <h1>13:37 PM</h1>
            </div>
          </div>
        </>
      ) : currentUrl === "/main" ||
        currentUrl === "/table-view1" ||
        currentUrl === "/new-order-select" ||
        currentUrl === "/edit-kitchen" ||
        currentUrl === "/add-kitchen" ||
        currentUrl === "/kitchen-upload3" ||
        currentUrl === "/add-brand" ||
        currentUrl === "/add-brand2" ||
        currentUrl === "/main-table-view" ||
        currentUrl === "/map-view1" ||
        currentUrl === "/map-card-order" ||
        currentUrl === "/breakfast-card" ||
        currentUrl === "/gourmet-chicken" ||
        currentUrl === "/chicken-potatoes-card" ||
        currentUrl === "/dashboard-view1" ||
        currentUrl === "/dashboard-view2" ||
        currentUrl === "/dashboard-view3" ? (
        <>
          <div className="col-1">
            <div className="logo">
              <Link to="/">
                <img src={logo} alt="cloud-logo" className="img-fluid" />
              </Link>
            </div>
          </div>

          {(currentUrl === "/edit-kitchen" ||
            currentUrl === "/add-kitchen" ||
            currentUrl === "/add-kitchen" ||
            currentUrl === "/add-brand" ||
            currentUrl === "/add-brand2" ||
            currentUrl === "/kitchen-upload3") && (
            <>
              <div className="col-lg-2">
                <div className="items d-flex align-item:center">
                  <img src={ICONKitchen} className="img-fluid" alt="" />
                  <p>George Mashawi </p>
                </div>
              </div>
              <div className="col-lg-6 d-flex justify-content-between align-items-center">
                <div className="totalorders">
                  <p>
                    8 <span>Category</span>
                  </p>
                </div>
                <div className="deliver">
                  <p>
                    3 <span>Branches</span>
                  </p>
                </div>
                <div className="ongoing">
                  <p>
                    0 <span>Brands</span>
                  </p>
                </div>
                <div className="deliver">
                  <p>
                    12 <span>,Menu Category</span>
                  </p>
                </div>
                <div className="ongoing">
                  <p>
                    1280 <span>Menu Items</span>
                  </p>
                </div>
              </div>
            </>
          )}
          {(currentUrl === "/gourmet-chicken" ||
            currentUrl === "/chicken-potatoes-card" ||
            currentUrl === "/new-order-select") && (
            <div className="col-8"></div>
          )}
          {currentUrl !== "/new-order-select" &&
            currentUrl !== "/gourmet-chicken" &&
            currentUrl !== "/chicken-potatoes-card" &&
            currentUrl !== "/add-kitchen" &&
            currentUrl !== "/add-brand2" &&
            currentUrl !== "/add-brand" &&
            currentUrl !== "/kitchen-upload3" &&
            currentUrl !== "/edit-kitchen" && (
              <>
                <div className="col-2 mt-2 helo">
                  <select className="form-select panelhover" aria-label="">
                    <option defaultValue>item selected</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div className="col-3 mt-2 helo">
                  <select className="form-select panelhover" aria-label="">
                    <option defaultValue>sort by</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div className="col-3 mt-2 helo">
                  <div className="form-group has-search panelhover">
                    <span className="fa fa-search form-control-feedback "></span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search"
                    />
                  </div>
                </div>
              </>
            )}
        </>
      ) : (
        <>
          {currentUrl === "/selection-main" && (
            <>
              <div className="col-lg-5"></div>
              <div className="col-lg-4">
                <div className="times">
                  <h1>Orders</h1>
                </div>
              </div>
            </>
          )}
        </>
      )}

      <div className="col-3 mt-2">
        <div className="header-rightside">
          {currentUrl === "/main" ? (
            <div className="switchicon ">
              <Link to="#">
                <img src={dark} className="img-fluid" alt="" />
              </Link>
            </div>
          ) : (
            <>
              <div className="header-icon-flex">
                <div className="path">
                  <Link to="#">
                    <i className="far fa-envelope"></i>
                  </Link>
                </div>
                <div className="iconbell">
                  <Link to="#">
                    <i className="fal fa-bell"></i>
                  </Link>
                </div>
              </div>
            </>
          )}

          <div className="exportdata">
            <img src={share} className="img-fluid" alt="" />
          </div>
          <div className="gktext">
            <p className="gktext">GK</p>
          </div>
          <div className="usernametogle">
            <div class="dropdown">
              <span>Admin</span>
              <div class="dropdown-content">
                <p>Hello World!</p>
                <p>Hello World!</p>
                <p>Hello World!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
