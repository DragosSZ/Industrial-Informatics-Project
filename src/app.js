import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";

const Home = () => <h2 className="text-center mt-10">Welcome to Home Page</h2>;
const About = () => <h2 className="text-center mt-10">About Us</h2>;
const Services = () => <h2 className="text-center mt-10">Our Services</h2>;
const Contact = () => <h2 className="text-center mt-10">Contact Us</h2>;

function App() {
    return (
        <Router>
            <Navbar />
            <div className="container mx-auto p-4">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;