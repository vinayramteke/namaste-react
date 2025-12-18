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
import RestroMenu from "./components/RestroMenu";

//step 0: Build Body of my Food App
const AppLayout = () => {
  return (
    <div className="app-layout font-sans text-gray-950 m-0 bg-[#f9fafb] ">
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
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:restroId",
        element: <RestroMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);
//step 0: where you whant to render
const root = ReactDOM.createRoot(document.getElementById("root"));

//step 0: render
root.render(<RouterProvider router={appRouter} />);
