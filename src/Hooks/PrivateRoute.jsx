import { useContext } from "react";
import { AllContext } from "./AllContext";
import { Navigate } from "react-router-dom";
import Loader from "../components/Loader/Loader";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AllContext)

    if (loading) {
        return <Loader />
    }

    if (!user) {
        return <Navigate to={"/login"} />
    }


    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateRoute;