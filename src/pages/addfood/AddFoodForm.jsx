import axios from "axios";
import { useContext } from "react";
import toast from "react-hot-toast";
import { AllContext } from "../../Hooks/AllContext";


const AddFoodForm = () => {
    const { user, setErr } = useContext(AllContext)

    const userName = user?.displayName;
    const userEmail = user?.email;
    const uid = user?.uid;

    const url = `http://localhost:8070/add?uid=${uid}`

    const handleAddItem = (e) => {
        e.preventDefault()

        const form = e.target;

        const name = form.name.value;
        const image = form.image.value;
        const category = form.category.value;
        const quantity = form.quantity.value;
        const price = form.price.value;
        const description = form.description.value;
        const origin = form.origin.value;
        const count = 0;

        const send = {
            name,
            image,
            category,
            quantity,
            price,
            description,
            origin,
            count,
            userName,
            userEmail,
            uid
        }

        axios.post(url, send, {
            withCredentials: true
        })
            .then(response => {
                if (response.data.insertedId) {
                    toast.success("Successfully Added a new food item!!!");
                }
            })
            .catch(error => {
                toast.error(error.message);
                setErr(error)
                console.error(error);
            });
    }
    
    return (
        <div>
            <form onSubmit={handleAddItem}>
                <input name="name" type="text" required placeholder="Food Name" className="px-4 py-2 border-primary border w-96 mt-5" />
                <br />
                <input name="image" type="text" required placeholder="Image URL" className="px-4 py-2 border-primary border w-96 mt-5" />
                <br />
                <input name="category" type="text" required placeholder="Food Category" className="px-4 py-2 border-primary border w-96 mt-5" />
                <br />
                <input name="quantity" type="number" required placeholder="Quantity (Stock)" className="px-4 py-2 border-primary border w-96 mt-5" />

                <br />
                <input name="price" type="number" required placeholder="$ Price" className="px-4 py-2 border-primary border w-96 mt-5" />

                <div className="mt-5">
                    <p><span className="font-bold">Adding by:</span> {userName}</p>
                    <p><span className="font-bold">Email:</span> {userEmail ? userEmail : "Not provided"}</p>

                    {/* Don't forget to take UID */}

                    {/* --------- Do not forget to take count = 0 ----------- */}
                </div>

                <input name="description" type="text" required placeholder="Description" className="px-4 py-2 border-primary border w-96 mt-5 h-28" />

                <br />
                <input name="origin" type="text" required placeholder="Food Origin (Country)" className="px-4 py-2 border-primary border w-96 mt-5" />

                <br />
                <button type="submit" className="mt-5 bg-primary text-white px-4 py-2 font-medium hover:bg-black">Add Item</button>
            </form>
        </div>
    );
};

export default AddFoodForm;