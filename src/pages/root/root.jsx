import { Outlet } from "react-router-dom";
import Nav from "../../components/Header/Nav";
import Footer from "../../components/footer/Footer";
import { Toaster } from "react-hot-toast";


const Root = () => {
    return (
        <div className="">
            <Nav />
            <Outlet />
            <Footer></Footer>
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
        </div>
    );
};

export default Root;