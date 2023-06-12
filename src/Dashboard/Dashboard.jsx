import React from 'react';
import { FaBook, FaBookOpen, FaChalkboardTeacher, FaPlusCircle, FaTasks, FaUser, FaUsers, FaWallet } from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
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
                    <li><Link to='/' className='text-lg'><FaUser className='text-blue-500 w-6 h-6'></FaUser> Home</Link></li>
                    <li><Link to='/dashboard/selectedClass' className='text-lg'><FaChalkboardTeacher className='text-blue-500 w-6 h-6'></FaChalkboardTeacher> Selected Classes</Link></li>
                    <li><Link className='text-lg'><FaBook className='text-blue-500 w-6 h-6'></FaBook>Enrolled Classes</Link></li>
                    <li><Link className='text-lg'><FaWallet className='text-blue-500 w-6 h-6'></FaWallet> Payment History</Link></li>



                    <li><Link to='/' className='text-lg'><FaUser className='text-sky-500 w-6 h-6'></FaUser> Home</Link></li>
                    <li><Link className='text-lg'><FaPlusCircle className='text-sky-500 w-6 h-6'></FaPlusCircle> Add A Class</Link></li>
                    <li><Link className='text-lg'><FaBookOpen className='text-sky-500 w-6 h-6'></FaBookOpen> My Classes</Link></li>


                    <li><Link to='/' className='text-lg'><FaUser className='text-pink-500 w-6 h-6'></FaUser> Home</Link></li>
                    <li><Link className='text-lg'><FaTasks className='text-pink-500 w-6 h-6'></FaTasks> Manage Classes</Link></li>
                    <li><Link className='text-lg'><FaUsers className='text-pink-500 w-6 h-6'></FaUsers> Manage Users</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;