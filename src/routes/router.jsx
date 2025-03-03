import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import AddCampaigns from "../pages/AddCampaigns/AddCampaigns";
import CampaignDetails from "../pages/CampaignDetails/CampaignDetails";
import AllCampaigns from "../pages/AllCampaigns/AllCampaigns";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/campaigns')
            },
            {
                path: "/campaign/:id",
                element: <CampaignDetails></CampaignDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/campaign/${params.id}`)
            },
            {
                path: "/allCampaigns",
                element: <AllCampaigns></AllCampaigns>,
                loader: () => fetch('http://localhost:5000/campaigns')
            },
            {
                path: "login",
                element: <Login></Login>
            },
            {
                path: "register",
                element: <Register></Register>
            },
            {
                path: "/addCampaigns",
                element: <AddCampaigns></AddCampaigns>,
            }
        ]
    },
    {
        path: "*",
        element: <h2>Error Occurred!</h2>
    }
])

export default router;