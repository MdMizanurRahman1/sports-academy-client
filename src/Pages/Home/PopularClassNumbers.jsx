import React from 'react';
import { AiFillEye, AiOutlineNumber, AiOutlineDollarCircle, AiOutlineUser } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const PopularClassNumbers = ({ classItem }) => {
    const { name, image, instructor_name, students, price } = classItem;

    return (
        <div className='mx-auto'>
            <div className='my-8 justify-center'>
                <div className='card w-96 bg-base-100 shadow-xl hover:shadow-2xl transform hover:scale-105 transition duration-300'>
                    <figure>
                        <img src={image} className="rounded-t-lg h-3/4" alt="Class Image" />
                    </figure>
                    <div className='card-body'>
                        <h2 className='card-title font-semibold text-xl'>{name}</h2>
                        <h3 className='text-start flex items-center text-lg'>
                            <AiOutlineUser className='mr-2' /> Instructor: {instructor_name}
                        </h3>
                        <div className='flex gap-3'>
                            <p className='text-start flex items-center'>
                                <AiOutlineNumber className='mr-2' /> Total students: {students}
                            </p>
                            <p className='text-start flex items-center'>
                                <AiOutlineDollarCircle className='mr-2' /> Price: ${price}
                            </p>
                        </div>
                        <div className='card-actions justify-end mt-3'>
                            <Link to='/class-details'>
                                <button className='btn btn-error btn-sm flex items-center'>
                                    <AiFillEye className='mr-1' /> View details
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularClassNumbers;
