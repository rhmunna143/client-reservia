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


const router = createBrowserRouter([
    {
        path:"/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },

            {
                path: "/add",
                element: <AddFood></AddFood>
            },

            {
                path: "/details/:id",
                element: <Details></Details>
            },

            {
                path: "/ordered",
                element: <MyOrder></MyOrder>
            },

            {
                path: "/order",
                element: <OrderPage></OrderPage>
            },

            {
                path: "/update",
                element: <UpdateFood></UpdateFood>
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
                element: <AddedFood></AddedFood>
            }
        ]
    }
])

export default router;