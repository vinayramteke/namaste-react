//step 0: Import whatever u will going to use
import React from "react";
import ReactDOM from "react-dom/client";

//step 1: what you whant to render ; using React.createElement
const heading = React.createElement("h1", { id: "heading" }, "Namaste React");

//step 1: what you whant to render ; using JSX
const jsxHeading = <h1 id="heading">Namaste React By JSX</h1>;

//React Component : functional Component => A js arrow function which return JSX
const HeatingComponent = () => (
  <h1 className="heading">Namaste React using FN Component</h1>
);

//step 2: where you whant to render
const root = ReactDOM.createRoot(document.getElementById("root"));

//step 3: render
root.render(<HeatingComponent />);
