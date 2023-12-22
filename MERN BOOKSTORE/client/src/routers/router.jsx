import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import App from "../App";
import Home from "../home/Home";
import Shop from "../shop/Shop";
import About from "../components/About";
import Author from "../components/Author";
import AuthorDetail from "../components/AuthorDetail";
import SingleBook from "../shop/SingleBook";
import SignIn from "../Account/SignIn";
import SignUp from "../Account/SignUp";
import Signup from "../components/Signup";
import Login from "../components/Login";
import Logout from "../components/Logout";
import DashboardLayout from "../dashboard/DashboardLayout";
import Dashboard from "../dashboard/Dashboard";
import UploadBook from "../dashboard/UploadBook";
import ManageBook from "../dashboard/ManageBook";
import EditBook from "../dashboard/EditBook";
import Login from "../components/login";
import Register from "../components/Register";
import CreateAuthor from "../dashboard/CreateAuthor";
import EditAuthor from "../dashboard/EditAuthor";
import ManageAuthor from "../dashboard/ManageAuthor";

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
              path: "/author",
              element: <Author />,
            },
            {
                path: "/blog",
                element: <Blog/>
            },
            {
              path: "/Login",
              element: <Login />,
            },
            {
              path: "/Register",
              element: <Register />,
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
      path: "/admin/dashboard",
      element: <DashboardLayout />,
      children: [
        {
          path: "/admin/dashboard",
          element: <Dashboard />,
        },
        {
          path: "/admin/dashboard/upload-book",
          element: <UploadBook />,
        },
        {
          path: "/admin/dashboard/manage",
          element: <ManageBook />,
        },
        {
          path: "/admin/dashboard/edit-book/:id",
          element: <EditBook />,
          loader: ({ params }) =>
            fetch(`http://localhost:5000/book/${params.id}`),
        },
  
        {
          path: "/admin/dashboard/create-author",
          element: <CreateAuthor />,
        },
  
        {
          path: "/admin/dashboard/manage-author",
          element: <ManageAuthor />,
        },
        {
          path: "/admin/dashboard/edit-author/:id",
          element: <EditAuthor />,
          loader: ({ params }) =>
            fetch(`http://localhost:5000/author/${params.id}`),
        },
      ],
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