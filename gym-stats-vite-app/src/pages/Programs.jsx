import { Link } from "react-router-dom";

export default function Programs() {
    return (
        <div className="bg-black text-gray-100 min-h-screen pb-16">
            <div className="max-w-5xl mx-auto px-6 pt-14">
                <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-10 drop-shadow-md">Programs</h1>

                {/* Workout Builder */}
                <Link to="/workout-builder" className="block mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Workout Builder</h2>
                    <img
                        src="src/assets/workout.png"
                        alt="Workout Builder"
                        className="rounded-lg w-full h-64 object-cover filter blur-[2px] brightness-75"
                        draggable={false}
                    />
                </Link>

                {/* Progress Tracker */}
                <Link to="/progress-tracker" className="block mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Progress Tracker</h2>
                    <img
                        src="src/assets/progress2.png"
                        alt="Progress Tracker"
                        className="rounded-lg w-full h-64 object-cover filter blur-[1.5px] brightness-90"
                        draggable={false}
                    />
                </Link>

                {/* Meal Planning */}
                <Link to="/meal-planning" className="block mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Meal Planning</h2>
                    <img
                        src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80"
                        alt="Meal Planning"
                        className="rounded-lg w-full h-64 object-cover filter blur-[1.5px] brightness-90"
                        draggable={false}
                    />
                </Link>
            </div>
        </div>
    );
}