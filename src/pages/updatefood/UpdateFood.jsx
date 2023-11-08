import UpdateFoodForm from "./UpdateFoodForm";
import img from "../../assets/svg/undraw_up_to_date_re_nqid.svg"
import { Helmet } from "react-helmet-async";

const UpdateFood = () => {
    return (
        <div className="container mx-auto my-20">
            <Helmet>
                <title>Reservia | Update A Food</title>
            </Helmet>
            <h2 className="text-center font-bold text-5xl my-16">Update A Food</h2>
            <div className="flex flex-col-reverse md:flex-col lg:flex-row justify-around items-center gap-10">
                <div className="img">
                    <img src={img} alt="" className="w-4/5" />
                </div>

                <div className="form">
                    <UpdateFoodForm></UpdateFoodForm>
                </div>
            </div>
        </div>
    );
};

export default UpdateFood;