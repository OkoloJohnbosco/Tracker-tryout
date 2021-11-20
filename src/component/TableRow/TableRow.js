import React from "react";

function TableRow({ data: { confirmed, recovered, deaths, country }, index }) {
  return (
    <tr>
      <td>{index}</td>
      <td>{country}</td>
      <td>{confirmed}</td>
      <td>{recovered}</td>
      <td>{deaths}</td>
    </tr>
  );
}
export default TableRow;
