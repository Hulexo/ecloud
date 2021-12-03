import React from "react";
import { Link } from "react-router-dom";
import Add1 from "../../assets/img/Add1.png";
import AddImage from "../../assets/img/AddImage.png";
import Star3 from "../../assets/img/Star3.svg";

const CategoryTable = () => {
  return (
    <div className="row menuorder-bg mt-2">
      <table className="table">
        <thead>
          <tr>
            <th scope="col-2">Category</th>
            <th scope="col-3">Dish Name</th>
            <th scope="col-3">Description</th>
            <th scope="col">Price</th>
            <th scope="col-1">Spicy</th>
            <th scope="col">Spicy+</th>
            <th scope="col">Vegan</th>
            <th scope="col">Peanut</th>
            <th scope="col">Cold</th>
            <th scope="col">Offers</th>
            <th scope="col">Most selling</th>
            <th scope="col">Add Ons</th>
            <th scope="col">Add Ons</th>
          </tr>
        </thead>
        <tbody>
          <TableRow />
        </tbody>
      </table>
    </div>
  );
};
const TableRow = () => {
  return (
    <tr>
      <th scope="row">
        <select className="form-select" aria-label="Default select example">
          <option defaultValue>Category</option>
          <option value="1">Category Pick item</option>
          <option value="2">Desert</option>
          <option value="3">Manakish</option>
          <option value="4">Sandwish</option>
          <option value="5">Daily Dish</option>
          <option value="5">Drinks</option>
        </select>
      </th>
      <td>
        <div className="has-search">
          <input
            className="form-control"
            type="text"
            placeholder="Dish Name"
            aria-label="default input example"
          />
        </div>
      </td>
      <td>
        <div className="has-search">
          <div className="dropdown-tabs">
            <input
              className="form-control"
              type="text"
              placeholder="Description"
              aria-label="default input example"
            />
            <div className="dropdown-hovertabs">
              <div className="row">
                <p className="mb-3">
                  <span className="w3-tag w3-teal">Eags Kooking +</span>
                  <span className="w3-tag w3-teal">Mashawi +</span>
                  <span className="w3-tag w3-teal">Sandwich +</span>
                  <span className="w3-tag w3-teal">Sandwich +</span>
                  <span className="w3-tag w3-teal">Fatayer +</span>
                </p>
                <div className="col-6  helo">
                  <div className="form-group has-search position-relative">
                    <img src={Add1} className="position-absolute" alt="" />
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Add Categories"
                    />
                  </div>
                </div>
                <div className="col-12  helo mt-3">
                  <div className="form-group has-search">
                    <span className="fa fa-search form-control-feedback"></span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search"
                    />
                  </div>
                </div>
                <div className="col-12 mt-5">
                  <p>
                    <span className="w3-tag w3-teal">Tags +</span>
                    <span className="w3-tag w3-teal">Tags +</span>
                    <span className="w3-tag w3-teal">Tags +</span>
                    <span className="w3-tag w3-teal">Tags +</span>
                    <span className="w3-tag w3-teal">Tags +</span>
                  </p>
                  <p className="py-3">
                    <span className="w3-tag w3-teal">Tags +</span>
                    <span className="w3-tag w3-teal">Tags +</span>
                    <span className="w3-tag w3-teal">Tags 1 +</span>
                    <span className="w3-tag w3-teal">Tags1 +</span>
                    <span className="w3-tag w3-teal">Tags +</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </td>
      <td>
        <div className="has-search">
          <input
            className="form-control"
            type="text"
            placeholder="Price"
            aria-label="default input example"
          />
        </div>
      </td>
      <td>
        <i className="fa fa-circle"></i>
      </td>
      <td>
        <i className="fa fa-circle"></i>
      </td>
      <td>
        <i className="fa fa-circle"></i>
      </td>
      <td>
        <i className="fa fa-circle"></i>
      </td>
      <td>
        <i className="fa fa-circle"></i>
      </td>
      <td>
        <div className="dropdowns">
          <Link to="#">
            <img src={Star3} alt="" />
          </Link>
          <div className="dropdowns-content">
            <option value="1">Buy1 Get1</option>
            <option value="2">Discount</option>
            <option value="3">Combo</option>
            <option value="4">Free Drink</option>
          </div>
        </div>
      </td>
      <td>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star"></span>
        <span className="fa fa-star"></span>
      </td>
      <td>
        <Link to="#">
          <img src={Add1} className="img-fluid" alt="" />
        </Link>
      </td>
      <td>
        <Link to="#">
          <img
            src={AddImage}
            className="img-fluid add-img"
            width="30px"
            alt=""
          />
        </Link>
      </td>
    </tr>
  );
};

export default CategoryTable;
