import {createBrowserRouter} from "react-router-dom"
import HomePage from "../pages/Home/HomePage";
import LoginPage from "../pages/Login/LoginPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <LoginPage/>
    },
    {
        path: "/HomePage/:username",
        element: <HomePage/>
    }
])