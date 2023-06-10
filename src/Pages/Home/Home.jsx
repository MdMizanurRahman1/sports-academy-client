import React from 'react';
import Banner from './Banner';
import Gallery from '../Gallery/Gallery';
import PopularClass from './PopularClass';
import PopularInstructor from './PopularInstructor/PopularInstructor';



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <PopularClass></PopularClass>
            <PopularInstructor></PopularInstructor>
        </div>
    );
};

export default Home;