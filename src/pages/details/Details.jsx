/* eslint-disable no-unused-vars */
import axios from "axios";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AllContext } from "../../Hooks/AllContext";
import toast from "react-hot-toast";
import Loader from "../../components/Loader/Loader";
import { Helmet } from "react-helmet-async";

const Details = () => {
    const [food, setFood] = useState({})
    const [stock, setStock] = useState("")
    const [isLoading, setIsLoading] = useState(true)

    const { user, setErr } = useContext(AllContext)
    const { id } = useParams()
    const buyerId = user?.uid;

    const { name, image, category, userName, price, origin, description, count, quantity, uid } = food;

    useEffect(() => {
        axios.get(`https://reservia-server.vercel.app/foods/${id}`)
            .then(res => {
                setFood(res?.data)
                setStock(res?.data?.quantity)
                setIsLoading(false)
            })
            .catch(err => {
                toast.error(err.message)
            })

    }, [id, stock])

    if (isLoading) {
        return <Loader />
    }

    const handleOrder = (ordered, stock) => {
        const sellerId = uid;
        let quantity = parseInt(stock);
        let count = ordered;

        if (buyerId == sellerId) {
            return toast.error("You can not buy your won food!!! Try another one.")
        }

        if (stock < 1) {
            return toast.error("Out of Stock. Try again Later")
        }

        count++;
        quantity--;
        setStock(quantity)

        axios.post(`https://reservia-server.vercel.app/order?uid=${buyerId}`, {
            name,
            image,
            category,
            userName,
            price,
            origin,
            description,
            count,
            quantity,
            uid,
            buyerId
        }, {
            withCredentials: true
        })
            .then(res => {
                if (res?.data?.insertedId) {
                    // update count and quantity here

                    axios.patch(`https://reservia-server.vercel.app/food?id=${id}`, {
                        count,
                        quantity
                    }, {
                        withCredentials: true
                    })
                        .then(res => {
                            if (res?.data?.modifiedCount > 0) {
                                toast.success("You Ordered Successfully! See in My Order Page.")
                            }
                        })
                        .catch(err => {
                            toast.error(err.message)

                            console.log(err.message);
                        })
                }
            })
            .catch(err => {
                toast.error(err?.message)
                console.log(err.message);
            })
    }

    return (
        <div className="container mx-auto my-20">
            <Helmet>
                <title>Reservia | Food Details</title>
            </Helmet>
            <div className="px-4 lg:px-0">
                <div className="img">
                    <img src={image} alt="" className="h-[500px] mx-auto" />
                </div>

                <div className="text-lg w-fit mx-auto space-y-2">
                    <h2 className="text-4xl font-bold text-primary mt-10">{name}</h2>
                    <h4 className="">{category}</h4>
                    <p className="text-slate-500">Price: $ {price}</p>
                    <p><span className="font-bold">Made by: </span> {userName}</p>
                    <p><span className="font-bold">Origin: </span> {origin}</p>

                    <p><span className="text-fuchsia-500">In Stock:</span> {stock} item/s</p>

                    <p className="max-w-lg italic">
                        {description}
                    </p>

                    <div className="w-fit mx-auto mt-5">
                        <button onClick={() => handleOrder(count, quantity)} className="bg-primary text-white px-4 py-2 mt-5 hover:bg-black">Order Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;