import React from "react";
import { Modal } from "react-bootstrap";

const PopUpModel = (props) => {
  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <ModelContent props={props} />
      </Modal>
    </div>
  );
};
const ModelContent = ({ props }) => {
  const [count, setCount] = React.useState(1);
  return (
    <div className="container-fluid">
      <div
        class="row justify-content-center"
        id="contained-modal-title-vcenter"
      >
        <div class="col-lg-12">
          <div class="card-module">
            <div class="row">
              <div class="col-lg-8">
                <h1 class="text-white">Tex-Mex Pizza-Large</h1>
              </div>
              <div className="col-lg-4">
                <div class="product-add">
                  <div class="qty">
                    <span class="minus" onClick={() => setCount(count - 1)}>
                      -
                    </span>
                    <input
                      type="number"
                      class="count"
                      name="qty"
                      value={count}
                    />
                    <span class="plus" onClick={() => setCount(count + 1)}>
                      +
                    </span>
                    <h4>
                      150.00 <span class="aed text-white">AED</span>{" "}
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div class="col-12">
                <div class="border-bottom">
                  <p class="text-white ">
                    Marinated chicken topped with onions, black olives and green
                    peppers, or spice it up with jalapeños black olives and
                    green peppers alapeños black olives and green peppers
                    alapeños black olives and green peppers
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div class="col-12">
                <h1 class="text-white">Crust For Large Pizza (Choose 1)</h1>
                <ul>
                  <Content />
                </ul>
                <ul class="border-bottom">
                  <Content />
                </ul>
              </div>
              <div class="col-12">
                <h1 class="text-white">Crust For Large Pizza (Choose 1)</h1>
                <ul>
                  <Content />
                </ul>
                <ul>
                  <Content />
                </ul>
                <ul>
                  <Content />
                </ul>
                <ul>
                  <Content />
                </ul>
                <div class="module-addbtn">
                  <button
                    type="button"
                    class="btn btn-primary btn-lg"
                    onClick={props.onHide}
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const Content = () => {
  return (
    <>
      <li>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckChecked"
            checked
          />
          <label class="form-check-label" for="flexCheckChecked">
            Classic
          </label>
        </div>
      </li>
      <li>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckChecked"
            checked
          />
          <label class="form-check-label" for="flexCheckChecked">
            Crunchy Thin (4.00)
          </label>
        </div>
      </li>
      <li>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckChecked"
            checked
          />
          <label class="form-check-label" for="flexCheckChecked">
            Double melt (6.00)
          </label>
        </div>
      </li>
    </>
  );
};

export default PopUpModel;
