import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import ErrorPage from "./ErrorPage";
import Login from "../Pages/LogRes/Login";
import Register from "../Pages/LogRes/Register";
import AllInstructor from "../Pages/Home/PopularInstructor/AllInstructor";
import Dashboard from "../Dashboard/Dashboard";
import SelectedClass from "../Dashboard/Student/SelectedClass";
import ClassesPage from "../Pages/Home/ClassesPage";


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
                path: "/classesPage",
                element: <ClassesPage></ClassesPage>,
            },
            {
                path: "/instructors",
                element: <AllInstructor></AllInstructor>,
            },

        ],
    },
    {
        path: "dashboard",
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: "selectedClass",
                element: <SelectedClass></SelectedClass>,
            },
        ]
    },
]);