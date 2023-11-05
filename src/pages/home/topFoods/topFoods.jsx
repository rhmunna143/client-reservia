import { Link } from "react-router-dom";
import SeparatorBlack from "../../../components/separator/SeparatorBlack";


const TopFoods = () => {
    return (
        <div className="container mx-auto text-center py-20 text-lg px-4 lg:px-0">
            <h6 className="text-primary font-playBall">Corporate Applications</h6>
            <h2 className="text-5xl font-bold">Top Selling Foods</h2>
            <p className="mt-4">
                "Explore our top-selling dishes, crafted for your delight."
            </p>

            <div className="w-fit mx-auto">
                <SeparatorBlack></SeparatorBlack>
            </div>

            {/* Cards here */}
            <div className="mt-20">

            </div>

            <div>
                <Link to={"/all"}>
                    <button className="bg-primary text-white font-medium px-4 py-2 hover:bg-black">See All Foods</button>
                </Link>
            </div>
        </div>
    );
};

export default TopFoods;