import React from "react";
import { Link } from "react-router-dom";
import Add2 from "../../assets/img/Add2.svg";
import Add1 from "../../assets/img/Add1.png";

const AddonPopup = () => {
  return (
    <div className="card-module">
      <div className="col-lg-12 border-bottom">
        <div className="product-add justify-content-between d-flex align-item-center">
          <h2 className="text-white">George Mashawi</h2>
          <h2 className="text-white">Manakish</h2>
          <h2 className="text-white">Haloum Chees with tomat....</h2>
        </div>
      </div>
      <div className="row mb-3 mt-2">
        <div className="col">
          <h2 className="text-white">Load Addons</h2>
        </div>
      </div>
      <div className="border-bottom">
        <div className="row">
          <div className="col-4">
            <select className="form-select" aria-label="Default select example">
              <option defaultValue>Category</option>
              <option value="1">Category Pick item</option>
              <option value="2">Desert</option>
              <option value="3">Manakish</option>
              <option value="4">Sandwish</option>
              <option value="5">Daily Dish</option>
              <option value="5">Drinks</option>
            </select>
          </div>

          <div className="col-4">
            <select className="form-select" aria-label="Default select example">
              <option defaultValue>From Category</option>
              <option value="1">Category Pick item</option>
              <option value="2">Desert</option>
              <option value="3">Manakish</option>
              <option value="4">Sandwish</option>
              <option value="5">Daily Dish</option>
              <option value="5">Drinks</option>
            </select>
          </div>
          <div className="col-4  helo company-catageri">
            <div className="form-group has-search position-relative">
              <img src={Add1} className="position-absolute" alt="" />
              <input
                type="text"
                className="form-control"
                placeholder="Upload Addons"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="row mb-3 mt-2">
        <div className="col">
          <h2 className="text-white">Add New Addons</h2>
        </div>
      </div>
      <div className="border-bottom">
        <div className="row ">
          <div className="col">
            <input
              className="form-control"
              type="text"
              placeholder="mobile"
              aria-label="default input example"
            />
          </div>
          <div className="col">
            <input
              className="form-control"
              type="text"
              placeholder="mobile"
              aria-label="default input example"
            />
          </div>
          <div className="col">
            <input
              className="form-control"
              type="text"
              placeholder="mobile"
              aria-label="default input example"
            />
          </div>
          <div className="col-lg-1">
            <Link to="#">
              <img src={Add2} alt="" />
            </Link>
          </div>
        </div>
      </div>
      <div className="row mb-3 mt-2">
        <div className="col">
          <h2 className="text-white">Select Addons</h2>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-lg-4">
          <ul>
            <li>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                  checked
                />
                <label className="form-check-label" for="flexCheckChecked">
                  Select All
                </label>
              </div>
            </li>
          </ul>
        </div>
        <div className="col-4">
          <select className="form-select" aria-label="Default select example">
            <option defaultChecked>Category</option>
            <option value="1">Category Pick item</option>
            <option value="2">Desert</option>
            <option value="3">Manakish</option>
            <option value="4">Sandwish</option>
            <option value="5">Daily Dish</option>
            <option value="5">Drinks</option>
          </select>
        </div>
        <div className="col-4  helo">
          <div className="form-group has-search">
            <span className="fa fa-search form-control-feedback"></span>
            <input type="text" className="form-control" placeholder="Search" />
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-12">
          <ul>
            <li>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                  checked
                />
                <label className="form-check-label" for="flexCheckChecked">
                  classNameic
                </label>
              </div>
            </li>
            <li className="items-times">4.00</li>
            <li>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                  checked
                />
                <label className="form-check-label" for="flexCheckChecked">
                  Crunchy Thin
                </label>
              </div>
            </li>
            <li>
              <li className="items-times">4.00</li>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                  checked
                />
                <label className="form-check-label" for="flexCheckChecked">
                  Breaded
                </label>
              </div>
            </li>
            <li className="items-times">4.00</li>
          </ul>
          <ul>
            <li>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                  checked
                />
                <label className="form-check-label" for="flexCheckChecked">
                  classNameic
                </label>
              </div>{" "}
            </li>
            <li className="items-times">4.00</li>
            <li>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                  checked
                />
                <label className="form-check-label" for="flexCheckChecked">
                  Crunchy Thin
                </label>
              </div>
            </li>
            <li>
              <li className="items-times">4.00</li>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                  checked
                />
                <label className="form-check-label" for="flexCheckChecked">
                  Breaded
                </label>
              </div>
            </li>
            <li className="items-times">4.00</li>
          </ul>
          <ul>
            <li>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                  checked
                />
                <label className="form-check-label" for="flexCheckChecked">
                  classNameic
                </label>
              </div>{" "}
            </li>
            <li className="items-times">4.00</li>
            <li>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                  checked
                />
                <label className="form-check-label" for="flexCheckChecked">
                  Crunchy Thin
                </label>
              </div>
            </li>
            <li>
              <li className="items-times">4.00</li>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                  checked
                />
                <label className="form-check-label" for="flexCheckChecked">
                  Breaded
                </label>
              </div>
            </li>
            <li className="items-times">4.00</li>
          </ul>
          <ul>
            <li>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                  checked
                />
                <label className="form-check-label" for="flexCheckChecked">
                  classNameic
                </label>
              </div>{" "}
            </li>
            <li className="items-times">4.00</li>
            <li>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                  checked
                />
                <label className="form-check-label" for="flexCheckChecked">
                  Crunchy Thin
                </label>
              </div>
            </li>
            <li>
              <li className="items-times">4.00</li>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                  checked
                />
                <label className="form-check-label" for="flexCheckChecked">
                  Breaded
                </label>
              </div>
            </li>
            <li className="items-times">4.00</li>
          </ul>
          <ul>
            <li>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                  checked
                />
                <label className="form-check-label" for="flexCheckChecked">
                  classNameic
                </label>
              </div>{" "}
            </li>
            <li className="items-times">4.00</li>
            <li>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                  checked
                />
                <label className="form-check-label" for="flexCheckChecked">
                  Crunchy Thin
                </label>
              </div>
            </li>
            <li>
              <li className="items-times">4.00</li>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                  checked
                />
                <label className="form-check-label" for="flexCheckChecked">
                  Breaded
                </label>
              </div>
            </li>
            <li className="items-times">4.00</li>
          </ul>
          <ul className="border-bottom">
            <li>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                  checked
                />
                <label className="form-check-label" for="flexCheckChecked">
                  classNameic
                </label>
              </div>{" "}
            </li>
            <li className="items-times">4.00</li>
            <li>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                  checked
                />
                <label className="form-check-label" for="flexCheckChecked">
                  Crunchy Thin
                </label>
              </div>
            </li>
            <li>
              <li className="items-times">4.00</li>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                  checked
                />
                <label className="form-check-label" for="flexCheckChecked">
                  Breaded
                </label>
              </div>
            </li>
            <li className="items-times">4.00</li>
          </ul>
          <div className="col-lg-12 mt-3 border-bottom">
            <div className="tabs">
              <div className="dropdown-tabs">
                <p>
                  <span className="w3-tag w3-teal">Tags +</span>{" "}
                  <span className="w3-tag w3-teal">Tags +</span>{" "}
                  <span className="w3-tag w3-teal">Tags +</span>{" "}
                  <span className="w3-tag w3-teal">Tags +</span>{" "}
                  <span className="w3-tag w3-teal">Tags +</span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 text-center mt-5">
            <Link to="#">
              <button type="button" className="btn btn-primary">
                Add to items
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddonPopup;
