export default function Login() {
    return (
        <div className="bg-black text-gray-300 min-h-screen pb-16">
            <div className="max-w-md mx-auto px-6 pt-20">
                <h1 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-10">Log in</h1>
                <form className="space-y-6">
                    <div>
                        <label className="block text-sm mb-1">Email address</label>
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full p-3 bg-neutral-800 text-gray-200 rounded border border-gray-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm mb-1">Password</label>
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full p-3 bg-neutral-800 text-gray-200 rounded border border-gray-500"
                        />
                    </div>
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