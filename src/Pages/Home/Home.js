import React from 'react';
import Banner from './Banner';
import Tools from './Tools';
import BusinessSummary from './BusinessSummary';
import Reviews from './Reviews';
import CallToAction from './CallToAction';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Tools></Tools>
            <BusinessSummary></BusinessSummary>
            <CallToAction></CallToAction>
            <Reviews></Reviews>
        </>
    );
};

export default Home;