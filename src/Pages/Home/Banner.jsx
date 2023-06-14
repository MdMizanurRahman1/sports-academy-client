import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const BannerSlider = () => {
    const sliderRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            sliderRef.current.slickNext();
        }, 3000);

        return () => {
            clearInterval(interval);
        };
    }, []);

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

    const settings = {
        dots: true,
        infinite: true,
        autoplay: false, // Disable autoplay as we'll handle it manually
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className="carousel-container mb-20 overflow-hidden">
            <Slider {...settings} ref={sliderRef}>
                {slides.map((slide, index) => (
                    <div key={index} className="carousel-slide">
                        <img src={slide.imageUrl} alt={`Slide ${index + 1}`} className="carousel-image" />
                        <div className="carousel-content">
                            <div className="carousel-content-inner mt-3">
                                <h2 className="text-2xl font-semibold text-gray-500 text-center">{slide.title}</h2>
                                <p className="text-base font-normal text-gray-500 text-center">{slide.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default BannerSlider;
