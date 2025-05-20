import { createContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({
        isLoggedIn: false,
        isTrainer: false,
        userId: null,
        token: null,
        user: null
    });

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) return;

        try {
            const decoded = jwtDecode(token);
            setAuth({
                isLoggedIn: true,
                isTrainer: decoded.role === "trainer",
                userId: decoded.sub,
                token: token,
                user: decoded
            });
        } catch (err) {
            console.error("Token decode failed:", err);
            setAuth({ isLoggedIn: false, isTrainer: false });
        }
    }, []);

    useEffect(() => {
        console.log("Auth state changed:", auth);
    }, [auth]);

    return (
        <AuthContext.Provider value={{ ...auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    );
};