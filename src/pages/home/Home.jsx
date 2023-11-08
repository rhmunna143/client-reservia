import { Helmet } from "react-helmet";
import Banner from "../../components/Header/Banner";
import About from "./about/About";
import Deal from "./deal/Deal";
import TopFoods from "./topFoods/topFoods";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Reservia | Home</title>
            </Helmet>
            <Banner></Banner>
            <About></About>
            <TopFoods></TopFoods>
            <Deal></Deal>
        </div>
    );
};

export default Home;