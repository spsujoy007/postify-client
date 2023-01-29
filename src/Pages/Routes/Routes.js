import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../Home/Home/Home";
import MyProfile from "../Home/MyProfile/MyProfile";
import Login from "../Login/Login";
import Protection from "../Protection/Protection";
import Signup from "../Signup/Signup";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Protection><Home></Home></Protection>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/profile',
                element: <Protection><MyProfile></MyProfile></Protection>
            },
        ]
    }
])