import React from 'react';
import useCard from '../../hooks/useCard';

const SelectedClass = () => {
    const [card] = useCard();
    return (
        <div className='w-full'>
            <h2 className='uppercase font-semibold text-center'>seleted class: {card.length}</h2>
            <div className="overflow-x-auto py-16">
                <table className="table ">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Delete</th>
                            <th>Pay</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            card.map((singleCard, index) =>
                                <tr key={singleCard._id}>
                                    <td>{index + 1}</td>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={singleCard.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className='text-md font-semibold'>
                                        {singleCard.name}
                                    </td>
                                    <td>{singleCard.email}</td>
                                    <th>
                                        <button className="btn btn-error btn-outline btn-xs">Delete</button>
                                    </th>
                                    <th>
                                        <button className="btn btn-error btn-outline btn-xs">Pay</button>
                                    </th>
                                </tr>

                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SelectedClass;