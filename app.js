//step 0: Import whatever u will going to use
import React from "react";
import ReactDOM from "react-dom/client";

//step 1: what you whant to render ; using React.createElement
const heading = React.createElement("h1", { id: "heading" }, "Namaste React");

//step 1: what you whant to render ; using JSX
const jsxHeading = <h1 id="heading">Namaste React By JSX</h1>;

//compenent composition: importing one react component into other react component
const Title = () => <h1 className="title">This is my title compenent</h1>;

//React Component : functional Component => A normal js function which return JSX
const HeadingComponent = () => (
  <div id="container">
    {/* using react compenent */}
    <Title />
    {/* using {} */}
    {jsxHeading}
    <h1 id="heading" className="heading">
      Namaste React using FN Component
    </h1>
  </div>
);

//step 2: where you whant to render
const root = ReactDOM.createRoot(document.getElementById("root"));

//step 3: render
root.render(<HeadingComponent />);
