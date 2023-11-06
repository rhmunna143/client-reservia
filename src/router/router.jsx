import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/root/root";
import Home from "../pages/home/Home";
import AddFood from "../pages/addfood/AddFood";
import Details from "../pages/details/Details";
import MyOrder from "../pages/myorder/myOrder";
import OrderPage from "../pages/order/OrderPage";
import UpdateFood from "../pages/updatefood/UpdateFood";
import Register from "../pages/register/Register";
import Login from "../pages/login/Login";
import AddedFood from "../pages/addedFood/AddedFood";
import AllFood from "../pages/allfood/AllFood";
import Blogs from "../pages/blogs/Blogs";
import NotFoundPage from "../pages/NotFound/NotFound";
import PrivateRoute from "../Hooks/PrivateRoute";


const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <NotFoundPage />,
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },

            {
                path: "/add",
                element: <PrivateRoute><AddFood></AddFood></PrivateRoute>
            },

            {
                path: "/details/:id",
                element: <Details></Details>
            },

            {
                path: "/ordered",
                element: <PrivateRoute><MyOrder></MyOrder></PrivateRoute>
            },

            {
                path: "/order",
                element: <OrderPage></OrderPage>
            },

            {
                path: "/update",
                element: <PrivateRoute><UpdateFood></UpdateFood></PrivateRoute>
            },

            {
                path: "/register",
                element: <Register></Register>
            },

            {
                path: "/login",
                element: <Login></Login>
            },

            {
                path: "/added",
                element: <PrivateRoute><AddedFood></AddedFood></PrivateRoute>
            },

            {
                path: "/all",
                element: <AllFood></AllFood>
            },

            {
                path: "blogs",
                element: <Blogs></Blogs>
            }
        ]
    }
])

export default router;