import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const [theme, setTheme] = useState('light');

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        }
        else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme])

    const handleToggle = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }



    return (
        <nav className="bg-gradient-to-r from-[#decba4] via-[#3E5151] to-[#4ca1af] dark:bg-black">
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
                    <Link to='/' className="text-black hover:text-white transition-colors duration-300">Home</Link>
                    <Link to='/instructors' className="text-black hover:text-white transition-colors duration-300">Instructors</Link>

                    <Link to='/classesPage' className="text-black hover:text-white transition-colors duration-300">Classes</Link>

                    <Link to='/dashboard/selectedClass' className="text-black hover:text-white transition-colors duration-300">Dashboard</Link>
                    <label className="btn btn-ghost mr-2 btn-circle avatar">
                        <div className="w-10  text-primary rounded-full ">

                            <img src={user?.photoURL} alt="no photo" />
                        </div>
                    </label>

                    {
                        user ?
                            <>
                                <button onClick={handleLogOut} className="btn btn-ghost">LogOut</button>
                            </> :
                            <>
                                <Link to='/login'><button className="text-black bg-[#decba4] hover:text-black transition-colors duration-300 btn">Login</button></Link>
                            </>
                    }
                    <label className="swap swap-rotate">

                        {/* this hidden checkbox controls the state */}
                        <input type="checkbox" onClick={handleToggle} />

                        {/* sun icon */}
                        <svg className="swap-on fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                        {/* moon icon */}
                        <svg className="swap-off fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                    </label>
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