import "./deal.css"
import offer from "../../../assets/img/offer.jpg"
import { motion } from "framer-motion";

const Deal = () => {
    return (
        <div className="bg-deal lg:py-60 py-14 mb-20">
            <motion.div
                animate={{ x: 0 }}
                transition={{
                    duration: 2,
                    delay: 1
                }}
                whileHover={{
                    scale: 0,
                    opacity: 0.1
                }}
                className="w-fit mx-auto">
                <img src={offer} alt="" />
            </motion.div>
        </div>
    );
};

export default Deal;