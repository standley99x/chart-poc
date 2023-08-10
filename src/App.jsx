import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Sample from "./components/sample-chart/sample";
import Barchart from "./components/sample-chart/Barchart";
import BarchartFocused from "./components/sample-chart/BarchartWithFocus";
import AreaChart from "./components/sample-chart/AreaChart";
import StackedAreaChart from "./components/sample-chart/StackedAreaChart";
import LineChart from "./components/sample-chart/LineChart";
import LineChartThreshold from "./components/sample-chart/LineChartWithThreshold";
import InvertLineChart from "./components/sample-chart/InvertedLineChart";
import StackAreaChart from "./components/sample-chart/StackAreaChart";
import Header from "./components/Header";
import "bulma/css/bulma.css";

function App() {
  return (
    <>
      <section className="hero is-primary">
        <div className="hero-body">
          <div className="title">
            <Header />
          </div>
        </div>
      </section>
      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-6">
              <h3>Barchart</h3>
              <Barchart />
            </div>
            <div className="column is-6">
              <h3>Barchart with Focus</h3>
              <BarchartFocused />
            </div>
          </div>
        </section>
        <section className="section">
          <div className="columns">
            <div className="column is-6">
              <h3>Area Chart</h3>
              <AreaChart />
            </div>
            <div className="column is-6">
              <h3>Area Chart with Multiple Points</h3>
              <StackedAreaChart />
            </div>
          </div>
        </section>
        <section className="section">
          <div className="columns">
            <div className="column is-6">
              <h3>Line Chart</h3>
              <LineChart />
            </div>
            <div className="column is-6">
              <h3>Line Chart with Threshold</h3>
              <LineChartThreshold />
            </div>
          </div>
        </section>
        <section className="section">
          <div className="columns">
            <div className="column is-6">
              <h3>Inverted Line Chart</h3>
              <InvertLineChart />
            </div>
            <div className="column is-6">
              <h3>Stacked Area Chart</h3>
              <StackAreaChart />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
