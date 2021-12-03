import React from "react";

import { Link } from "react-router-dom";

const Pagination = () => {
  return (
    <>
      <div className="row">
        <div className="col">
          <div className="demo">
            <nav className="pagination-outer" aria-label="Page navigation">
              <ul className="pagination">
                <li className="page-item">
                  <Link to="#" className="page-link" aria-label="Previous">
                    <span aria-hidden="true">«</span>
                  </Link>
                </li>
                <li className="page-item active">
                  <Link className="page-link" to="#" data-hover="1">
                    1
                  </Link>
                </li>
                <li className="page-item">
                  <Link className="page-link" to="#" data-hover="2">
                    2
                  </Link>
                </li>
                <li className="page-item">
                  <Link className="page-link" to="#" data-hover="3">
                    3
                  </Link>
                </li>
                <li className="page-item">
                  <Link className="page-link" to="#" data-hover="4">
                    4
                  </Link>
                </li>
                <li className="page-item">
                  <Link className="page-link" to="#" data-hover="5">
                    5
                  </Link>
                </li>
                <li className="page-item">
                  <Link to="#" className="page-link" aria-label="Next">
                    <span aria-hidden="true">»</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pagination;
