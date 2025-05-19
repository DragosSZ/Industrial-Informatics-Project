import { Link } from "react-router-dom";

export default function Account() {
    return (
        <div className="bg-black text-gray-300 min-h-screen pb-16">
            <div className="max-w-4xl mx-auto px-6 pt-14">
                {/* Top: Title and sign up/login */}
                <div className="flex justify-between items-start mb-10">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white">Your Account</h1>
                    <div className="flex gap-8 pt-3">
                        <Link to="/signup" className="text-xl font-bold text-gray-400 hover:text-white transition">
                            Sign up
                        </Link>
                        <Link to="/login" className="text-xl font-bold text-gray-400 hover:text-white transition">
                            Log In
                        </Link>
                    </div>
                </div>
                {/* Main info */}
                <div className="flex flex-col md:flex-row gap-10 mb-14">
                    {/* Avatar */}
                    <div className="flex-shrink-0 flex flex-col items-center">
                        <img
                            src="https://i.imgur.com/WPZ8b9k.png"
                            alt="avatar"
                            className="w-60 h-60 md:w-72 md:h-72 rounded-2xl object-cover bg-gray-700"
                        />
                    </div>
                    {/* Info */}
                    <div className="flex-1 flex flex-col justify-center gap-2 text-lg md:text-xl text-gray-400 font-medium pl-4">
                        <div>Name</div>
                        <div>Email</div>
                        <div>Date of birth</div>
                        <div className="h-3" />
                        <div>Start date</div>
                        <div>Days elapsed</div>
                        <div className="h-3" />
                        <div>Weight</div>
                        <div>Height</div>
                        <div className="h-3" />
                        <div>Estimated BMI</div>
                    </div>
                </div>

                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-white mb-3">Your Current Plan</h2>
                    {/* Plan details would go here */}
                </div>

                <div>
                    <h2 className="text-2xl font-bold text-white mb-3">Your Trainer</h2>
                    <div className="flex items-center gap-5">
                        <img
                            src="https://i.imgur.com/WPZ8b9k.png"
                            alt="trainer avatar"
                            className="w-20 h-20 rounded-full object-cover bg-gray-700"
                        />
                        <span className="text-xl font-semibold text-gray-300 italic">*name*</span>
                    </div>
                </div>
            </div>
        </div>
    );
}