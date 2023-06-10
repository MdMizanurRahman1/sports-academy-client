import React, { useEffect, useState } from 'react';
import InstuctorNumber from './InstuctorNumber';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

const PopularInstructor = () => {
    const [instructors, setInstructors] = useState([]);

    useEffect(() => {
        fetch('instructor.json')
            .then((res) => res.json())
            .then((data) => {
                setInstructors(data);
            });
    }, []);

    // Filter and get only the top 6 classes by number of students
    const filteredInstructors = instructors
        .filter((instructorNumber) => instructorNumber.students)
        .sort((a, b) => b.students - a.students)
        .slice(0, 6);

    return (
        <div className='mb-14 mt-28 '>
            <h1 className='text-center text-3xl font-bold mb-5'>
                <FaQuoteLeft className='inline-block mr-2 text-yellow-500 h-14 w-14' />
                Trained <br />By Reliable Instructors
                <FaQuoteRight className='inline-block ml-2 text-yellow-500 h-14 w-14' />
            </h1>
            <div className='grid md:grid-cols-3 gap-8 sm:mx-auto mt-10 '>
                {filteredInstructors.map((instructor) => (
                    <InstuctorNumber key={instructor._id} instructor={instructor} />
                ))}
            </div>
        </div>
    );
};

export default PopularInstructor;
