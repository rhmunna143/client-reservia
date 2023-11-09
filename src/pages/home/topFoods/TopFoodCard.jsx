/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const TopFoodCard = ({ food }) => {
    const { image, name, category, price, _id } = food;

    return (
        <motion.div
            initial={{ x: 900 }}
            animate={{ x: 0 }}
            transition={{
                duration: 2,
                delay: 1
            }}
            className="shadow-md">
            <div className="img">
                <motion.img
                    whileHover={{
                        scale: [1, 0.9]
                    }}
                src={image} alt="" className="h-56 w-full mx-auto" />
            </div>

            <div className="text p-4">
                <h4 className="font-bold text-xl">{name}</h4>
                <h5 className="text-lg font-medium">{category}</h5>
                <p className="text-slate-500">Price: <span>$ {price}</span></p>

                <Link to={`/details/${_id}`}>
                    <button className="w-full bg-primary text-white py-2 mt-5 font-medium hover:bg-black">See Details</button>
                </Link>
            </div>
        </motion.div>
    );
};

export default TopFoodCard;