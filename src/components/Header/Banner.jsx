import { Link } from "react-router-dom";
import SeparatorWhite from "../separator/SeparatorWhite";
import "./banner.css"
import { motion } from "framer-motion"

const Banner = () => {
    return (
        <div className="banner-bg py-[150px] flex items-end justify-end flex-col">
            <motion.div
                initial={{ x: -900 }}
                animate={{ x: 0 }}
                transition={{
                    duration: 2,
                    delay: 1
                }}
                className="text-white lg:w-1/2 lg:pr-20 px-4 lg:px-0">
                <h2 className="text-5xl font-playBall">All Delicious Foods Here</h2>
                <p className="font-medium mt-5">
                    "Experience the future of restaurant management! Our platform offers seamless table reservations, staff scheduling, and inventory control, helping you boost profits and create unforgettable dining experiences. Join us for culinary success today!"
                </p>

                <SeparatorWhite></SeparatorWhite>

                <Link to={"/all"}>
                    <button className="text-black bg-white px-4 py-2 font-semibold hover:bg-primary hover:text-white">
                        Order Now
                    </button>
                </Link>
            </motion.div>
        </div>
    );
};

export default Banner;