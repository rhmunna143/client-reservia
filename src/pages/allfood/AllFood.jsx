/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import SeparatorBlack from "../../components/separator/SeparatorBlack";
import AllFoodBanner from "./AllFoodBanner";
import axios from "axios";
import Loader from "../../components/Loader/Loader";
import FoodCard from "./FoodCard";


const AllFood = () => {

    const { error, isError, isLoading, data: foods } = useQuery({
        queryKey: ["foods"],
        queryFn: async () => {
            const res = await axios.get("http://localhost:8070/foods")

            return res?.data;
        }
    })

    if(isLoading) {
        return <Loader />
    }

    if(error){
        console.log(error?.message);
    }

    return (
        <div>
            <AllFoodBanner></AllFoodBanner>

            <div className="w-fit mx-auto text-center my-20">
                <h6 className="text-primary text-lg  font-playBall">Corporate Application</h6>
                <h2 className="text-4xl font-bold">All Foods</h2>
                <p className="mt-4">
                    Our all foods. Our foods are always best.
                </p>

                <SeparatorBlack />
            </div>

            <div className="container mx-auto my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 lg:px-0">
                {
                    foods?.map(food => <FoodCard key={food._id} food={food}></FoodCard>)
                }
            </div>
        </div>
    );
};

export default AllFood;