import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", { id: "something-important" }, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, { name: "Luna", animal: "Cat", breed: "siamese" }),
    React.createElement(Pet, { name: "Chase", animal: "Dog", breed: "Poodle" }),
    React.createElement(Pet, { name: "Clancy", animal: "Dog", breed: "idk" }),
  ]);
};

render(React.createElement(App), document.getElementById("root"));
