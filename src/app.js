//step 0: Import whatever u will going to use
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router"; //for rounting
//pages Import
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";

//step 0: Build Body of my Food App
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
    ],
    errorElement: <Error />,
  },
]);
//step 0: where you whant to render
const root = ReactDOM.createRoot(document.getElementById("root"));

//step 0: render
root.render(<RouterProvider router={appRouter} />);
