import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Header from "./src/header";
import Body from "./src/body";
import { Footer } from "./src/footer";
import Home from "./src/homePage";
import MenuCard from "./src/menuCard";
import Trial from "./src/trial";
import SignupForm from "./src/signuUp";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
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
        path: "/home",
        element: <Home />,
      },
      {
        path: "/menucard/:id",
        element: <MenuCard />,
      },
      { path: "/trial", element: <Trial /> },
      { path: "/signUp", element: <SignupForm /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
