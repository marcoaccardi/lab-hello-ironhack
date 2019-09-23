import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
const menuTop = "images/menu-top.svg";
const reactLogo = "images/react-logo.svg";
const ironLogo = "images/ironhack-logo.svg";
const icon1 = "images/icon1.png";
const icon2 = "images/icon2.png";
const icon3 = "images/icon3.png";
const icon4 = "images/icon4.png";

ReactDOM.render(
  <div className="background">
    <div className="navBar">
      <img src={ironLogo} className="iron" />
      <img src={menuTop} className="menu" />
    </div>
    <h1 className="heading">Say hello to ReactJS</h1>
    <h2 className="heading2">
      You will learn a Frontend framework fom scratch,to become a Ninja
      developer
    </h2>
    <button className="awesome">Awesome!</button>
  </div>,
  document.getElementById("body")
);

ReactDOM.render(
  <div className="blockCard">
    <div className="card">
      <img src={icon1} className="img" />
      <h2>Declarative</h2>
      <p>React makes it painless to create interactive UIs.</p>
    </div>
    <div className="card">
      <img src={icon2} className="img" />
      <h2>Components</h2>
      <p>Build encapsulated components that manage their state.</p>
    </div>
    <div className="card">
      <img src={icon3} className="img" />
      <h2>Single Way</h2>
      <p>A set of immutable value are passed to their component's.</p>
    </div>
    <div className="card">
      <img src={icon4} className="img" />
      <h2>JSX</h2>
      <p>Statically typed,designed to run on modern browser.</p>
    </div>
  </div>,
  document.getElementById("footer")
);
