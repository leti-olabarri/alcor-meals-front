import React, { Component } from "react";
import "./App.css";
import MealsCard from "./components/MealsCard";
import DinnerCard from "./components/DinnerCard";
import ThingsCard from "./components/ThingsCard";
import Diet from "./components/Diet";
import BreakfastCard from "./components/BreakfastCard";
import Spinner from "./components/Spinner";
import { getMeals } from "./lib/api";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    getMeals().then((data) => {
      this.setState({ data: data });
    });
  }

  render() {
    const { data } = this.state;

    if (data.length === 0) {
      return <Spinner></Spinner>;
    } else {
      return (
        <div>
          <nav>
            <ul>
              <li>{data["date"]}</li>
              <li>
                <h1>C.M. Alcor</h1>
              </li>
              <li>
                <a href="./">Actualizar</a>
              </li>
            </ul>
          </nav>
          <div className="row1-container">
            <MealsCard
              meal={data["meals"][0]["meal"]}
              soon_name={data["meals"][0]["turns"][0]["turn"]}
              normal_name={data["meals"][0]["turns"][1]["turn"]}
              late_name={data["meals"][0]["turns"][2]["turn"]}
              soon_number={data["meals"][0]["turns"][0]["number"]}
              normal_number={data["meals"][0]["turns"][1]["number"]}
              late_number={data["meals"][0]["turns"][2]["number"]}
              soon_reg={data["meals"][0]["turns"][0]["diet"].toString()}
              normal_reg={data["meals"][0]["turns"][1]["diet"].toString()}
              late_reg={data["meals"][0]["turns"][2]["diet"].toString()}
              tables_soon_6={
                data["meals"][0]["turns"][0]["tables"]["tables_of_six"]
              }
              tables_soon_5={
                data["meals"][0]["turns"][0]["tables"]["tables_of_five"]
              }
              tables_normal_6={
                data["meals"][0]["turns"][1]["tables"]["tables_of_six"]
              }
              tables_normal_5={
                data["meals"][0]["turns"][1]["tables"]["tables_of_five"]
              }
              tables_late_6={
                data["meals"][0]["turns"][2]["tables"]["tables_of_six"]
              }
              tables_late_5={
                data["meals"][0]["turns"][2]["tables"]["tables_of_five"]
              }
              guests={data["meals"][0]["turns"][2]["guests-room"].length}
            ></MealsCard>
            <DinnerCard
              meal={data["meals"][1]["meal"]}
              normal_name={data["meals"][1]["turns"][0]["turn"]}
              late_name={data["meals"][1]["turns"][1]["turn"]}
              normal_number={data["meals"][1]["turns"][0]["number"]}
              late_number={data["meals"][1]["turns"][1]["number"]}
              normal_reg={data["meals"][1]["turns"][0]["diet"].toString()}
              late_reg={data["meals"][1]["turns"][1]["diet"].toString()}
              tables_normal_6={
                data["meals"][1]["turns"][0]["tables"]["tables_of_six"]
              }
              tables_normal_5={
                data["meals"][1]["turns"][0]["tables"]["tables_of_five"]
              }
              tables_late_6={
                data["meals"][1]["turns"][1]["tables"]["tables_of_six"]
              }
              tables_late_5={
                data["meals"][1]["turns"][1]["tables"]["tables_of_five"]
              }
              guests={data["meals"][1]["turns"][1]["guests-room"].length}
            ></DinnerCard>
          </div>
          <div className="row2-container">
            <BreakfastCard
              meal={data["meals"][2]["meal"]}
              turn1={data["meals"][2]["turns"][0]["number"]}
            ></BreakfastCard>
          </div>
          <div className="row3-container">
            <ThingsCard
              meal={data["meals"][3]["meal"]}
              name1={data["meals"][3]["turns"][0]["turn"]}
              name2={data["meals"][3]["turns"][1]["turn"]}
              turn1={data["meals"][3]["turns"][0]["number"]}
              turn2={data["meals"][3]["turns"][1]["number"]}
              reg1={data["meals"][3]["turns"][0]["diet"]}
              reg2={data["meals"][3]["turns"][1]["diet"]}
            ></ThingsCard>
            <Diet></Diet>
          </div>
        </div>
      );
    }
  }
}

export default App;
