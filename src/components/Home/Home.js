import React from 'react';
import Banner from '../Main/Header/Banner/Banner';
import Review from '../Main/Review/Review';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';

const Home = () => {
    return (
        <div>
            {/* <Navbar /> */}
            <Banner />
            <Review />
            <Footer />
        </div>
    );
};

export default Home;