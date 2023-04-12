import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home/Home";
import AllServices from "../Pages/Home/AllServices/AllServices";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader:()=>fetch('http://localhost:5000/services')
      },
      {
        path: "/services",
        element: <AllServices></AllServices>,
        loader:()=>fetch('http://localhost:5000/allservices')
      },
      {
        path: "/allservices/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader:({params})=>fetch(`http://localhost:5000/allservices/${params.id}`)
      },
    ],
  },
]);
