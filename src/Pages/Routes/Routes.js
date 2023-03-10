import { async } from "@firebase/util";
import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../Home/Home/Home";
import MyFollowers from "../Home/MyProfile/MyFollowers/MyFollowers";
import MyProfile from "../Home/MyProfile/MyProfile";
import Login from "../Login/Login";
import ProfilePage from "../ProfilePage/ProfilePage";
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
                path: '/myprofile',
                element: <Protection><MyProfile></MyProfile></Protection>
            },
            {
                path: '/profile/:email',
                loader: async({params}) => await fetch(`http://localhost:5000/profile/${params.email}`),
                element: <ProfilePage></ProfilePage>
            },
            {
                path: '/followers',
                element: <MyFollowers></MyFollowers>
            }
        ]
    }
])