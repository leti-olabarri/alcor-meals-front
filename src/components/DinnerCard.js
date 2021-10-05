import React from "react";

const DinnerCard = (props) => {
  let turn3_not_guests = props.late_number - props.guests
    return (
        <div className="box blue">
        <h2>{props.meal}</h2>
        <table className="table">
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">{props.normal_name}</th>
                  <th scope="col">{props.late_name}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row"></th>
                  <td>{props.normal_number}</td>
                  <td>{turn3_not_guests} + {props.guests}</td>
                </tr>
                <tr>
                  <th scope="row">Reg.:</th>
                  <td className="regs">{props.normal_reg}</td>
                  <td className="regs">{props.late_reg}</td>
                </tr>
                <tr>
                  <th scope="row">Mesas de 6:</th>
                  <td className="tables">{props.tables_normal_6} mesas</td>
                  <td className="tables">{props.tables_late_6} mesas</td>
                </tr>
                <tr>
                  <th scope="row">Mesas de 5:</th>
                  <td className="tables">{props.tables_normal_5} mesas</td>
                  <td className="tables">{props.tables_late_5} mesas</td>
                </tr>
              </tbody>
            </table>
            </div>
    )
}

export default DinnerCard;