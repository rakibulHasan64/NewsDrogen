import { createBrowserRouter } from "react-router-dom";
import MaineLayou from "../src/cmponet/mainlayou/MaineLayou";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MaineLayou />,
    children: [
      {

      }
    ]
  }
])