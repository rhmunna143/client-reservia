/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import SeparatorBlack from "../../components/separator/SeparatorBlack";
import AllFoodBanner from "./AllFoodBanner";
import axios from "axios";
import Loader from "../../components/Loader/Loader";
import FoodCard from "./FoodCard";
import { useEffect, useState } from "react";
import { Pagination } from "antd";
import { Helmet } from "react-helmet-async";


const AllFood = () => {
    const [current, setCurrent] = useState(1);
    const [loading, setLoading] = useState(true)
    const [foods, setFoods] = useState([])
    const [totalFoods, setTotalFoods] = useState("")

    const foodsPerPage = 9;

    const { error, isError, isLoading, data: initFoods } = useQuery({
        queryKey: ["initFoods"],
        queryFn: async () => {
            const res = await axios.get(`https://reservia-server.vercel.app/foods?page=${current}&limit=${foodsPerPage}`)

            setFoods(res?.data)
            return res?.data;
        }
    })

    useEffect(() => {
        setLoading(true)

        axios.get("https://reservia-server.vercel.app/api/foods-length", {
            withCredentials: true
        })
            .then(res => {
                setTotalFoods(res?.data?.length)

                setLoading(false)
            })
            .catch(err => {
                console.error(err.message);
            })
    }, [])

    const handleSearch = (search) => {

        axios.get(`https://reservia-server.vercel.app/api/foods/search?search=${search}`, {
            withCredentials: true
        })
            .then(res => {
                setFoods(res?.data)
            })
            .catch(err => {
                console.log(err.message);
            })
    }

    const onChange = (page) => {
        console.log(page);
        setCurrent(page);

        axios.get(`https://reservia-server.vercel.app/foods?page=${page}&limit=${foodsPerPage}`)
            .then(res => {
                setFoods(res?.data)
            })
    };

    if (loading || isLoading) {
        return <Loader />
    }

    return (
        <div>
            <Helmet>
                <title>Reservia | All Foods</title>
            </Helmet>

            <AllFoodBanner handleSearch={handleSearch}></AllFoodBanner>

            <div className="w-fit mx-auto text-center my-20">
                <h6 className="text-primary text-lg  font-playBall">Corporate Application</h6>
                <h2 className="text-4xl font-bold">All Foods</h2>
                <p className="mt-4">
                    Our all foods. Our foods are always best.
                </p>

                <SeparatorBlack />
            </div>

            <div className="container mx-auto mb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 lg:px-0">
                {
                    foods?.map(food => <FoodCard key={food._id} food={food}></FoodCard>)
                }
            </div>
            <div className="container mx-auto mt-20 text-center">
                <div className="w-fit mx-auto my-20">
                    <Pagination pageSize={foodsPerPage} current={current} onChange={onChange} total={totalFoods} />
                </div>
            </div>
        </div>
    );
};

export default AllFood;