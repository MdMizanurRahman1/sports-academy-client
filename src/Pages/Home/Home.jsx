import React from 'react';
import Banner from './Banner';
import Gallery from '../Gallery/Gallery';
import PopularClass from './PopularClass';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <PopularClass></PopularClass>
        </div>
    );
};

export default Home;