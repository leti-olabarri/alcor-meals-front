import React from "react";

const Diet = (props) => {
    return (
        <div className="box blue diet">
        <h2>REGÍMENES</h2>
        <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Nombre</th>
                  <th scope="col">Régimen</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className="diet">1</th>
                  <td className="diet">Ana Calvo</td>
                  <td className="diet">No colesterol</td>
                </tr>
                <tr>
                  <th scope="row" className="diet">2</th>
                  <td className="diet">Cristiano Ronaldo</td>
                  <td className="diet">No fritos, no grasas</td>
                </tr>
                <tr>
                  <th scope="row" className="diet">3</th>
                  <td className="diet">Nacho Fernández</td>
                  <td className="diet">Diabetes</td>
                </tr>
                <tr>
                  <th scope="row" className="diet">4</th>
                  <td className="diet">Karim Benzema</td>
                  <td className="diet">Halal</td>
                </tr>
                <tr>
                  <th scope="row" className="diet">5</th>
                  <td className="diet">Fede Valverde</td>
                  <td className="diet">Celiaco</td>
                </tr>
                <tr>
                  <th scope="row" className="diet">6</th>
                  <td className="diet">Eden Hazard</td>
                  <td className="diet">Celiaco</td>
                </tr>
                <tr>
                  <th scope="row" className="diet">7</th>
                  <td className="diet">Lucas Vázquez</td>
                  <td className="diet">Sin lactosa</td>
                </tr>
                <tr>
                  <th scope="row" className="diet">8</th>
                  <td className="diet">Tony Kroos</td>
                  <td className="diet">No carne, no pescado</td>
                </tr>
              </tbody>
            </table>
            </div>
    )
}

export default Diet;