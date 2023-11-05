import { Outlet } from "react-router-dom";
import Nav from "../../components/Header/Nav";
import Footer from "../../components/footer/Footer";


const Root = () => {
    return (
        <div className="">
            <Nav />
            <Outlet />
            <Footer></Footer>
        </div>
    );
};

export default Root;