import React from "react";

const BreakfastCard = (props) => {
  return (
    <div className="box blue">
      <h2>{props.meal}</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">{props.name1}</th>
            <th scope="col">{props.name2}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row"></th>
            <td>{props.turn1}</td>
            <td>{props.turn2}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BreakfastCard;
