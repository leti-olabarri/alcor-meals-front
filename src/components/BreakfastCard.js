import React from "react";

const BreakfastCard = (props) => {
  return (
    <div className="box blue">
      <h2>{props.meal}</h2>
      <table className="table">
        <tbody>
          <tr>
            <th scope="row"></th>
            <td>{props.turn1}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BreakfastCard;
