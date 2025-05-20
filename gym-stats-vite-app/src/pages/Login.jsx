import { useState } from "react";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:5000/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email, password })
            });

            if (response.ok) {
                const data = await response.json();
                console.log("✅ Login successful:", data);
                // TODO: store user/token, redirect, etc.
            } else {
                const message = await response.text();
                setError(message || "Invalid credentials");
            }
        } catch (err) {
            console.error("Login error:", err);
            setError("Server error. Please try again.");
        }
    };

    return (
        <div className="bg-black text-gray-300 min-h-screen pb-16">
            <div className="max-w-md mx-auto px-6 pt-20">
                <h1 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-10">Log in</h1>
                <form className="space-y-6" onSubmit={handleLogin}>
                    <div>
                        <label className="block text-sm mb-1">Email address</label>
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-3 bg-neutral-800 text-gray-200 rounded border border-gray-500"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm mb-1">Password</label>
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-3 bg-neutral-800 text-gray-200 rounded border border-gray-500"
                            required
                        />
                    </div>
                    {error && <div className="text-red-400 text-sm">{error}</div>}
                    <button
                        type="submit"
                        className="w-full mt-4 bg-orange-500 text-white py-3 rounded font-bold text-lg hover:bg-orange-600 transition"
                    >
                        Log In
                    </button>
                </form>
                <div className="mt-6 text-center text-sm text-gray-400">
                    Don't have an account?{" "}
                    <a href="/signup" className="text-orange-400 hover:underline">
                        Sign up here
                    </a>
                </div>
            </div>
        </div>
    );
}