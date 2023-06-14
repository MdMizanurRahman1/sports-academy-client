import React, { useEffect, useState } from 'react';
import PopularClassNumbers from './PopularClassNumbers';
import { AiFillFire } from 'react-icons/ai';

const PopularClass = () => {
    const [classes, setClasses] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:5000/class')
            .then((res) => res.json())
            .then((data) => {
                setClasses(data);
                setLoading(false);
            });
    }, []);

    // Filter and get only the top 6 classes by number of students
    // const filteredClasses = classes
    //     .filter((classItem) => classItem.students)
    //     .sort((a, b) => b.students - a.students)
    //     .slice(0, 6);

    return (
        <div className='mb-14 mt-28'>
            <h1 className='text-center text-3xl font-bold mb-5'>
                <AiFillFire className='inline-block mr-2 text-yellow-500' />
                Popular Classes
            </h1>
            <div className='grid md:grid-cols-2 gap-5'>
                {classes.map((classItem) => (
                    <PopularClassNumbers key={classItem._id} classItem={classItem} />
                ))}
            </div>
        </div>
    );
};

export default PopularClass;
