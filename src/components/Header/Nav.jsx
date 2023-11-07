import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AllContext } from "../../Hooks/AllContext";
import toast from "react-hot-toast";
import LoaderMini from "../Loader/LoaderMini";

const Nav = () => {
    const { logout, user, loading } = useContext(AllContext)

    const handleLogout = () => {

        logout()
            .then(() => {
                toast.success("Logout success! Login now to browse more.")
            })
            .catch(err => {
                toast.error(err?.message)
                console.log(err);
            })
    }

    return (
        <div className="container mx-auto py-6 flex flex-col md:flex-row gap-4 justify-center items-center md:justify-between px-4 lg:px-0">
            <div className="logo">
                <Link to={"/"}><h2 className="text-5xl font-playBall text-primary">Reservia</h2></Link>
            </div>

            <div className="menu font-medium flex md:flex-row justify-between items-center gap-4">

                <div>
                    <NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "bg-primary text-white py-2 px-4" : "text-primary py-2 px-4"
                        }
                    >
                        Home
                    </NavLink>
                </div>

                <div>
                    <NavLink
                        to="/all"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "bg-primary text-white py-2 px-4" : "text-primary py-2 px-4"
                        }
                    >
                        All Foods
                    </NavLink>
                </div>

                <div>
                    <NavLink
                        to="/blogs"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "bg-primary text-white py-2 px-4" : "text-primary py-2 px-4"
                        }
                    >
                        Blogs
                    </NavLink>
                </div>

                {
                    !user && <div>
                        <NavLink
                            to="/register"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "bg-primary text-white py-2 px-4" : "text-primary py-2 px-4"
                            }
                        >
                            Register
                        </NavLink>
                    </div>
                }





                <div className="user flex flex-col md:flex-row justify-between items-center gap-4">
                    {
                        loading ? <LoaderMini /> :
                            <div>
                                {
                                    user && <details className="dropdown relative">

                                        <summary className="m-1 capitalize btn bg-white border-none w-[50px] h-[50px] aspect-square rounded-full">
                                            <img className="w-[50px] h-[50px] aspect-square rounded-[100%] absolute" src={user?.photoURL} alt="" />
                                        </summary>

                                        <ul className="p-2 shadow menu dropdown-content z-[1] bg-slate-100 rounded-md absolute right-1 w-56">
                                            <li>
                                                <NavLink
                                                    to="/add"
                                                    className={({ isActive, isPending }) =>
                                                        isPending ? "pending" : isActive ? "bg-primary text-white py-2 px-4" : "text-primary py-2 px-4"
                                                    }
                                                >
                                                    Add Food
                                                </NavLink>
                                            </li>

                                            <li>
                                                <NavLink
                                                    to="/added"
                                                    className={({ isActive, isPending }) =>
                                                        isPending ? "pending" : isActive ? "bg-primary text-white py-2 px-4" : "text-primary py-2 px-4"
                                                    }
                                                >
                                                    My Added Food
                                                </NavLink>
                                            </li>

                                            <li>
                                                <NavLink
                                                    to="/ordered"
                                                    className={({ isActive, isPending }) =>
                                                        isPending ? "pending" : isActive ? "bg-primary text-white py-2 px-4" : "text-primary py-2 px-4"
                                                    }
                                                >
                                                    My Order
                                                </NavLink>
                                            </li>
                                        </ul>
                                    </details>

                                }
                            </div>
                    }

                    {
                        !loading && <div>{
                            !user && <div>
                                <NavLink
                                    to="/login"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "bg-primary text-white py-2 px-4" : "bg-primary text-white hover:bg-black py-2 px-4"
                                    }
                                >
                                    Login
                                </NavLink>
                            </div>
                        }</div>
                    }

                    {
                        user && <div>
                            <button onClick={handleLogout} className="bg-primary text-white hover:bg-black py-2 px-4">
                                Logout
                            </button>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Nav;