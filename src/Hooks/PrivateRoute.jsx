import { useContext } from "react";
import { AllContext } from "./AllContext";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../components/Loader/Loader";

const PrivateRoute = ({ children }) => {
    const { user, loading, setPath } = useContext(AllContext)
    const location = useLocation()
    const path = location.pathname;


    if (loading) {
        return <Loader />
    }

    if (!user) {
        setPath(path)
        return <Navigate to={"/login"} />
    }


    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateRoute;