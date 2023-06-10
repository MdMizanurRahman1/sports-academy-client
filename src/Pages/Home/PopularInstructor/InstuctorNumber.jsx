import React from 'react';
import { FaEnvelope, FaArrowRight } from 'react-icons/fa';

const InstuctorNumber = ({ instructor }) => {
    const { image, name, email } = instructor;

    return (
        <div className="card w-96 glass" style={{ border: 'none' }}>
            <figure>
                <img src={image} alt="car!" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p className='flex  items-center'>
                    <FaEnvelope className="email-icon mr-2 justify-center text-blue-500" />
                    Email: {email}
                </p>
                <div className="card-actions justify-start mt-3">
                    <button className="btn btn-error btn-outline">
                        Learn more!
                        <FaArrowRight className="button-icon" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default InstuctorNumber;
