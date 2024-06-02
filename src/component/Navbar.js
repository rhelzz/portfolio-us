import React, { useState } from 'react';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="p-4 pt-5 pr-10 bg-transparent fixed top-0 left-0 w-full z-50 backdrop-blur-[2px]">
            <div className="container mx-auto flex justify-between items-center">
                <div>
                    <p className="text-white text-2xl font-semibold">
                        <i className="fa-solid fa-star-of-life mx-3 text-yellow-400"></i>Brann Nguyen
                    </p>
                </div>
                <div className="hidden md:flex space-x-12">
                    <a href="none" className="text-gray-300 hover:text-white">About us</a>
                    <a href="none" className="text-gray-300 hover:text-white">Resume</a>
                    <a href="none" className="text-gray-300 hover:text-white">Work</a>
                    <a href="none">
                        <button className="bg-[#e5a523] hover:text-white hover:bg-[#e52323] text-black font-semibold py-2 px-4 rounded-full text-xs">
                            Get in touch!
                        </button>
                    </a>
                </div>
                <div className="md:hidden">
                    <button
                        className="text-gray-300 hover:text-white focus:outline-none"
                        id="menu-button"
                        onClick={() => setMenuOpen(!menuOpen)} // Toggle menuOpen state
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            ></path>
                        </svg>
                    </button>
                </div>
            </div>
            {menuOpen && (
                <div className="md:hidden" id="menu">
                    <a href="none" className="block px-2 py-1 text-gray-300 hover:text-white">About</a>
                    <a href="none" className="block px-2 py-1 text-gray-300 hover:text-white">Services</a>
                    <a href="none" className="block px-2 py-1 text-gray-300 hover:text-white">Get in touch!</a>
                </div>
            )}
        </nav>
    );
}

export default Navbar;