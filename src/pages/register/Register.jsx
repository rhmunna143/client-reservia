import { Link } from "react-router-dom";
import img from "../../assets/svg/undraw_mobile_payments_re_7udl.svg"
import { useState } from "react";
import ContinueSocial from "../login/ContinueSocial";

const Register = () => {
    const [error, setPassError] = useState("")

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


        console.log({
            name,
            image,
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
                <h2 className="my-5 text-4xl bg-primary text-white px-5 py-4 text-center">Registration</h2>

                <form onSubmit={handleRegister}>
                    <input type="text" name="name" placeholder="Name" id="name" className="px-4 py-2 border border-primary w-full" />

                    <br /> <br />
                    <input type="text" name="image" placeholder="DP URL" id="image" className="px-4 py-2 border border-primary w-full" />

                    <br /> <br />
                    <input type="email" name="email" placeholder="Email" id="email" className="px-4 py-2 border border-primary w-full" />

                    <br /> <br />
                    <input type="password" name="password" placeholder="Password" id="password" className="px-4 py-2 border border-primary w-full" />

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
        </div>
    );
};

export default Register;