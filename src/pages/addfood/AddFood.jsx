import AddFoodForm from "./AddFoodForm";
import img from "../../assets/svg/undraw_product_hunt_n-3-f5.svg"
import { Helmet } from "react-helmet-async";

const AddFood = () => {
    return (
        <div className="container mx-auto my-20">
            <Helmet>
                <title>Reservia | Add New Food</title>
            </Helmet>
            
            <h2 className="text-center font-bold text-5xl my-16">Add New Food</h2>
            <div className="flex flex-col-reverse md:flex-col lg:flex-row justify-around items-center gap-10">
                <div className="img">
                    <img src={img} alt="" className="w-4/5" />
                </div>

                <div className="form">
                    <AddFoodForm></AddFoodForm>
                </div>
            </div>
        </div>
    );
};

export default AddFood;

// flex flex-col-reverse md:flex-col lg:flex-row justify-around