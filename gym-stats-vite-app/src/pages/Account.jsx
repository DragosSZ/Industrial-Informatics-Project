import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Account() {
    const navigate = useNavigate();
    const { setAuth } = useContext(AuthContext);
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            setLoading(false);
            navigate("/login", { replace: true });
            return;
        }
        fetch("http://localhost:5000/api/users/me", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Failed to fetch user data");
                }
                return res.json();
            })
            .then((data) => {
                setUserData(data);
                setAuth({ user: data, token });
                setLoading(false);
            })
            .catch(() => {
                setAuth(null);
                localStorage.removeItem("token");
                setLoading(false);
                navigate("/login", { replace: true });
            });
    }, [navigate, setAuth]);

    if (loading) {
        return null;
    }

    return (
        <div className="bg-gradient-to-br from-black via-black to-purple-600 text-gray-300 min-h-screen pb-16 flex items-center justify-center">
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg shadow-lg max-w-6xl w-full px-6 py-12 mx-auto mt-24">
                {/* Top: Title and sign up/login */}
                <div className="flex justify-between items-start mb-10">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white">Your Account</h1>
                    <div className="flex gap-8 pt-3">
                        <button
                            className="text-xl font-bold text-gray-400 hover:text-white transition"
                            onClick={() => {
                                localStorage.removeItem("token");
                                setAuth(null);
                                navigate("/");
                            }}
                        >
                            Log Out
                        </button>
                    </div>
                </div>
                {/* Main info */}
                <div className="flex flex-col md:flex-row gap-10 mb-14">
                    {/* Avatar */}
                    <div className="flex-shrink-0 flex flex-col items-center">
                        <img
                            src={userData?.avatarUrl || "https://i.imgur.com/WPZ8b9k.png"}
                            alt="avatar"
                            className="w-60 h-60 md:w-72 md:h-72 rounded-2xl object-cover bg-gray-700"
                        />
                    </div>
                    {/* Info */}
                    <div className="flex-1 flex flex-col justify-center gap-2 text-lg md:text-xl text-gray-400 font-medium pl-4">
                        <div>{userData?.name || "Name"}</div>
                        <div>{userData?.email || "Email"}</div>
                        <div>{userData?.dateOfBirth || "Date of birth"}</div>
                        <div className="h-3" />
                        <div>{userData?.startDate || "Start date"}</div>
                        <div>{userData ? Math.floor((Date.now() - new Date(userData.startDate).getTime()) / (1000 * 60 * 60 * 24)) : "Days elapsed"}</div>
                        <div className="h-3" />
                        <div>{userData?.weight ? `${userData.weight} kg` : "Weight"}</div>
                        <div>{userData?.height ? `${userData.height} cm` : "Height"}</div>
                        <div className="h-3" />
                        <div>{userData?.bmi ? userData.bmi.toFixed(1) : "Estimated BMI"}</div>
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
                            src={userData?.trainer?.avatarUrl || "https://i.imgur.com/WPZ8b9k.png"}
                            alt="trainer avatar"
                            className="w-20 h-20 rounded-full object-cover bg-gray-700"
                        />
                        <span className="text-xl font-semibold text-gray-300 italic">{userData?.trainer?.name || "*name*"}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}