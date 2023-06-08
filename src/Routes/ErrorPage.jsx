import React from 'react';
import { Link } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';

const ErrorPage = () => {
    return (
        <div className="card lg:card-side bg-gradient-to-br from-[#3E5151] to-[#b1a181] shadow-xl w-full lg:w-[800px] mb-8 lg:mb-28 mt-8 lg:mt-36 mx-auto p-10">
            <Fade cascade damping={0.2}>
                <figure className="w-full lg:w-[500px]">
                    <img src="https://i.ibb.co/vw9spJZ/6342464.jpg" alt="Album" className="rounded-xl w-full hover:scale-105 transition-transform duration-300" />
                </figure>
            </Fade>
            <div className="card-body justify-center">
                <Fade damping={0.2}>
                    <div className="card-actions">
                        <Link to="/">
                            <button className="btn btn-warning btn-outline uppercase hover:bg-gradient-to-br from-blue-600 to-purple-600">Back to Home</button>
                        </Link>
                    </div>
                </Fade>
            </div>
        </div>
    );
};

export default ErrorPage;
