import React, { Component } from "react";
import ReactDOM from "react-dom";
import Nubankapp from "./gstudio/nubankapp.js";

import "./styles.css";

class App extends Component {
  render() {
    return <Nubankapp />;
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
