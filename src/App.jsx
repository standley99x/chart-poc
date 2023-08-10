import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Sample from "./components/sample-chart/sample";
import Barchart from "./components/sample-chart/Barchart";
import BarchartFocused from "./components/sample-chart/BarchartWithFocus";
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
            <div className="column is-4">
              <Barchart />
            </div>
            <div className="column is-4">
              <Barchart />
            </div>
            <div className="column is-4">
              <Barchart />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
