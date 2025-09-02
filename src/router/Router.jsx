import { createBrowserRouter } from "react-router-dom"; 
import SignUp from "../pages/signup/SignUp";
import Login from "../pages/login/Login";
import Layout from "../pages/layout/Layout";
import Profile from "../pages/Profile";
import EditProfile from "../pages/editprofile/EditProfile";

export let myRoutes=createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[
            {
                path:"/",
                element:<SignUp/>
            },
            {
                path:"/login",
                element:<Login/>
            },
            {
                path:"/profile/:id",
                element:
                    <Profile/>
                
            },
            {
                path:"/edit/:id",
                element:
                    <EditProfile/>
                
                
            }
        ]
    }
])