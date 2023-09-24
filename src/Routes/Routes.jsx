import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Donation from "../Pages/Donation";
import Statistcs from "../Pages/Statistcs";

const myRoutes = createBrowserRouter([
    {
        path: "/",
        element:<MainLayout></MainLayout>,
        children:[
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path:"/donation",
                element:<Donation></Donation>
            },
            {
                path:"/statistics",
                element: <Statistcs></Statistcs>
            }
        ]
    }

]);

export default myRoutes;