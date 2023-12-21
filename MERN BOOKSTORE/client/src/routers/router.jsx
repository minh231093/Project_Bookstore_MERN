import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import App from "../App";
import Home from "../home/Home";
import Shop from "../shop/Shop";
import About from "../components/About";
import Blog from "../components/Blog";
import SingleBook from "../shop/SingleBook";
import SignIn from "../Account/SignIn";
import SignUp from "../Account/SignUp";
import Signup from "../components/Signup";
import Login from "../components/Login";
import Logout from "../components/Logout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <Home/>
            }, 
            {
                path: "/shop",
                element: <Shop/>
            }, 
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/blog",
                element: <Blog/>
            },
            {
                path: "/book/:id",
                element: <SingleBook/>,
                loader: async ({ params }) => {
                    const response = await fetch(`http://localhost:5000/book/${params.id}`);
                    const data = await response.json();
                    return data;
                }
            },
            {
                path: "/account/signin",
                element: <SignIn/>
            }, 
            {
                path: "/account/signup",
                element: <SignUp/>
            }
        ]
    }, 
    {
        path: "/sign-up",
        element: <Signup/>
    }, {
        path: "/login",
        element: <Login/>
    }, {
        path: "/logout",
        element: <Logout/>
    }
]);

export default router;