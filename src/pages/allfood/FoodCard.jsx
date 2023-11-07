/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const FoodCard = ({food}) => {

    return (
        <div className="border lg:w-96">
            <div className="img">
                <img src={food?.image} alt="" className="lg:w-96 h-56 mx-auto" />
            </div>

            <div className="text p-2 lg:p-4">
                <h4 className="font-bold text-lg">{food.name}</h4>
                <h5 className="w-fit text-green-600">{food.category}</h5>
                <h6 className="">Stock: <span className="text-lg">{food.quantity}</span> item/s</h6>
                <p className="text-slate-500">Price: $ {food.price}</p>

                <Link to={`/details/${food?._id}`}>
                    <button className="bg-primary text-white px-4 py-2 mt-4 w-full hover:bg-black">See Details</button>
                </Link>
            </div>
        </div>
    );
};

export default FoodCard;