import { Link } from "react-router-dom";
import img from "../../assets/svg/undraw_enter_uhqk.svg"
import ContinueSocial from "./ContinueSocial";

const Login = () => {

    const handleLogin = (e) => {
        e.preventDefault()

        const form = e.target;

        const email = form.email.value;
        const password = form.password.value;

        console.log({
            email,
            password
        });
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
        </div>
    );
};

export default Login;