import React from 'react';
import Banner from './Banner';
import Tools from './Tools';
import BusinessSummary from './BusinessSummary';
import Reviews from './Reviews';
import CallToAction from './CallToAction';
import Contact from './Contact';
import AboutUs from './AboutUs';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <Tools></Tools>
            <BusinessSummary></BusinessSummary>
            <CallToAction></CallToAction>
            <Reviews></Reviews>
            <Contact></Contact>
        </>
    );
};

export default Home;