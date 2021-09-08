import React from "react";

const MealsCard = (props) => {
  let replace = props.tables1 + props.tables2 - 16
  let turn3_not_guests = props.turn3 - props.guests
  let turn3_tables = Math.ceil((props.turn3 - props.guests)/3)
    return (
        <div className="box blue">
        <h2>{props.meal}</h2>
        <table className="table">
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">{props.name1}</th>
                  <th scope="col">{props.name2}</th>
                  <th scope="col">{props.name3}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row"></th>
                  <td>{props.turn1}</td>
                  <td>{props.turn2}</td>
                  <td>{turn3_not_guests} + {props.guests}</td>
                </tr>
                <tr>
                  <th scope="row">Reg.:</th>
                  <td className="regs">{props.reg1}</td>
                  <td className="regs">{props.reg2}</td>
                  <td className="regs">{props.reg3}</td>
                </tr>
                <tr>
                  <th scope="row">Comedor:</th>
                  <td className="tables">{props.tables1} mesas</td>
                  <td className="tables">{props.tables2} mesas</td>
                  <td className="tables">{turn3_tables} mesas</td>
                </tr>
                <tr>
                  <th scope="row">Reponer:</th>
                  <td className="tables"></td>
                  <td className="tables">{replace}</td>
                  <td className="tables"></td>
                </tr>
              </tbody>
            </table>
            </div>
    )
}

export default MealsCard;