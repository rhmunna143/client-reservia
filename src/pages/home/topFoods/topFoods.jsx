/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import SeparatorBlack from "../../../components/separator/SeparatorBlack";
import axios from "axios";
import Loader from "../../../components/Loader/Loader";
import TopFoodCard from "./TopFoodCard";


const TopFoods = () => {

    const { isLoading, data: topFoods, error } = useQuery({
        queryKey: ["topFoods"],
        queryFn: async () => {
            const res = await axios.get("http://localhost:8070/top-foods")

            return res?.data;
        }
    })

    if (isLoading) {
        return <Loader />
    }

    if (error) {
        console.log(error?.message)
    }

    return (
        <div className="container mx-auto mt-20 pt-20 text-lg px-4 lg:px-0">
            <div className="text-center">
                <h6 className="text-primary font-playBall">Corporate Applications</h6>
                <h2 className="text-5xl font-bold">Top Selling Foods</h2>
                <p className="mt-4">
                    "Explore our top-selling dishes, crafted for your delight."
                </p>

                <div className="w-fit mx-auto">
                    <SeparatorBlack></SeparatorBlack>
                </div>
            </div>

            {/* Cards here */}
            <div className="my-20  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    topFoods?.map(food => <TopFoodCard key={food?._id} food={food} />)
                }
            </div>

            <div className="w-fit mx-auto">
                <Link to={"/all"}>
                    <button className="bg-primary text-white font-medium px-4 py-2 hover:bg-black">See All Foods</button>
                </Link>
            </div>
        </div>
    );
};

export default TopFoods;