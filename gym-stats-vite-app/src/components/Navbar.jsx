import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Header() {
    const auth = useContext(AuthContext);
    const { isLoggedIn, isTrainer, setAuth } = auth;
    const location = useLocation();
    const navigate = useNavigate();

    const navLinks = [
        { name: "Programs", path: "/programs" },
        ...(
            isLoggedIn
                ? (isTrainer
                    ? [{ name: "Clients", path: "/clients" }]
                    : [{ name: "Trainer", path: "/trainer" }])
                : []
        ),
        { name: "About", path: "/about" },
        ...(isLoggedIn ? [{ name: "Account", path: "/account" }] : [{ name: "Login", path: "/login" }]),
    ];
    console.log("Auth context:", auth);

    return (
        <header className="bg-purple-700 text-white py-4 px-6">
            <div className="max-w-6xl mx-auto flex justify-between items-center">
                <Link to="/" className="font-extrabold text-3xl" style={{ fontFamily: "Montserrat, sans-serif" }}>
                    Gym Stats
                </Link>
                <nav className="flex gap-4">
                    {navLinks.map(({ name, path }) => (
                        <Link key={name} to={path}>
                            <button
                                className={`rounded px-6 py-2 font-semibold transition
                                    ${location.pathname === path
                                    ? "bg-white text-purple-700"
                                    : "text-white hover:text-orange-400"}`}
                            >
                                {name}
                            </button>
                        </Link>
                    ))}
                    {isLoggedIn && (
                        <button
                            onClick={() => {
                                localStorage.removeItem("token");
                                setAuth({ isLoggedIn: false, isTrainer: false, userId: null });
                                navigate("/");
                            }}
                            className="ml-4 rounded px-6 py-2 font-semibold bg-red-500 text-white hover:bg-red-600 transition"
                        >
                            Logout
                        </button>
                    )}
                </nav>
            </div>
        </header>
    );
}