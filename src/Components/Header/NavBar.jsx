import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="py-5 px-5 bg-transparent">
            <nav className="flex flex-cols md:flex-row justify-between items-center">
                <div>
                    <img className="h-[72px]" src="./images/Logo.png" alt="" />
                </div>
                <div>
                    <ul className="flex justify-center items-center gap-4 font-semibold text-[#0B0B0B]">
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/donation"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                            }
                        >
                            Donation
                        </NavLink>
                        <NavLink
                            to="/statistics"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                            }
                        >
                            Statistics
                        </NavLink>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;