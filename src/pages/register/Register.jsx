import { Link, Navigate } from "react-router-dom";
import img from "../../assets/svg/undraw_mobile_payments_re_7udl.svg"
import { useContext, useState } from "react";
import ContinueSocial from "../login/ContinueSocial";
import { AllContext } from "../../Hooks/AllContext";
import { updateProfile } from "firebase/auth";
import { auth } from "../../Config/firebase.config";
import axios from "axios";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";

const Register = () => {
    const [registeredUser, setRegisteredUser] = useState(null)
    const [error, setPassError] = useState("")
    const {register} = useContext(AllContext)

    const url = "https://reservia-server.vercel.app/user";

    const handleRegister = (e) => {
        e.preventDefault()

        const passwordPattern = /^.{6,}$/;
        const capitalLetterPattern = /[A-Z]/;
        const specialCharacterPattern = /[^A-Za-z0-9]/;

        const form = e.target;

        const name = form.name.value;
        const image = form.image.value;
        const email = form.email.value;
        const password = form.password.value;

        setPassError("")

        if (!passwordPattern.test(password)) {
            setPassError("Password must be 6 character or greater!")

            return;
        } else if (!capitalLetterPattern.test(password)) {
            setPassError("Password must have one Capital letter!")

            return;
        } else if (!specialCharacterPattern.test(password)) {
            setPassError("Password must have a special character!")

            return;
        }

        // for truthy password go to register
        // register statements

        register(email, password)
        .then(res => {
            const user = res.user;

            updateProfile(auth.currentUser, {
                displayName: name,
                photoURL: image
            })

            if(user) {
                setRegisteredUser(user)

                // DB functions
                axios.post(url, user, {
                    withCredentials: true
                })
                .then(res => {
                    // DB toast success

                    if (res?.data?.insertedId){
                        toast.success("Registration success! User credentials saved. Please Login.")
                    }
                    
                    console.log(res.data);
                })
                .catch(err => {
                    toast.error(err?.message)
                })

            }
        })
        .catch(err => {
            toast.error(err?.message)
            console.log(err.message);
        })
    }


    return (
        <div className="container mx-auto my-20 flex flex-col-reverse gap-10 lg:flex-row justify-around items-center ">
            <Helmet>
                <title>Reservia | Register</title>
            </Helmet>
            <div className="img">
                <img src={img} alt="" className="w-3/4" />
            </div>

            <div className="form w-96">
                <h2 className="my-5 text-4xl bg-primary text-white px-5 py-4 text-center">Registration</h2>

                <form onSubmit={handleRegister}>
                    <input type="text" name="name" required placeholder="Name" id="name" className="px-4 py-2 border border-primary w-full" />

                    <br /> <br />
                    <input type="text" name="image" required placeholder="DP URL" id="image" className="px-4 py-2 border border-primary w-full" />

                    <br /> <br />
                    <input type="email" name="email" required placeholder="Email" id="email" className="px-4 py-2 border border-primary w-full" />

                    <br /> <br />
                    <input type="password" name="password" required placeholder="Password" id="password" className="px-4 py-2 border border-primary w-full" />

                    <br />
                    {
                        error && <p className="my-2 text-red-700">
                            {error}
                        </p>
                    }

                    <button type="submit" className="mt-5 bg-primary text-white px-4 py-2 w-full hover:bg-black font-medium">Register</button>

                    <p className="mt-5">Already have account? <Link to={"/login"}> <span className="text-primary hover:text-green-600">Login Now</span> </Link></p>
                </form>

                <ContinueSocial></ContinueSocial>
            </div>

            {
                registeredUser && <Navigate to={"/login"} />
            }
        </div>
    );
};

export default Register;