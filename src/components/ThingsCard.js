import React, { Component } from "react";

class ThingsCard extends Component {
  constructor() {
    super();
    this.state = {
      tupers: [],
      sandwich: [],
    };
  }

  componentDidMount() {
    this.setState({ sandwich: [this.props.reg2] });
    this.setState({ tupers: [this.props.reg1] });
  }

  render() {
    const { sandwich } = this.state;
    const { tupers } = this.state;

    if (sandwich.length === 0 || sandwich[0] === undefined) {
      return <p>Loading data...</p>;
    } else {
      return (
        <div className="box blue">
          <h2>{this.props.meal}</h2>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">{this.props.name1}</th>
                <th scope="col">{this.props.name2}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{this.props.turn1}</td>
                <td>{this.props.turn2}</td>
              </tr>
              <tr>
                <td className="things"><ul className="thingsRegs">
                      {tupers[0].map((el, i) => (
                        <li className="thingsRegs" key={i}>
                          {el}
                        </li>
                      ))}
                    </ul></td>
                <td className="things">
                    <ul className="thingsRegs">
                      {sandwich[0].map((element, i) => (
                        <li className="thingsRegs" key={i}>
                          {element}
                        </li>
                      ))}
                    </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    }
  }
}

export default ThingsCard;
