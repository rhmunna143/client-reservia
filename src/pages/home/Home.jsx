import Banner from "../../components/Header/Banner";
import About from "./about/About";
import TopFoods from "./topFoods/topFoods";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <TopFoods></TopFoods>
        </div>
    );
};

export default Home;