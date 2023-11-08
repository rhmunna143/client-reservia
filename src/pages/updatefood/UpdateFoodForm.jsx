import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Loader from "../../components/Loader/Loader";
import { useParams } from "react-router-dom";
import { AllContext } from "../../Hooks/AllContext";
import toast from "react-hot-toast";


const UpdateFoodForm = () => {
    const { id } = useParams()
    const [food, setFood] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const { user, setErr } = useContext(AllContext)

    const { name, image, category, price, origin, description, quantity, uid } = food;

    const userName = user?.displayName;
    const userEmail = user?.email;
    const userId = user?.uid;

    useEffect(() => {
        axios.get(`https://reservia-server.vercel.app/foods/${id}`)
            .then(res => {
                setFood(res?.data)
                setIsLoading(false)
            })

    }, [id])

    if (isLoading) {
        return <Loader />
    }

    const handleUpdateItem = (e) => {
        e.preventDefault()

        const form = e.target;
        const url = `https://reservia-server.vercel.app/api/food/update?id=${id}`;

        const name = form.name.value;
        const image = form.image.value;
        const category = form.category.value;
        const quantity = form.quantity.value;
        const price = form.price.value;
        const description = form.description.value;
        const origin = form.origin.value;

        const send = {
            name,
            image,
            category,
            quantity,
            price,
            description,
            origin
        }

        if (userId !== uid) {
            return toast.error("Failed! You are not the food owner.")
        }

        axios.patch(url, send, {
            withCredentials: true
        })
            .then(res => {
                if (res?.data?.modifiedCount > 0) {
                    toast.success("Successfully updated the food.")
                }
            })
            .catch(err => {
                toast.error(err?.message)
                setErr(err)
                console.log(err?.message);
            })
    }

    return (
        <div>
            <form onSubmit={handleUpdateItem}>
                <label><span className="font-medium">Food Name:</span> <br />
                </label>
                <input name="name" type="text" required placeholder="Your Name" defaultValue={name} className="px-4 py-2 border-primary border w-96 mt-5" /> <br /> <br />


                <label><span className="font-medium">Image URL:</span> <br />
                    <input name="image" type="text" required placeholder="Image URL" defaultValue={image} className="px-4 py-2 border-primary border w-96 mt-5" />
                </label> <br /> <br />

                <label><span className="font-medium">Category:</span> <br />
                    <input name="category" type="text" required placeholder="Food Category" defaultValue={category} className="px-4 py-2 border-primary border w-96 mt-5" />
                </label> <br /> <br />

                <label><span className="font-medium">Quantity (Stock):</span> <br />
                    <input name="quantity" type="number" required placeholder="Quantity (Stock)" defaultValue={quantity} className="px-4 py-2 border-primary border w-96 mt-5" />
                </label> <br /> <br />

                <label><span className="font-medium">Price $:</span> <br />
                    <input name="price" type="number" required placeholder="$ Price" defaultValue={price} className="px-4 py-2 border-primary border w-96 mt-5" />
                </label>

                <div className="mt-5">
                    <p><span className="font-bold">Added & Updating by:</span> {userName}</p>
                    <p><span className="font-bold">Email:</span> {userEmail ? userEmail : "Not provided"}</p>

                    {/* Don't forget to take UID */}

                    {/* --------- Do not forget to take count = 0 ----------- */}
                </div>

                <label><span className="font-medium">Description:</span> <br />
                    <input name="description" type="text" required placeholder="Description" defaultValue={description} className="px-4 py-2 border-primary border w-96 mt-5 h-28" />
                </label>

                <br /> <br />
                <label><span className="font-medium">Origin (Country):</span> <br />
                    <input name="origin" type="text" required placeholder="Food Origin (Country)" defaultValue={origin} className="px-4 py-2 border-primary border w-96 mt-5" />
                </label>

                <br />
                <button type="submit" className="mt-5 bg-primary text-white px-4 py-2 font-medium hover:bg-black">Update Item</button>
            </form>
        </div>
    );
};

export default UpdateFoodForm;