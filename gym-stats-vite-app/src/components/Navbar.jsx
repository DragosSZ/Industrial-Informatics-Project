import { Link, useLocation } from "react-router-dom";
export default function Header() {
    const location = useLocation();
    const isLoggedIn = true; // simulate login state
    const isTrainer = false; // simulate login state

    const navLinks = [
        { name: "Programs", path: "/programs" },
        ...(isTrainer ? [{ name: "Clients", path: "/clients" }] : [{name: "Trainer", path: "/trainer"}]),
        { name: "About", path: "/about" },
        ...(isLoggedIn ? [{ name: "Account", path: "/account" }] : [{ name: "Login", path: "/login" }]),


    ];

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
                </nav>
            </div>
        </header>
    );
}