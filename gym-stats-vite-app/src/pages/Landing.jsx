import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const scrollRef = useRef(null);
  const navigate = useNavigate();
  const handleScroll = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
      <>
        <div className="relative w-screen h-[70vh] md:h-[85vh] flex items-center justify-center overflow-hidden pb-16">
          {/* Background Image */}
          <img
              src="/src/assets/main.jpg"
              alt="Gym"
              className="absolute inset-0 w-full h-full object-cover object-center blur-[3px]"
              style={{ zIndex: 1 }}
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black bg-opacity-50" style={{ zIndex: 2 }}></div>
          {/* Left and right edge fade overlays */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-[20vw] z-20" style={{
            background: "linear-gradient(to right, #18181b 0%, rgba(24,24,27,0.80) 60%, rgba(24,24,27,0.00) 70%)"
          }}></div>
          <div className="pointer-events-none absolute right-0 top-0 h-full w-[20vw] z-20" style={{
            background: "linear-gradient(to left, #18181b 0%, rgba(24,24,27,0.80) 60%, rgba(24,24,27,0.00) 70%)"
          }}></div>
          {/* Smooth gradient fade at bottom */}
          <div
              className="absolute left-0 bottom-0 w-full h-40 pointer-events-none"
              style={{
                background:
                    "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(24,24,27,1) 95%, rgba(24,24,27,1) 100%)",
                zIndex: 3,
              }}
          />
          {/* Centered Content */}
          <div className="relative z-20 text-center w-full max-w-3xl mx-auto px-6 flex flex-col items-center justify-center text-white">
            <h1 className="drop-shadow-[0_0_12px_rgba(0,0,0,0.85)] text-5xl font-extrabold mb-4">Gym Stats</h1>
            <p className="drop-shadow-[0_0_12px_rgba(0,0,0,0.85)] text-xl mb-2 font-serif">Welcome to Your Fitness Hub <span className="text-red-400">💥</span></p>
            <p className="drop-shadow-[0_0_12px_rgba(0,0,0,0.85)] text-lg text-gray-300 mb-6 font-['Inter']">
              Track workouts. Monitor progress. Smash goals. <br />
              Everything you need to stay on top of your training — all in one place.
            </p>
            <p className="text-lg text-gray-300 mb-10 drop-shadow-[0_0_12px_rgba(0,0,0,0.85)] font-['Inter']">Let’s level up. One workout at a time.</p>
            <button onClick={handleScroll} className="mt-12 text-white text-5xl drop-shadow-[0_0_12px_rgba(0,0,0,0.85)] animate-bounce">
              ↓
            </button>
          </div>
        </div>

        <div ref={scrollRef} className="min-h-screen bg-[#18181b] text-white px-6 py-12">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-8">What can you do?</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              <div
                role="button"
                onClick={() => navigate("/workout")}
                className="text-left cursor-pointer"
              >
                <img
                  src="/src/assets/workoutplanner.png"
                  alt="Workout Builder"
                  className="rounded-md mb-2"
                />
                <p className="text-lg">Workout Builder</p>
              </div>
              <div
                role="button"
                onClick={() => navigate("/progress-tracker")}
                className="text-left cursor-pointer"
              >
                <img
                  src="/src/assets/tracking.png"
                  alt="Progress Tracker"
                  className="rounded-md mb-2"
                />
                <p className="text-lg">Progress Tracker</p>
              </div>
              <div
                role="button"
                onClick={() => navigate("meal-planning")}
                className="text-left cursor-pointer"
              >
                <img
                  src="/src/assets/mealplanning.png"
                  alt="Meal Planning"
                  className="rounded-md mb-2"
                />
                <p className="text-lg">Meal Planning</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-6">User reviews</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-20">
              <div className="bg-white text-black p-6 rounded shadow">
                <div className="flex items-center mb-2">
                  <img src="https://i.pravatar.cc/40?img=32" alt="User" className="w-10 h-10 rounded-full mr-3" />
                  <span className="text-sm font-medium">Andrei Popescu</span>
                </div>
                <div className="flex items-center mb-2">
                  {Array(5).fill(0).map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-yellow-500 mr-1" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm">This app really helped me track my progress! The workout planner is intuitive and very well designed.</p>
              </div>
              <div className="bg-white text-black p-6 rounded shadow">
                <div className="flex items-center mb-2">
                  <img src="https://i.pravatar.cc/40?img=33" alt="User" className="w-10 h-10 rounded-full mr-3" />
                  <span className="text-sm font-medium">Elena Ionescu</span>
                </div>
                <div className="flex items-center mb-2">
                  {Array(4).fill(0).map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-yellow-500 mr-1" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z" />
                    </svg>
                  ))}
                  <svg className="w-4 h-4 fill-none stroke-yellow-500 mr-1" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z" strokeWidth="1" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="text-sm">Absolutely love the meal planning section! It's so easy to stay on track with my diet. I just wish there were a few more vegetarian options.</p>
              </div>
              <div className="bg-white text-black p-6 rounded shadow">
                <div className="flex items-center mb-2">
                  <img src="https://i.pravatar.cc/40?img=34" alt="User" className="w-10 h-10 rounded-full mr-3" />
                  <span className="text-sm font-medium">Mihai Georgescu</span>
                </div>
                <div className="flex items-center mb-2">
                  {Array(5).fill(0).map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-yellow-500 mr-1" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm">Great experience using this app daily. The interface is clean and the tracking features are top notch.</p>
              </div>
            </div>
          </div>
        </div>

      </>
  );
}