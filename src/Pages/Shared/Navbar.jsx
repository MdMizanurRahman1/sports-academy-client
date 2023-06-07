import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-gradient-to-r from-[#decba4] via-[#3E5151] to-[#4ca1af] h-20">
            <div className="container mx-auto px-4 py-2 flex items-center justify-between">
                <div className='flex items-center'>
                    <img
                        src="https://i.ibb.co/t2D5dyF/Red-Black-Modern-Fitness-Center-Logo.png"
                        alt="Logo"
                        className="w-14 h-14 mr-2 rounded-xl"
                    />
                    <a href="#" className="text-2xl font-bold text-black">Sports Academy</a>
                </div>
                <div className="hidden lg:flex items-center space-x-6">
                    <a href="#" className="text-black hover:text-white transition-colors duration-300">Home</a>
                    <a href="#" className="text-black hover:text-white transition-colors duration-300">Instructors</a>
                    <a href="#" className="text-black hover:text-white transition-colors duration-300">Classes</a>
                    <a href="#" className="text-black hover:text-white transition-colors duration-300">Dashboard</a>
                    <div className="flex items-center">
                        <img src="#" alt="User Profile" className="w-8 h-8 rounded-full" />
                    </div>
                </div>
                <div className="lg:hidden">
                    <div className="dropdown dropdown-end">
                        <div tabIndex="0" className="m-1 btn btn-ghost btn-circle">
                            <svg
                                className="w-6 h-6 text-black"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </div>
                        <ul tabIndex="0" className="p-2 shadow menu dropdown-content bg-base-100 rounded-md">
                            <li>
                                <a href="#" className="text-black hover:text-white transition-colors duration-300">Home</a>
                            </li>
                            <li>
                                <a href="#" className="text-black hover:text-white transition-colors duration-300">Instructors</a>
                            </li>
                            <li>
                                <a href="#" className="text-black hover:text-white transition-colors duration-300">Classes</a>
                            </li>
                            <li>
                                <a href="#" className="text-black hover:text-white transition-colors duration-300">Dashboard</a>
                            </li>
                            <li>
                                <div className="flex items-center">
                                    <img src="#" alt="User Profile" className="w-8 h-8 rounded-full" />
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
