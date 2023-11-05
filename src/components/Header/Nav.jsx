import { Link, NavLink } from "react-router-dom";

const Nav = () => {



    return (
        <div className="container mx-auto py-6 flex flex-col md:flex-row gap-4 justify-center items-center md:justify-between px-4 lg:px-0">
            <div className="logo">
                <Link to={"/"}><h2 className="text-5xl font-playBall text-primary">Reservia</h2></Link>
            </div>

            <div className="menu flex md:flex-row justify-between items-center gap-4">

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

                <div>
                    <NavLink
                        to="/register"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "bg-primary text-white py-2 px-4" : "text-primary py-2 px-4"
                        }
                    >
                        Register
                    </NavLink>
                </div>





                <div className="user flex flex-col md:flex-row justify-between items-center gap-4">
                    <details className="dropdown relative">

                        <summary className="m-1 capitalize btn bg-white border-none w-12 h-12 aspect-square rounded-full px-4">User</summary>

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
                                    Added Food
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

                    <div>
                        <NavLink
                            to="/login"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "bg-primary text-white py-2 px-4" : "bg-primary text-white hover:bg-black py-2 px-4"
                            }
                        >
                            Login
                        </NavLink>
                    </div>

                    <div>
                        <button className="bg-primary text-white hover:bg-black py-2 px-4">
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nav;