/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


const TopFoodCard = ({ food }) => {
    const { image, name, category, price, _id } = food;

    return (
        <div className="shadow-md">
            <div className="img">
                <img src={image} alt="" className="h-56 w-full mx-auto" />
            </div>

            <div className="text p-4">
                <h4 className="font-bold text-xl">{name}</h4>
                <h5 className="text-lg font-medium">{category}</h5>
                <p className="text-slate-500">Price: <span>$ {price}</span></p>

                <Link to={`/details/${_id}`}>
                    <button className="w-full bg-primary text-white py-2 mt-5 font-medium hover:bg-black">See Details</button>
                </Link>
            </div>
        </div>
    );
};

export default TopFoodCard;