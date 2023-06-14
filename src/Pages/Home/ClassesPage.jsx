import React, { useEffect, useState } from 'react';
import ClassCard from './ClassCard';




const ClassesPage = () => {
    const [allClasses, setAllClasses] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://sports-academy-server-liart.vercel.app/class')
            .then((res) => res.json())
            .then((data) => {
                setAllClasses(data);
                setLoading(false);
            });
    }, []);

    return (
        <div className='grid md:grid-cols-3 gap-5'>
            {allClasses.map(classData => (
                <ClassCard key={classData._id} classData={classData} />
            ))}
        </div>
    );
};

export default ClassesPage;
