import React from 'react';
import Review from '../Main/Review/Review';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Review />
            <Footer />
        </div>
    );
};

export default Home;