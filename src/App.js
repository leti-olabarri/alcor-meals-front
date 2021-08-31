import React, { Component } from "react";
import "./App.css";
import MealsCard from "./components/MealsCard";
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
              <li><a href="./">Actualizar</a></li>
            </ul>
          </nav>
          <div className="row1-container">
            <MealsCard
              meal={data["meals"][0]["meal"]}
              name1={data["meals"][0]["turns"][0]["turn"]}
              name2={data["meals"][0]["turns"][1]["turn"]}
              name3={data["meals"][0]["turns"][2]["turn"]}
              turn1={data["meals"][0]["turns"][0]["number"]}
              turn2={data["meals"][0]["turns"][1]["number"]}
              turn3={data["meals"][0]["turns"][2]["number"]}
              reg1={data["meals"][0]["turns"][0]["diet"].toString()}
              reg2={data["meals"][0]["turns"][1]["diet"].toString()}
              reg3={data["meals"][0]["turns"][2]["diet"].toString()}
              tables1={data["meals"][0]["turns"][0]["tables"]}
              tables2={data["meals"][0]["turns"][1]["tables"]}
              tables3={data["meals"][0]["turns"][2]["tables"]}
            ></MealsCard>
            <MealsCard
              meal={data["meals"][1]["meal"]}
              name1={data["meals"][1]["turns"][0]["turn"]}
              name2={data["meals"][1]["turns"][1]["turn"]}
              name3={data["meals"][1]["turns"][2]["turn"]}
              turn1={data["meals"][1]["turns"][0]["number"]}
              turn2={data["meals"][1]["turns"][1]["number"]}
              turn3={data["meals"][1]["turns"][2]["number"]}
              reg1={data["meals"][1]["turns"][0]["diet"].toString()}
              reg2={data["meals"][1]["turns"][1]["diet"].toString()}
              reg3={data["meals"][1]["turns"][2]["diet"].toString()}
              tables1={data["meals"][1]["turns"][0]["tables"]}
              tables2={data["meals"][1]["turns"][1]["tables"]}
              tables3={data["meals"][1]["turns"][2]["tables"]}
            ></MealsCard>
          </div>
          <div className="row2-container">
            <div className="column-container">
              <BreakfastCard
                meal={data["meals"][2]["meal"]}
                name1={data["meals"][2]["turns"][0]["turn"]}
                name2={data["meals"][2]["turns"][1]["turn"]}
                turn1={data["meals"][2]["turns"][0]["number"]}
                turn2={data["meals"][2]["turns"][1]["number"]}
              ></BreakfastCard>
              <ThingsCard
                meal={data["meals"][3]["meal"]}
                name1={data["meals"][3]["turns"][0]["turn"]}
                name2={data["meals"][3]["turns"][1]["turn"]}
                turn1={data["meals"][3]["turns"][0]["number"]}
                turn2={data["meals"][3]["turns"][1]["number"]}
                reg1={data["meals"][3]["turns"][0]["diet"]}
                reg2={data["meals"][3]["turns"][1]["diet"]}
              ></ThingsCard>
            </div>
            <div className="column-container">
              <Diet></Diet>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default App;
