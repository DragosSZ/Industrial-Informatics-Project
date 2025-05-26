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

    return (
        <div className="min-h-screen bg-gradient-to-br from-black via-black to-purple-600 text-white flex flex-col">
            {/* Header */}
            <div
                className="relative h-64 flex items-center justify-center"
                style={{
                    backgroundImage: `url(${bgUrl})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-60"></div>
                <div className="relative z-10 text-center">
                    <h1 className="text-4xl font-extrabold mb-4">The Best Trainers in Your Town</h1>
                    <p className="text-lg font-medium text-gray-200">
                        Ready to help jumpstart your fitness journey!
                    </p>
                </div>
            </div>

            {/* Trainers grid */}
            <div className="flex-1 w-full flex justify-center items-center py-12">
                <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg shadow-lg px-8 py-10 w-full max-w-5xl">
                    <h2 className="text-2xl font-bold mb-8">Choose your trainer</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                        {trainers.map((trainer) => (
                            <button
                                key={trainer.id}
                                className={`flex flex-col items-center focus:outline-none transition-all ${
                                    selectedTrainer?.id === trainer.id
                                        ? "scale-105 ring-4 ring-blue-500"
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
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            {selectedTrainer && (
                <div className="fixed bottom-0 left-0 w-full bg-gray-900 shadow-2xl border-t border-gray-700 p-4 flex flex-col sm:flex-row items-center justify-between z-50">
          <span className="mb-2 sm:mb-0 flex items-center">
            Ready to start your journey with
            <img
                src={selectedTrainer.photo}
                alt={selectedTrainer.name}
                className="w-8 h-8 rounded-full ml-2 mr-2 object-cover"
                style={{ display: "inline-block" }}
            />
            <span className="font-bold text-blue-400">{selectedTrainer.name}</span>?
           </span>
                    <div className="flex space-x-4">
                        <button
                            className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600 transition"
                            onClick={() => setSelectedTrainer(null)}
                        >
                            Go Back
                        </button>
                        <button
                            className="px-4 py-2 bg-blue-600 rounded text-white font-semibold hover:bg-blue-700 transition"
                            onClick={() => alert(`You chose ${selectedTrainer.name}!`)}
                        >
                            Yes
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}