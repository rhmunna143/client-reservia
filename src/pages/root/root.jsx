import { Outlet } from "react-router-dom";
import Nav from "../../components/Header/Nav";


const Root = () => {
    return (
        <div className="">
            <Nav />
            <Outlet />
        </div>
    );
};

export default Root;