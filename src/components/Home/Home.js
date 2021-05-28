import React from 'react';
import Header from '../Main/Header/Header';
import Review from '../Main/Review/Review';
import Service from '../Main/Services/Service';
import Footer from '../Shared/Footer/Footer';

const Home = () => {
    return (
        <div>
            <Header />
            <Service />
            <Review />
            <Footer />
        </div>
    );
};

export default Home;