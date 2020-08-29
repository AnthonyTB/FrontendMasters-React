const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed),
  ]);
};

const App = () => {
  return React.createElement("div", { id: "something-important" }, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, { name: "Luna", animal: "Cat", breed: "siamese" }),
    React.createElement(Pet, { name: "Chase", animal: "Dog", breed: "Poodle" }),
    React.createElement(Pet, { name: "Clancy", animal: "Dog", breed: "idk" }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
