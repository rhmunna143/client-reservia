import "./allFood.css"

const AllFoodBanner = () => {
    return (
        <div className="banner-bg py-[200px]">
            <div className="w-fit mx-auto">
                <input placeholder="Enter Search Query" className="px-4 py-2 border border-primary w-96 bg-transparent" type="text" />

                <br /> <br />

                <div className="flex flex-col items-end">
                    <button className="px-8 py-2 border border-primary bg-transparent text-white">Search</button>
                </div>
            </div>
        </div>
    );
};

export default AllFoodBanner;