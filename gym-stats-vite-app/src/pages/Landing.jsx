export default function Landing() {
  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-12">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold mb-4">Gym Stats</h1>
        <p className="text-xl mb-2">Welcome to Your Fitness Hub <span className="text-red-400">💥</span></p>
        <p className="text-lg text-gray-300 mb-6">
          Track workouts. Monitor progress. Smash goals. <br />
          Everything you need to stay on top of your training — all in one place.
        </p>
        <p className="text-lg text-gray-300 mb-10">Let’s level up. One workout at a time.</p>

        <div className="mb-16">
          <img
            src="https://source.unsplash.com/1600x900/?gym,fitness"
            alt="Gym"
            className="mx-auto rounded-lg border-4 border-blue-500 max-w-4xl"
          />
        </div>

        <h2 className="text-3xl font-semibold mb-8">What can you do?</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div>
            <img
              src="https://images.unsplash.com/photo-1558611848-73f7eb4001e4"
              alt="Workout Builder"
              className="rounded-md mb-2"
            />
            <p className="text-lg">Workout Builder</p>
          </div>
          <div>
            <img
              src="https://via.placeholder.com/300x200.png?text=Progress+Tracker"
              alt="Progress Tracker"
              className="rounded-md mb-2"
            />
            <p className="text-lg">Progress Tracker</p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1606788075761-11c06c963a79"
              alt="Meal Planning"
              className="rounded-md mb-2"
            />
            <p className="text-lg">Meal Planning</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-6">User reviews</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white text-black p-6 rounded shadow">
              <div className="flex items-center mb-2">
                <img
                  src={`https://i.pravatar.cc/40?img=${i + 10}`}
                  alt="User"
                  className="w-10 h-10 rounded-full mr-3"
                />
                <span className="text-sm font-medium">User {i}</span>
              </div>
              <p className="text-sm">Description</p>
            </div>
          ))}
        </div>

        <footer className="border-t border-gray-700 pt-10 text-sm text-gray-400">
          <div className="flex justify-between flex-wrap text-left max-w-5xl mx-auto">
            <div>
              <h3 className="font-semibold text-white mb-2">Gym Stats</h3>
              <div className="flex gap-3 text-lg mt-2">
                <i className="fab fa-facebook"></i>
                <i className="fab fa-linkedin"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-youtube"></i>
              </div>
            </div>
            {[1, 2, 3].map((col) => (
              <div key={col} className="mb-4 md:mb-0">
                <h4 className="text-white font-semibold">Topic</h4>
                <ul>
                  <li>Page</li>
                  <li>Page</li>
                  <li>Page</li>
                </ul>
              </div>
            ))}
          </div>
        </footer>
      </div>
    </div>
  );
}