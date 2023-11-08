import { Link, Navigate } from "react-router-dom";
import img from "../../assets/svg/undraw_enter_uhqk.svg"
import ContinueSocial from "./ContinueSocial";
import { useContext, useState } from "react";
import { AllContext } from "../../Hooks/AllContext";
import toast from "react-hot-toast";
import axios from "axios";

const Login = () => {
    const { login, path } = useContext(AllContext)
    const [loggedUser, setLoggedUser] = useState(null)

    const handleLogin = (e) => {
        e.preventDefault()

        const form = e.target;

        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
            .then(res => {
                const user = res.user;

                setLoggedUser(user)

                // access
                if (user) {

                    axios.post(`https://reservia-server.vercel.app/jwt?uid=${user?.uid}`, user?.uid, {
                        withCredentials: true
                    })
                        .then(res => {
                            console.log(res.data);

                            if (res?.data?.success) {

                                toast.success("Welcome " + user.displayName + "! Login success!")
                            }
                        })

                        .catch(err => {

                            console.log(err?.message);
                        })
                } else {
                    axios.post(`https://reservia-server.vercel.app/logout?uid=${user?.uid}`, {
                        withCredentials: true
                    })
                        .then(err => {
                            console.log(err?.message);
                        })
                }
            })
            .catch(err => {
                toast.error(err?.message)
            })
    }
    return (
        <div className="container mx-auto my-20 flex flex-col-reverse gap-10 lg:flex-row justify-around items-center ">
            <div className="img">
                <img src={img} alt="" className="w-3/4" />
            </div>

            <div className="form w-96">
                <h2 className="my-5 text-4xl bg-primary text-white px-5 py-4 text-center">Login Here</h2>

                <form onSubmit={handleLogin}>
                    <input type="email" name="email" placeholder="Email" id="email" className="px-4 py-2 border border-primary w-full" />

                    <br /> <br />
                    <input type="password" name="password" placeholder="Password" id="password" className="px-4 py-2 border border-primary w-full" />

                    <button type="submit" className="mt-5 bg-primary text-white px-4 py-2 w-full hover:bg-black font-medium">Login</button>

                    <p className="mt-5">Already have account? <Link to={"/register"}> <span className="text-primary hover:text-green-600">Register Now</span> </Link></p>
                </form>

                <ContinueSocial></ContinueSocial>
            </div>

            {
                loggedUser && <Navigate to={path || "/"} />
            }
        </div>
    );
};

export default Login;