import { useQuery } from "@tanstack/react-query";
import SeparatorBlack from "../../components/separator/SeparatorBlack";
import { useContext, useState } from "react";
import { AllContext } from "../../Hooks/AllContext";
import toast from "react-hot-toast";
import Loader from "../../components/Loader/Loader";
import axios from "axios";
import OrderedRow from "./OrderedRow";
import swal from "sweetalert";
import { Helmet } from "react-helmet-async";

const MyOrder = () => {
    const [foods, setFoods] = useState([])

    const { user, setErr } = useContext(AllContext)
    const uid = user?.uid;


    // eslint-disable-next-line no-unused-vars
    const { isLoading, isError, data: initFoods, error } = useQuery({
        queryKey: ["initFoods"],
        queryFn: async () => {
            const res = await axios.get(`https://reservia-server.vercel.app/api/my-ordered/foods?uid=${user?.uid}`, {
                withCredentials: true
            })

            setFoods(res?.data)
            return res?.data
        }
    })

    if (isLoading) {
        return <Loader />
    }

    if (isError) {
        toast.error(error?.message)
        setErr(error)
        console.log(error.message);
    }

    const handleDelete = (id, buyerId) => {

        if (uid !== buyerId) {
            toast.error("Failed! you did not ordered this food.")
        }

        swal({
            title: "Are you sure?",
            text: "Once deleted, you have to order This Food again.",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    // delete function

                    axios.delete(`https://reservia-server.vercel.app/api/ordered/delete?id=${id}`, {
                        withCredentials: true
                    })
                        .then(res => {
                            if (res?.data?.deletedCount > 0) {

                                const filter = foods?.filter(food => food?._id !== id);
                                setFoods(filter)
                            }
                        })
                        .catch(err => {
                            toast.error(err.message)
                            setErr(err)
                            console.log(err.message);
                        })


                    toast.success("The Food is deleted! Order again.")
                } else {
                    swal("Your Food is not deleted.");
                }
            });
    }

    return (
        <div className="container mx-auto">
            <Helmet>
                <title>Reservia | My Orders</title>
            </Helmet>
            <div className="w-fit mx-auto text-center my-20">
                <h6 className="text-primary text-lg  font-playBall">Corporate Application</h6>
                <h2 className="text-4xl font-bold">My Ordered Foods</h2>
                <p className="mt-4">
                    All My Ordered foods. My Ordered are here.
                </p>

                <div className="mx-auto w-fit">
                    <SeparatorBlack />
                </div>
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
                            </tr>
                        </thead>


                        <tbody>


                            {
                                foods?.map((food, index) => <OrderedRow key={food?._id} food={food} index={index} handleDelete={handleDelete} />)
                            }


                        </tbody>


                        {/* foot */}
                        <tfoot>
                            <tr>
                                <th>No.</th>
                                <th>Name of Food</th>
                                <th>Price</th>
                                <th>Delete</th>
                            </tr>
                        </tfoot>

                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyOrder;