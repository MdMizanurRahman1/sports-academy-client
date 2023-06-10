import React from 'react';
import { Reveal, Fade } from 'react-awesome-reveal';
import { AiFillFileImage, AiOutlineFileImage } from 'react-icons/ai';

const Gallery = () => {
    return (
        <div>
            <>
                <h3 className='justify-center flex  mb-7 text-3xl font-semibold text-slate-600'> <AiOutlineFileImage className='text-red-700 h-10 w-12 mr-2' />Gallery Academy</h3>
            </>
            <div className="flex overflow-x-hidden overflow-y-hidden mb-10">
                <div className="grid grid-cols-3 gap-5">
                    <div className="flex justify-center items-center rotate-3 transition duration-500 ease-in-out transform hover:scale-105">
                        <Reveal triggerOnce>
                            <Fade direction="left">
                                <img
                                    src="https://i.ibb.co/rFS0jtY/full-shot-boy-kicking-ball.jpg"
                                    alt="Image 1"
                                    className="max-w-1/2 mx-auto rounded-xl"
                                    style={{ margin: '0 20px' }}
                                />
                            </Fade>
                        </Reveal>
                    </div>
                    <div className="flex justify-center items-center rotate-1 transition duration-500 ease-in-out transform hover:scale-105">
                        <Reveal triggerOnce>
                            <Fade direction="right">
                                <img
                                    src="https://i.ibb.co/0hWXvmT/kids-climbing-rope-together-close-up.jpg"
                                    alt="Image 2"
                                    className="max-w-1/2 mx-auto rounded-xl"
                                    style={{ margin: '0 20px' }}
                                />
                            </Fade>
                        </Reveal>
                    </div>
                    <div className="flex justify-center items-center rotate-3 transition duration-500 ease-in-out transform hover:scale-105">
                        <Reveal triggerOnce>
                            <Fade direction="left">
                                <img
                                    src="https://i.ibb.co/hYRPLPQ/kids-having-fun-tug-war.jpg"
                                    alt="Image 3"
                                    className="max-w-1/2 mx-auto rounded-xl"
                                    style={{ margin: '0 20px' }}
                                />
                            </Fade>
                        </Reveal>
                    </div>
                    <div className="flex justify-center items-center rotate-1 transition duration-500 ease-in-out transform hover:scale-105">
                        <Reveal triggerOnce>
                            <Fade direction="right">
                                <img
                                    src="https://i.ibb.co/JmNS7tF/little-kid-playing.jpg"
                                    alt="Image 4"
                                    className="max-w-1/2 mx-auto rounded-xl"
                                    style={{ margin: '0 20px' }}
                                />
                            </Fade>
                        </Reveal>
                    </div>
                    <div className="flex justify-center items-center rotate-3 transition duration-500 ease-in-out transform hover:scale-105">
                        <Reveal triggerOnce>
                            <Fade direction="left">
                                <img
                                    src="https://i.ibb.co/nBMg8gF/side-view-man-training-kids-playing-football.jpg"
                                    alt="Image 5"
                                    className="max-w-1/2 mx-auto rounded-xl"
                                    style={{ margin: '0 20px' }}
                                />
                            </Fade>
                        </Reveal>
                    </div>
                    <div className="flex justify-center items-center rotate-1 transition duration-500 ease-in-out transform hover:scale-105">
                        <Reveal triggerOnce>
                            <Fade direction="right">
                                <img
                                    src="https://i.ibb.co/pfF2GPy/people-playing-padle-tennis-inside.jpg"
                                    alt="Image 6"
                                    className="max-w-1/2 mx-auto rounded-xl scale-100"
                                    style={{ margin: '0 20px' }}
                                />
                            </Fade>
                        </Reveal>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Gallery;
