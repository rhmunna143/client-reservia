import Banner from "../../components/Header/Banner";
import About from "./about/About";
import Deal from "./deal/Deal";
import TopFoods from "./topFoods/topFoods";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <TopFoods></TopFoods>
            <Deal></Deal>
        </div>
    );
};

export default Home;