import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { FaChalkboardTeacher, FaUserShield } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const AllUsers = () => {
    const [axiosSecure] = useAxiosSecure();
    const [disabledUsers, setDisabledUsers] = useState(() => {
        const storedDisabledUsers = localStorage.getItem('disabledUsers');
        return storedDisabledUsers ? JSON.parse(storedDisabledUsers) : [];
    });

    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users');
        return res.data;
    });

    useEffect(() => {
        localStorage.setItem('disabledUsers', JSON.stringify(disabledUsers));
    }, [disabledUsers]);

    const handleMakeAdmin = user => {
        setDisabledUsers([...disabledUsers, user._id]);
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is an Admin Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            });
    };

    const handleMakeInstructor = user => {
        setDisabledUsers([...disabledUsers, user._id]);
        fetch(`http://localhost:5000/users/instructor/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is an instructor Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            });
    };

    return (
        <div className='w-full'>
            <h3 className='text-2xl font-semibold my-5 text-center'>Total Users: {users.length}</h3>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Admin Role</th>
                            <th>Instructor Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    {user.role === 'admin' ? (
                                        'admin'
                                    ) : (
                                        <button
                                            onClick={() => handleMakeAdmin(user)}
                                            className="btn btn-ghost btn-sm text-blue-500 btn-outline"
                                            disabled={disabledUsers.includes(user._id)}
                                        >
                                            <FaUserShield />
                                            Make Admin
                                        </button>
                                    )}
                                </td>
                                <td>
                                    {user.role === 'instructor' ? (
                                        'instructor'
                                    ) : (
                                        <button
                                            onClick={() => handleMakeInstructor(user)}
                                            className="btn btn-ghost btn-sm btn-outline text-green-500"
                                            disabled={disabledUsers.includes(user._id)}
                                        >
                                            <FaChalkboardTeacher />
                                            Make Instructor
                                        </button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;
