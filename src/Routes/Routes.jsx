import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Donation from "../Pages/Donation";
import Statistcs from "../Pages/Statistcs";
import DonationDetails from "../Pages/DonationDetails/DonationDetails";

const myRoutes = createBrowserRouter([
    {
        path: "/",
        element:<MainLayout></MainLayout>,
        children:[
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('/data.json'),
            },
            {
                path:"/donation",
                element:<Donation></Donation>
            },
            {
                path:"/statistics",
                element: <Statistcs></Statistcs>
            },
            {
                path: "/donationDetail/:id",
                element: <DonationDetails></DonationDetails>,
                loader: () => fetch('/data.json')
            }
            
        ]
    }

]);

export default myRoutes;