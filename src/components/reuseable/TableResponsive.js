import React from "react";

const TableResponsive = () => {
  return (
    <table className="table panelhover">
      <thead>
        <tr>
          <th scope="col">Platform</th>
          <th scope="col">Brand</th>
          <th scope="col">Kitchen</th>
          <th scope="col">Amount</th>
          <th scope="col">Status</th>
        </tr>
      </thead>
      <tbody>
        <Delayed />
        <NoRider />
        <Delayed />
        <Delayed />
        <Delayed />
        <Prepare />
        <NoRider />
        <Delayed />
        <NoRider />
        <Delayed />
        <Delayed />
        <Delayed />
        <Prepare />
        <NoRider />
        <Delayed />
        <NoRider />
        <Delayed />
        <Prepare />
        <NoRider />
      </tbody>
    </table>
  );
};

const Delayed = () => {
  return (
    <>
      <tr>
        <th scope="row">800 Food</th>
        <td>Wings Burger</td>
        <td>Zahrat Leb…</td>
        <td>
          125.56 <span className="aed"> AED</span>
        </td>
        <td className="">
          <li className="tagthree">Delayed </li>
        </td>
      </tr>
    </>
  );
};
const Prepare = () => {
  return (
    <>
      <tr>
        <th scope="row">800 Food</th>
        <td>Wings Burger</td>
        <td>Zahrat Leb…</td>
        <td>
          125.56 <span className="aed"> AED</span>
        </td>
        <td className="">
          <li className="tagtwo">Preparing</li>
        </td>
      </tr>
    </>
  );
};
const NoRider = () => {
  return (
    <>
      <tr>
        <th scope="row">Jean Settle</th>
        <td>Wings Burger</td>
        <td>Zahrat Leb…</td>
        <td>
          125.56 <span className="aed"> AED</span>
        </td>
        <td className="">
          <li className="tagone">NO Rider</li>
        </td>
      </tr>
    </>
  );
};

export default TableResponsive;
