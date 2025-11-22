//step 0: Import whatever u will going to use
import React from "react";
import ReactDOM from "react-dom/client";
//step 1: what you whant to render
const heading = React.createElement("h1", { id: "heading" }, "Namaste React");
//step 2: where you whant to render
const root = ReactDOM.createRoot(document.getElementById("root"));
//step 3: render
root.render(heading);
