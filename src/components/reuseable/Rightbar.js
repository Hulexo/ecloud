import React, { useEffect } from "react";
import { sidbarInfo } from "../../json/db";

const Rightbar = (props) => {
  const { sort, setSort } = props;
  const handleChange = (e) => {
    setSort(e.target.value);
  };
  useEffect(() => {
    console.log(sort);
  }, []);
  return (
    <div className="panelhover">
      <select
        className="form-select"
        aria-label=""
        defaultValue={sort}
        onChange={handleChange}
      >
        <option value="All" selected>
          sort by
        </option>
        <option value="1">Tag 1</option>
        <option value="2">Tag 2</option>
        <option value="3">Tag 3</option>
      </select>
      <div className="mt-2">
        {sidbarInfo.map((data) => {
          const { id, dummy, count, title } = data;
          if (sort === title) {
            return (
              <div className="itemsname" key={id}>
                <ul>
                  <li className="itemname-title">
                    {dummy} {title}
                  </li>
                  <li className="itemdetail">
                    <span>{count}</span>
                    {dummy} {dummy}
                    <br />
                    {dummy} {dummy}
                  </li>
                </ul>
              </div>
            );
          } else if (sort === "All") {
            return (
              <div className="itemsname" key={id}>
                <ul>
                  <li className="itemname-title">
                    {dummy} {title}
                  </li>
                  <li className="itemdetail">
                    <span>{count}</span>
                    {dummy} {dummy}
                    <br />
                    {dummy} {dummy}
                  </li>
                </ul>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Rightbar;
