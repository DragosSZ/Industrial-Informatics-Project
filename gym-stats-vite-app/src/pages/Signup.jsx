export default function SignUp() {
    return (
        <div className="bg-black text-gray-300 min-h-screen pb-16">
            <div className="max-w-2xl mx-auto px-6 pt-16">
                <h1 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-10">Sign up</h1>
                <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm mb-1">First name</label>
                            <input type="text" placeholder="Name" className="w-full p-3 bg-neutral-800 text-gray-200 rounded border border-gray-500" />
                        </div>
                        <div>
                            <label className="block text-sm mb-1">First name</label>
                            <input type="text" placeholder="Name" className="w-full p-3 bg-neutral-800 text-gray-200 rounded border border-gray-500" />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm mb-1">Email address</label>
                        <input type="email" placeholder="Email" className="w-full p-3 bg-neutral-800 text-gray-200 rounded border border-gray-500" />
                    </div>
                    <div>
                        <label className="block text-sm mb-1">Adress Line 1</label>
                        <input type="text" placeholder="Street, Number" className="w-full p-3 bg-neutral-800 text-gray-200 rounded border border-gray-500" />
                    </div>
                    <div>
                        <label className="block text-sm mb-1">Adress line 2 (optional)</label>
                        <input type="text" placeholder="Apartment, Flat" className="w-full p-3 bg-neutral-800 text-gray-200 rounded border border-gray-500" />
                    </div>
                    <div>
                        <label className="block text-sm mb-1">City</label>
                        <input type="text" placeholder="City" className="w-full p-3 bg-neutral-800 text-gray-200 rounded border border-gray-500" />
                    </div>
                    {/* Sign up button */}
                    <button
                        type="submit"
                        className="w-full mt-6 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded font-bold text-lg transition"
                    >
                        Sign up
                    </button>
                </form>
            </div>
        </div>
    );
}