import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import ErrorPage from "./ErrorPage";
import Login from "../Pages/LogRes/Login";
import Register from "../Pages/LogRes/Register";
import AllInstructor from "../Pages/Home/PopularInstructor/AllInstructor";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/register",
                element: <Register></Register>,
            },
            {
                path: "/instructors",
                element: <AllInstructor></AllInstructor>,
            },
        ],
    },
]);