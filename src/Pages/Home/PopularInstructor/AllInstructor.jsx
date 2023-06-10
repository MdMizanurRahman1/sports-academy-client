import React, { useEffect, useState } from 'react';

const AllInstructor = () => {

    const [instructors, setInstructors] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/instructor')
            .then((res) => res.json())
            .then((data) => {
                setInstructors(data);
            });
    }, []);

    return (
        <div className="overflow-x-auto py-16 mx-10">
            <table className="table ">
                {/* head */}
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        instructors.map((instructor, index) =>
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
                                <td>{instructor.email}</td>
                                <th>
                                    <button className="btn btn-error btn-outline btn-xs">details</button>
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