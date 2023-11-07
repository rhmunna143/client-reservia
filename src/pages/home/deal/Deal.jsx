import "./deal.css"
import offer from "../../../assets/img/offer.jpg"

const Deal = () => {
    return (
        <div className="bg-deal lg:py-60 py-14 mb-20">
            <div className="w-fit mx-auto">
                <img src={offer} alt="" />
            </div>
        </div>
    );
};

export default Deal;