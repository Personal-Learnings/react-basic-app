import React from "react";
import ReactDOM from "react-dom";
import "normalize.css/normalize.css";
import "./styles/style.scss";

ReactDOM.render(<p>This is React Basic App</p>, document.getElementById("app"));

// We can pass default values while loading
//ReactDOM.render(<IndecisionApp options={["Hello"]} />, document.getElementById("app"));
