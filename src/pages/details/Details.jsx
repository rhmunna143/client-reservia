import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";


const Details = () => {
    const { id } = useParams()

    const { data: food, isLoading } = useQuery({
        queryKey: ["food"],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:8070/foods/${id}`)

            return res.data;
        }
    })

    const { name, image, category, userName, uid, email, price, origin, description } = food;

    console.log(uid, email);


    return (
        <div className="container mx-auto my-20">
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

                    <p className="max-w-lg italic">
                        {description}
                    </p>

                    <div className="w-fit mx-auto mt-5">
                        <button className="bg-primary text-white px-4 py-2 mt-5 hover:bg-black">Order Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;