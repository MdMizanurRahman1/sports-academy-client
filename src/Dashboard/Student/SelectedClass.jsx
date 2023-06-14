import React from 'react';
import useCard from '../../hooks/useCard';
import { FaTrashAlt } from 'react-icons/fa';

import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const SelectedClass = () => {
    const [cart, refetch] = useCard();



    const handleDelete = singleCard => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to get back this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/card/${singleCard._id}`, {
                    method: 'DELETE'
                })

                    .then(res => res.json())
                    .then(data => {
                        console.log(data, 'deletedd is done');
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your class has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }




    return (
        <div className='w-full my-10'>
            <h2 className='uppercase font-bold text-center'>seleted class: {cart.length}</h2>
            <div className="overflow-x-auto mt-5">
                <table className="table ">
                    {/* head */}
                    <thead>
                        <tr className='uppercase font-semibold'>
                            <th>#</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Email</th>
                            {/* <th>Seats</th> */}
                            <th>Price</th>
                            <th>Delete</th>
                            <th>Pay</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((singleCard, index) =>
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
                                    <td>{singleCard.price}</td>
                                    <th>
                                        <button onClick={() => handleDelete(singleCard)} className="btn btn-error btn-outline btn-xs"><FaTrashAlt /></button>
                                    </th>
                                    <th>
                                        <Link to='/dashboard/payment' state={singleCard}><button className="btn btn-error btn-sm btn-outline ">Pay Now</button></Link>
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




// <th>
//   <Link to={`/payment/${singleCard._id}`} className="btn btn-error btn-outline btn-xs">
//     <AiOutlinePayCircle />
//   </Link>
// </th>