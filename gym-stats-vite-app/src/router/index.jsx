import { Routes, Route } from 'react-router-dom';
import Landing from '../pages/Landing';
import Programs from '../pages/Programs';
import Trainer from '../pages/Trainer';
import Account from '../pages/Account';
import About from '../pages/About';
import Contact from '../pages/Contact';
import SignUp from "../pages/Signup.jsx";
import Login from "../pages/Login.jsx";
import MealPlanning from "../pages/MealPlanning.jsx";
import ProgressTracker from "../pages/ProgressTracker.jsx";
import Clients from "../pages/Clients.jsx";


export default function AppRouter() {
    const isLoggedIn= true; // Change to true if user is logged in
    const isTrainer= false;

    return (
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/trainer" element={<Trainer />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/meal-planning" element={<MealPlanning />} />
            <Route path="/progress-tracker" element={<ProgressTracker />} />
            {isTrainer && <Route path="/clients" element={<Clients />} />}
            {isLoggedIn && <Route path="/account" element={<Account />} />}
        </Routes>
    );
}