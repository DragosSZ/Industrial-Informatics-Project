import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import {Link, useNavigate} from "react-router-dom";

export default function Login() {
    const { setAuth } = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const response = await fetch("http://localhost:5000/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email, password })
            });

            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.message || "Login failed");
            }

            const result = await response.json();
            localStorage.setItem("token", result.token);
            setAuth({
                isLoggedIn: true,
                isTrainer: result.user.role === "trainer",
                userId: result.user.id,
                token: result.token,
                user: result.user
            });
            navigate("/account");

        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="bg-black text-gray-300 min-h-screen pb-16">
            <div className="max-w-md mx-auto px-6 pt-20">
                <h1 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-10">Log in</h1>
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label className="block text-sm mb-1">Email address</label>
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full p-3 bg-neutral-800 text-gray-200 rounded border border-gray-500"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="block text-sm mb-1">Password</label>
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full p-3 bg-neutral-800 text-gray-200 rounded border border-gray-500"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    {error && <p className="text-red-500 text-sm">{error}</p>}
                    <button
                        type="submit"
                        className="w-full mt-4 bg-orange-500 text-white py-3 rounded font-bold text-lg hover:bg-orange-600 transition"
                    >
                        Log In
                    </button>
                </form>
                <div className="mt-6 text-center text-sm text-gray-400">
                    Don't have an account?{" "}
                    <Link to="/signup" className="text-orange-400 hover:underline">
                        Sign up here
                    </Link>
                </div>
            </div>
        </div>
    );
}