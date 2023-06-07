import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Banner.css';

const BannerSlider = () => {
    const slides = [
        {
            imageUrl: 'https://i.ibb.co/QMGTwPf/medium-shot-happy-kids-with-prize.jpg',
            title: 'Discover the Joy of Sports',
            description: 'Engage in physical activities and unlock your potential.',
        },
        {
            imageUrl: 'https://i.ibb.co/b5zG7D1/three-happy-children-show-different-sport-costumes.jpg',
            title: 'Stay Active, Stay Healthy',
            description: 'Sports promote fitness, well-being, and a positive mindset.',
        },
        {
            imageUrl: 'https://i.ibb.co/fHzk09H/portrait-group-girls-as-tennis-players-holding-tennis-racket-against-green-grass-outdoor-court.jpg',
            title: 'Teamwork and Growth',
            description: 'Learn the value of teamwork, perseverance, and personal growth.',
        },
        {
            imageUrl: 'https://i.ibb.co/s5KTVFz/group-teen-boys-girls-sitting-green-grass-park.jpg',
            title: 'Teamwork, Planning and WorkOut',
            description: 'Stick the value of teamwork, learn the tactics, and grow up.',
        },
        {
            imageUrl: 'https://i.ibb.co/dPjVkzG/little-tired-girl-with-blue-helmet-is-resting-ring-punching-bag.jpg',
            title: 'Active and WorkOut',
            description: 'Focus the value of what you want, follow the rules, and shine up.',
        },
    ];

    const renderedSlides = slides.map((slide, index) => (
        <div key={index}>
            <img src={slide.imageUrl} alt={`Slide ${index + 1}`} className="carousel-image h-[700px] mb-5" />
            <div >
                <h2 className="text-2xl font-semibold">{slide.title}</h2>
                <p className=" text-base font-normal">{slide.description}</p>
            </div>
        </div>
    ));

    return (
        <div className="carousel-container mb-20">
            <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
                {renderedSlides}
            </Carousel>
        </div>
    );
};

export default BannerSlider;
