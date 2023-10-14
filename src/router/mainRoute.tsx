import {createBrowserRouter} from "react-router-dom"
import Layout from "../static/Layout"
import Home from "../pages/Home/Home"
import Login from "../pages/AuthPages/Login"
import SignIn from "../pages/AuthPages/SignIn"
import DashBoardLayout from "../pages/DashBoard/DashBoardLayout"
import UserHome from "../pages/DashBoardPages/UserHome"


export const mainRoute = createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[
           {
            index:true,
            element:<Home/>
           } 
        ]
    },
    {
        path:"/login",
        element:<Login/>
    },
    {
        path:"/sign-in",
        element:<SignIn/>
    },
    {
        path:"/userdashboard",
        element:<DashBoardLayout/>,
        children:[
            {
                index:true,
                element:<UserHome/>
            }
        ]
    }
])