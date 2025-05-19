import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="bg-gray-900 text-white p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-xl font-bold">MyApp</h1>

                <div className="md:hidden">
                    <button onClick={toggleMenu}>
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                <ul className={`md:flex space-x-6 md:space-x-6 absolute md:static bg-gray-900 w-full left-0 top-16 md:w-auto md:flex-row md:items-center md:space-y-0 space-y-4 p-4 md:p-0 ${isOpen ? "block" : "hidden"}`}>
                    <li><Link to="/" className="hover:text-blue-400">Home</Link></li>
                    <li><Link to="/about" className="hover:text-blue-400">About</Link></li>
                    <li><Link to="/services" className="hover:text-blue-400">Services</Link></li>
                    <li><Link to="/contact" className="hover:text-blue-400">Contact</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
