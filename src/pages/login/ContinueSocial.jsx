import { useContext, useState } from "react";
import { AllContext } from "../../Hooks/AllContext";
import toast from "react-hot-toast";
import { Navigate } from "react-router-dom";


const ContinueSocial = () => {
    const [loggedUser, setLoggedUser] = useState(null)
    const { googleSignIn, path } = useContext(AllContext)

    const handleSignIn = () => {

        googleSignIn()
            .then(res => {
                const user = res?.user;
                setLoggedUser(user)
                toast.success(user?.displayName + "! Welcome. Login success.")
            })
            .catch(err => {
                toast.error(err?.message)
                console.error(err)
            })
    }

    return (
        <div className="my-2">
            <p className="mb-4">or,</p>
            <button onClick={handleSignIn} className="border border-primary py-2 w-full rounded-xl hover:bg-black hover:text-white font-medium text-primary">Continue with Google</button>

            {
                loggedUser && <Navigate to={path || "/"} />
            }
        </div>
    );
};

export default ContinueSocial;