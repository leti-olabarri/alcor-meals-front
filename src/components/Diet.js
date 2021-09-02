import React from "react";

const Diet = () => {
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
                  <td className="diet">No colesterol, lechuga y arroz</td>
                </tr>
                <tr>
                  <th scope="row" className="diet">2</th>
                  <td className="diet">Manuela Salgado</td>
                  <td className="diet">Celíaca</td>
                </tr>
                <tr>
                  <th scope="row" className="diet">3</th>
                  <td className="diet">María Gracia Ballarín</td>
                  <td className="diet">Celíaca</td>
                </tr>
                <tr>
                  <th scope="row" className="diet">4</th>
                  <td className="diet">Carmen Alcalá</td>
                  <td className="diet">Celíaca</td>
                </tr>
                <tr>
                  <th scope="row" className="diet">5</th>
                  <td className="diet">Marta Luzón</td>
                  <td className="diet">Diabetes</td>
                </tr>
                <tr>
                  <th scope="row" className="diet">6</th>
                  <td className="diet">Esperanza Carrasco</td>
                  <td className="diet">No frutos secos y maíz</td>
                </tr>
                <tr>
                  <th scope="row" className="diet">7</th>
                  <td className="diet">Yolanda Llop</td>
                  <td className="diet">No frutos secos</td>
                </tr>
                <tr>
                  <th scope="row" className="diet">8</th>
                  <td className="diet">Manuela Amann</td>
                  <td className="diet">Comida pesada</td>
                </tr>
                <tr>
                  <th scope="row" className="diet">9</th>
                  <td className="diet">Marta Carrasco</td>
                  <td className="diet">Sin lactosa</td>
                </tr>
              </tbody>
            </table>
            </div>
    )
}

export default Diet;