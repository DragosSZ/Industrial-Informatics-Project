import React, { useState } from "react";

// Import trainer photos (assuming these are in src/assets/)
import gym1 from "../assets/gym1.png";
import gym2 from "../assets/gym2.png";
import gym3 from "../assets/gym3.png";
import gym4 from "../assets/gym4.png";
import gym5 from "../assets/gym5.png";
import gym6 from "../assets/gym7.png";

// Trainer data (make sure images match gender and order)
const trainers = [
    { id: 1, name: "Andrei Popescu", photo: gym1 },
    { id: 2, name: "Elena Ionescu", photo: gym3 },
    { id: 3, name: "Mihai Dumitrescu", photo: gym2 }, // make sure gym3 is a man
    { id: 4, name: "Cristina Stan", photo: gym5 },
    { id: 5, name: "Vlad Radu", photo: gym4},         // make sure gym5 is a man
    { id: 6, name: "Ioana Marinescu", photo: gym6 },   // gym6 should be a woman
];

const bgUrl = "/trainer-bg.jpg"; // Use your public folder for static backgrounds

export default function Trainer() {
    const [selectedTrainer, setSelectedTrainer] = useState(null);
    const [confirmedTrainer, setConfirmedTrainer] = useState(null);

    return (
        <div
          className="min-h-screen text-white flex flex-col"
          style={{
            backgroundImage: `linear-gradient(to bottom right, #000000, #000000, #3b0764)`,
          }}
        >
            {/* Header */}
            <div
                className="relative h-44 md:h-52 flex items-center justify-center"
                style={{
                    backgroundImage: `url(${bgUrl})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                {/* <div className="absolute inset-0 bg-black bg-opacity-60"></div> */}
                <div className="relative z-10 text-center py-4">
                    <h1 className="text-4xl font-extrabold mb-4">The Best Trainers in Your Town</h1>
                    <p className="text-lg font-medium text-gray-200">
                        Ready to help jumpstart your fitness journey!
                    </p>
                </div>
            </div>

            {/* Trainers grid */}
            <div className="w-full flex justify-center items-start py-6 -mt-16">
                <div className="bg-gradient-to-br from-neutral-800/60 to-neutral-900/60 backdrop-blur-lg border border-white/20 rounded-xl shadow-xl px-8 py-10 w-full max-w-6xl">
                    <h2 className="text-2xl font-bold mb-8">Choose your trainer</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                        {trainers.map((trainer) => (
                          <div key={trainer.id} className="relative flex flex-col items-center">
                            <button
                                className={`flex flex-col items-center focus:outline-none transition-all duration-300 ease-in-out ${
                                    selectedTrainer?.id === trainer.id
                                        ? "scale-105"
                                        : "hover:scale-105"
                                }`}
                                onClick={() => setSelectedTrainer(trainer)}
                            >
                                <img
                                    src={trainer.photo}
                                    alt={trainer.name}
                                    className="w-28 h-28 rounded-full border-4 border-gray-800 shadow-lg object-cover"
                                />
                                <span
                                    className="mt-4 text-lg text-white"
                                    style={{ textDecoration: "none" }}
                                >
                                    {trainer.name}
                                </span>
                            </button>
                          </div>
                        ))}
                    </div>
                </div>
            </div>

            {(selectedTrainer || confirmedTrainer) && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
                <div className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl p-6 rounded-2xl w-80 text-white">
                  {confirmedTrainer ? (
                    <>
                      <img
                        src={confirmedTrainer.photo}
                        alt={confirmedTrainer.name}
                        className="w-24 h-24 rounded-full border-4 border-gray-700 mx-auto mb-4 object-cover"
                      />
                      <p className="text-center mb-4 text-xl font-semibold">
                        🎉 Congrats on starting your adventure with{" "}
                        <span className="font-bold text-blue-400">{confirmedTrainer.name}</span>!
                      </p>
                      <div className="flex justify-center">
                        <button
                          className="px-4 py-2 bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 font-semibold rounded-xl transition"
                          onClick={() => setConfirmedTrainer(null)}
                        >
                          Done
                        </button>
                      </div>
                    </>
                  ) : (
                    <>
                      <img
                        src={selectedTrainer.photo}
                        alt={selectedTrainer.name}
                        className="w-24 h-24 rounded-full border-4 border-gray-700 mx-auto mb-4 object-cover"
                      />
                      <p className="text-center mb-4">
                        Ready to start your journey with{" "}
                        <span className="font-bold text-blue-400">{selectedTrainer.name}</span>?
                      </p>
                      <div className="flex justify-center gap-4">
                        <button
                          className="px-4 py-2 bg-neutral-700/80 hover:bg-neutral-600/80 rounded-xl transition"
                          onClick={() => setSelectedTrainer(null)}
                        >
                          Go Back
                        </button>
                        <button
                          className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 font-semibold rounded-xl transition"
                          onClick={() => {
                            setConfirmedTrainer(selectedTrainer);
                            setSelectedTrainer(null);
                          }}
                        >
                          Yes
                        </button>
                      </div>
                    </>
                  )}
                </div>
              </div>
            )}

            {/* Bottom bar removed; selection bubble is now next to trainer card */}
        </div>
    );
}