import { jwtDecode } from "jwt-decode";

export function getAuthStatus() {
    const token = localStorage.getItem("token");
    if (!token) return { isLoggedIn: false, isTrainer: false };

    try {
        const decoded = jwtDecode(token);
        return {
            isLoggedIn: true,
            isTrainer: decoded.role === "trainer",
            userId: decoded.sub
        };
    } catch {
        return { isLoggedIn: false, isTrainer: false };
    }
}