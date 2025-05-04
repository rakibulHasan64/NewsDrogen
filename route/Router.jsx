import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../src/cmponet/mainlayou/MaineLayou"; // যদি spelling ঠিক থাকে তাহলে MaineLayou ই থাকুক
import Home from "../src/cmponet/home/Home";
import CatgoryNews from "../src/cmponet/home/CatgoryNews";
import AuthLayout from "../src/cmponet/home/AuthLayout";
import Login from "../src/cmponet/auth/Login";
import Register from "../src/cmponet/auth/Reguster"; 
import NwesDetlis from "../src/cmponet/home/NwesDetlis";
import PrivateRoute from "../src/cmponet/auth/PrivateRoute";
import Lodding from "../src/cmponet/auth/Loddinge";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/category/:id",
        element: <CatgoryNews />,
        loader: () => fetch("/nwes.json"),
        hydrateFallbackElement:<Lodding />
      }
    ]
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "/auth/login",
        index: true,
        element: <Login />
      },
      {
        path: "/auth/register",
        element: <Register />
      }
    ]
  },
  {
    path: "/news/:id",
    element: <PrivateRoute >
      <NwesDetlis />
      </PrivateRoute>,
    loader: () => fetch("/nwes.json"),
    hydrateFallbackElement: <Lodding />
  }

]);
