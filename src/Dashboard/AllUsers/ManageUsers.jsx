

import React, { useState, useEffect } from 'react';
import useClass from '../../hooks/useClass';

const ManageUsers = () => {
    const [approvalState, setApprovalState] = useState();
    const [myclass] = useClass();
    console.log(myclass, 'this is my class manage');

    useEffect(() => {
        localStorage.setItem('myclass', JSON.stringify(myclass));
    }, [myclass]);

    const handleApprove = (index) => {
        const updatedClass = [...myclass];
        updatedClass[index].status = 'approve';
        setApprovalState(updatedClass);
    };

    const handleDeny = (index) => {
        const updatedClass = [...myclass];
        updatedClass[index].status = 'deny';
        setApprovalState(updatedClass);
    };

    return (
        <div className="overflow-x-auto py-16 mx-10 w-full">
            <h2 className="text-center font-semibold text-2xl my-7">All Instructors</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Instructor Name/Email</th>
                        <th>Status</th>
                        <th>Enrolled</th>
                        <th>Available Seats</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {myclass.map((instructor, index) => (
                        <tr key={instructor._id}>
                            <td>{index + 1}</td>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={instructor.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>{instructor.name}</td>
                            <td>
                                {instructor.instructor_name}
                                <br />
                                <span className="badge badge-ghost badge-sm">{instructor.email}</span>
                            </td>
                            <td>{instructor.status}</td>
                            <td>{instructor.enrolled}</td>
                            <td>{instructor.seats}</td>
                            <td>{instructor.price}</td>
                            <td>
                                <button
                                    className='bg-green-200 px-2 rounded btn btn-xs'
                                    disabled={instructor.status === 'approve' || instructor.status === 'deny'}
                                    onClick={() => handleApprove(index)}
                                >
                                    Approve
                                </button>
                                <br />
                                <button
                                    className='bg-red-200 px-2 rounded btn btn-xs'
                                    disabled={instructor.status === 'approve' || instructor.status === 'deny'}
                                    onClick={() => handleDeny(index)}
                                >
                                    Deny
                                </button>
                                <br />
                                <button className='bg-orange-200 px-2 rounded btn btn-xs '>
                                    Feedback
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ManageUsers;