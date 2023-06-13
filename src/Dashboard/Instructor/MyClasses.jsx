import React, { useEffect, useState } from 'react';
import useClass from '../../hooks/useClass';

const AllInstructor = () => {

    const [myclass, , refetch] = useClass();



    return (
        <div className="overflow-x-auto py-16 mx-10 w-full">
            <table className="table ">


                <thead>
                    <tr>
                        <th>#</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Instructor name</th>
                        <th>Email</th>
                        <th>Status</th>
                        <th>Enrolled</th>
                        <th>Feedback</th>
                        <th>Update</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myclass.map((instructor, index) =>
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
                                <td className='text-md font-semibold'>
                                    {instructor.name}
                                </td>
                                <td>{instructor.instructor_name}</td>
                                <td>{instructor.email}</td>
                                <td>{instructor.status}</td>
                                <td>{instructor.enrolled}</td>
                                <th>
                                    <button className="btn btn-error btn-outline btn-xs">Feedback</button>
                                </th>
                                <th>
                                    <button className="btn btn-success btn-outline btn-xs">update</button>
                                </th>
                            </tr>

                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllInstructor;