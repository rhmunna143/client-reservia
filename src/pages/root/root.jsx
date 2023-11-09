import { Outlet } from "react-router-dom";
import Nav from "../../components/Header/Nav";
import Footer from "../../components/footer/Footer";
import { Toaster } from "react-hot-toast";
import { HelmetProvider } from "react-helmet-async";


const Root = () => {
    return (
        <HelmetProvider>
            <div style={{overflowX: "hidden"}} className="">
                <Nav />
                <Outlet />
                <Footer></Footer>
                <Toaster
                    position="top-right"
                    reverseOrder={false}
                />
            </div>
        </HelmetProvider>
    );
};

export default Root;