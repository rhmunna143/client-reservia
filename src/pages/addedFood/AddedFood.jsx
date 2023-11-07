/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import SeparatorBlack from "../../components/separator/SeparatorBlack";
import Loader from "../../components/Loader/Loader";
import toast from "react-hot-toast";
import { useContext } from "react";
import { AllContext } from "../../Hooks/AllContext";
import axios from "axios";
import AddedFoodRow from "./AddedFoodRow";

const AddedFood = () => {
    const { user } = useContext(AllContext)

    const { isLoading, isError, data: foods, error } = useQuery({
        queryKey: ["foods"],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:8070/api/my-added/foods?uid=${user?.uid}`, {
                withCredentials: true
            })

            return res?.data
        }
    })

    if (isLoading) {
        return <Loader />
    }

    if (isError) {
        toast.error(error?.message)
        console.log(error.message);
    }

    return (
        <div className="container mx-auto mb-20">

            <div className="w-fit mx-auto text-center my-20">
                <h6 className="text-primary text-lg  font-playBall">Corporate Application</h6>
                <h2 className="text-4xl font-bold">My Added Foods</h2>
                <p className="mt-4">
                    All My foods. My foods are always best.
                </p>

                <SeparatorBlack />
            </div>

            <div className="table">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    No.
                                </th>
                                <th>Name of Food</th>
                                <th>Price</th>
                                <th>Delete</th>
                                <th>Action</th>
                            </tr>
                        </thead>


                        <tbody>


                            {
                                foods?.map((food, index) => <AddedFoodRow key={food?._id} food={food} index={index} />)
                            }


                        </tbody>


                        {/* foot */}
                        <tfoot>
                            <tr>
                                <th>No.</th>
                                <th>Name of Food</th>
                                <th>Price</th>
                                <th>Delete</th>
                                <th>Action</th>
                            </tr>
                        </tfoot>

                    </table>
                </div>
            </div>
        </div>
    );
};

export default AddedFood;