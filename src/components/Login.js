import React from "react";
import { Link, useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  const handlelogin = (e) => {
    e.preventDefault();
    history.push("/main");
  };
  const form = {
    marginTop: "100px",
  };

  return (
    <div style={form} className="container row loginrow">
      <div className="col-lg-4 col-12">
        <h1 style={{ color: "white" }}>Login</h1>
        <form>
          <div className="row mb-3">
            <div className="col-sm-6">
              <input
                type="email"
                className="form-control"
                id="inputEmail3"
                placeholder="Enter Email"
                value="admin@cloud.com"
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-sm-6">
              <input
                type="password"
                className="form-control"
                id="inputPassword3"
                placeholder="Enter Password"
                value="password"
              />
            </div>
          </div>

          <button className="btn btn-light" onClick={handlelogin}>
            Login
          </button>
        </form>
      </div>
      <div className="col-lg-8 col-12">
        <div className="row">
          <h1 className="allpages">All Pages URLs</h1>
          <div className="pageslist col-lg-6 col-12">
            <ul>
              <li>
                <ul>
                  <h1> Kitchen</h1>
                  <li>
                    <Link to="/main"> Main</Link>
                  </li>
                  <li>
                    <Link to="/table-view1"> Table view1</Link>
                  </li>
                  <li>
                    <Link to="/dashboard-view1">Dashboard view1</Link>
                  </li>
                  <li>
                    <Link to="/dashboard-view2">Dashboard view2</Link>
                  </li>
                  <li>
                    <Link to="/dashboard-view3">Dashboard view3</Link>
                  </li>
                </ul>
              </li>
            </ul>
            <li>
              <ul>
                <h1>Orders</h1>
                <li>
                  <Link to="/main-table-view">Main/Table View</Link>
                </li>
                <li>
                  <Link to="/map-view1">Map view1</Link>
                </li>
                <li>
                  <Link to="/map-card-order">Map view/ card order</Link>
                </li>
                <li>
                  <Link to="/new-order">New Order || Remain</Link>
                </li>
                <li>
                  <Link to="/new-order3">New Order3 || Remain</Link>
                </li>
                <li>
                  <Link to="/new-order5">New Order5 || Remain</Link>
                </li>
                <li>
                  <Link to="/new-order-select">New Order select items</Link>
                </li>
              </ul>
            </li>
            <li>
              <ul>
                <h1>Statistics</h1>
                <li>
                  <Link to="/main-statictics">Main</Link>
                </li>
                <li>
                  <Link to="/selection-main">Selection main</Link>
                </li>
              </ul>
            </li>
            <li>
              <ul>
                <h1>Onboarding</h1>
                <li>
                  <Link to="/main-onboarding">Main</Link>
                </li>
                <li>
                  <Link to="/edit-kitchen">Edit Kitchen</Link>
                </li>
                <li>
                  <Link to="/edit-brand">Edit Brand || Remain</Link>
                </li>
              </ul>
            </li>
          </div>
          <div className="pageslist col-lg-6 col-12">
            <ul>
              <li>
                <ul>
                  <h1>Kitchen Onboarding</h1>
                  <li>
                    <Link to="/add-kitchen">Add kitchen/main || Edit</Link>
                  </li>
                  <li>
                    <Link to="/add-adress">Add kitchen/main /address1</Link>
                  </li>
                  <li>
                    <Link to="/kitchen-upload1">
                      add kitchen/Upload1 ||Edit
                    </Link>
                  </li>
                  <li>
                    <Link to="/kitchen-upload2">
                      Add kitchen/Upload2 ||Edit
                    </Link>
                  </li>
                  <li>
                    <Link to="/kitchen-upload3">
                      Add kitchen/Upload3 || Edit
                    </Link>
                  </li>
                  <li>
                    <Link to="/compare1">Compare Menu1 ||Edit</Link>
                  </li>
                  <li>
                    <Link to="/compare2">Compare Menu2</Link>
                  </li>
                  <li>
                    <Link to="/compare3">Compare Menu3</Link>
                  </li>
                  <li>
                    <Link to="/kitchen-adons">Add Kitchen/Adons</Link>
                  </li>
                </ul>
              </li>
              <li>
                <ul>
                  <h1>Brand Onboarding</h1>
                  <li>
                    <Link to="/add-brand">Add Brand/Main ||Edit</Link>
                  </li>
                  <li>
                    <Link to="/add-brand2">Add Brand/Main1 ||Edit</Link>
                  </li>
                </ul>
              </li>
            </ul>
            <ul>
              <h1>Others</h1>
              <li>
                <Link to="/breakfast-card">Breakfast Card</Link>
              </li>
              <li>
                <Link to="/gourmet-chicken">Gourmet Chicken</Link>
              </li>

              <li>
                <Link to="/chicken-potatoes-card">Chicken Potatoes Card</Link>
              </li>
              <li>
                <Link to="/order-detail1">Order Detail 1</Link>
              </li>
              <li>
                <Link to="/order-detail2">Order Detail 2</Link>
              </li>
              <li>
                <Link to="/order-detail3">Order Detail 3</Link>
              </li>
              <li>
                <Link to="/order-detail4">Order Detail 4</Link>
              </li>
              <li>
                <Link to="/order-detail5">Order Detail 5</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
