import React from "react";
import { Link } from "react-router-dom";

const Pagination = ({
  postPerPage,
  totalPost,
  paginate,
  handlePrev,
  handleNext,
}) => {
  const pageNumbers = [];
  const int = Math.ceil(totalPost / postPerPage);
  if (int === 1) return null;
  for (let i = 1; i <= int; i++) {
    pageNumbers.push(i);
  }
  return (
    <>
      <div className="row">
        <div className="col">
          <div className="demo">
            <nav className="pagination-outer" aria-label="Page navigation">
              <ul className="pagination">
                <li className="page-item">
                  <Link to="#" className="page-link" aria-label="Previous">
                    <span aria-hidden="true" onClick={handlePrev}>
                      «
                    </span>
                  </Link>
                </li>
                {pageNumbers.map((number) => (
                  <li key={number}>
                    <Link
                      onClick={() => paginate(number)}
                      to="#"
                      className="page-link"
                    >
                      <span aria-hidden="true">{number}</span>
                    </Link>
                  </li>
                ))}
                <li className="page-item">
                  <Link
                    to="#"
                    className="page-link"
                    aria-label="Next"
                    onClick={handleNext}
                  >
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
