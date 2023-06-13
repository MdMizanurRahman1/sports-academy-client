import React from 'react';
import { FaBook, FaBookOpen, FaChalkboardTeacher, FaEnvelope, FaInfo, FaPlusCircle, FaTasks, FaUser, FaUsers, FaWallet } from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';
import useInstructor from '../hooks/useInstructor';

const Dashboard = () => {

    //TODO: load data from the server to have dynamic isAdmin based on data.
    // const isAdmin = true;

    const [isAdmin] = useAdmin();
    // const isInstructor = true;

    const [isInstructor] = useInstructor();

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                <Outlet></Outlet>


            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                    {/* Sidebar content here */}
                    <li>
                        <Link to='/' className='text-lg'>
                            <FaUser className='text-blue-500 w-6 h-6'></FaUser> Home
                        </Link>
                    </li>
                    {isAdmin ? (
                        <>
                            <li>
                                <Link className='text-lg'>
                                    <FaTasks className='text-pink-500 w-6 h-6'></FaTasks> Manage Classes
                                </Link>
                            </li>
                            <li>
                                <Link to='/dashboard/allusers' className='text-lg'>
                                    <FaUsers className='text-pink-500 w-6 h-6'></FaUsers> Manage Users
                                </Link>
                            </li>
                        </>
                    ) : (
                        isInstructor ? (
                            <>
                                <li>
                                    <Link to='/dashboard/addItem' className='text-lg'>
                                        <FaPlusCircle className='text-sky-500 w-6 h-6'></FaPlusCircle> Add A Class
                                    </Link>
                                </li>
                                <li>
                                    <Link className='text-lg'>
                                        <FaBookOpen className='text-sky-500 w-6 h-6'></FaBookOpen> My Classes
                                    </Link>
                                </li>
                            </>
                        ) : (
                            <>
                                <li>
                                    <Link to='/dashboard/selectedClass' className='text-lg'>
                                        <FaChalkboardTeacher className='text-blue-500 w-6 h-6'></FaChalkboardTeacher> Selected Classes
                                    </Link>
                                </li>
                                <li>
                                    <Link className='text-lg'>
                                        <FaBook className='text-blue-500 w-6 h-6'></FaBook> Enrolled Classes
                                    </Link>
                                </li>
                                <li>
                                    <Link className='text-lg'>
                                        <FaWallet className='text-blue-500 w-6 h-6'></FaWallet> Payment History
                                    </Link>
                                </li>
                            </>
                        )
                    )}
                    <Link className='text-lg p-4 flex'><FaInfo className='text-blue-500 w-6 h-6 ' />About</Link>
                    <Link className='text-lg p-4 flex gap-1'><FaEnvelope className='text-blue-500 w-6 h-6' />Contact</Link>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;