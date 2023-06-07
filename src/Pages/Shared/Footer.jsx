import React from 'react';
import { Bounce } from 'react-awesome-reveal';
import { AiFillFacebook, AiFillInstagram, AiFillTwitterSquare, AiFillYoutube, AiFillLinkedin } from 'react-icons/ai';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="bg-gray-800 py-6">
            <div className="container mx-auto px-4 mobile-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
                    <div className="flex items-center  ">
                        <Bounce>
                            <img src="https://i.ibb.co/t2D5dyF/Red-Black-Modern-Fitness-Center-Logo.png" alt="Sports Academy Logo" className="h-20 w-20 mr-2 rounded-full" />
                            <h1 className="text-white text-lg font-semibold">Sports Academy</h1>
                        </Bounce>
                    </div>
                    <div >
                        <h2 className="text-white text-lg font-semibold mb-4">Navigation</h2>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-300 hover:text-white">Home</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white">About</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white">Services</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-white text-lg font-semibold mb-4">Legal</h2>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-300 hover:text-white">Privacy Policy</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white">Terms of Service</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
                        <ul className="space-y-2">
                            <li><a href="mailto:info@sportsacademy.com" className="text-gray-300 hover:text-white">info@sportsacademy.com</a></li>
                            <li><a href="tel:+358123456789" className="text-gray-300 hover:text-white">+358 123 456 789</a></li>
                            <li><span className="text-gray-300">Helsinki, Finland</span></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="mt-6 pt-4 border-t border-gray-700 text-center">
                <div className="flex justify-center space-x-4">
                    <a href="#" className="text-blue-500 hover:text-blue-700">
                        <AiFillFacebook className="h-10 w-10 " />
                    </a>
                    <a href="#" className="text-purple-500 hover:text-purple-700">
                        <AiFillInstagram className="h-10 w-10 " />
                    </a>
                    <a href="#" className="text-blue-300 hover:text-blue-500">
                        <AiFillTwitterSquare className="h-10 w-10 " />
                    </a>
                    <a href="#" className="text-red-500 hover:text-red-700">
                        <AiFillYoutube className="h-10 w-10 " />
                    </a>
                    <a href="#" className="text-blue-700 hover:text-blue-900">
                        <AiFillLinkedin className="h-10 w-10 " />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
