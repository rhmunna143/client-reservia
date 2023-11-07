import { useState } from "react";
import "./allFood.css"

const AllFoodBanner = ({ handleSearch }) => {
    const [input, setInput] = useState("")

    const searchInput = (e) => {

        setInput(e?.target?.value)
    }

    return (
        <div className="banner-bg py-[200px]">
            <div className="w-fit mx-auto">
                <input onChange={searchInput} placeholder="Enter Search Query" className="px-4 py-2 border text-white border-primary w-96 bg-transparent" type="text" />

                <br /> <br />

                <div className="flex flex-col items-end">
                    <button onClick={() => handleSearch(input)} className="px-8 py-2 border border-primary bg-transparent text-white">Search</button>
                </div>
            </div>
        </div>
    );
};

export default AllFoodBanner;