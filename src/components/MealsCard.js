import React from "react";

const MealsCard = (props) => {
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
                  <td>{props.turn3}</td>
                </tr>
                <tr>
                  <th scope="row">Reg.:</th>
                  <td className="regs">{props.reg1}</td>
                  <td className="regs">{props.reg2}</td>
                  <td className="regs">{props.reg3}</td>
                </tr>
                <tr>
                  <th scope="row">Mesas:</th>
                  <td className="tables">{props.tables1} mesas</td>
                  <td className="tables">{props.tables2} mesas</td>
                  <td className="tables">{props.tables3} mesas</td>
                </tr>
              </tbody>
            </table>
            </div>
    )
}

export default MealsCard;