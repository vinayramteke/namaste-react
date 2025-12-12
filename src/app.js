//step 0: Import whatever u will going to use
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider } from "react-router";
import About from "./components/About";

//step 0: Build Body of my Food App
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
  },
  {
    path: "/About",
    element: <About />,
  },
]);
//step 0: where you whant to render
const root = ReactDOM.createRoot(document.getElementById("root"));

//step 0: render
root.render(<RouterProvider router={appRouter} />);
