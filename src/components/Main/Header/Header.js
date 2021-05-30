import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import SwiperCore, { EffectFade, Scrollbar, A11y, Autoplay } from 'swiper';

//images
import banner1 from '../../../images/splas.jpg';
import banner4 from '../../../images/slider-4.jpg';

//fakeData 
// const bannerImages = [banner1, banner2, banner3, banner4];
const bannerImages = [banner1,
     "https://www.lufthansagroup.com/media/_processed_/8/0/csm_190926_LH_Group_Rollfeld_LH_LX_OS_SN_EW_1d35253659.jpg", 
     "https://c.ekstatic.net/ecl/aircraft-exterior/boeing-777/emirates-boeing-777-300er-flying-above-sea-d600x400.jpg?h=xVDCnzToEwzxjvQouUMazQ", banner4];

SwiperCore.use([EffectFade, Scrollbar, A11y, Autoplay]);

//banner image style 
const bannerImgStyle = {
    height: '100vh',
    width: '100%'
}
const Header = () => {
    return (
        <div>
            <Navbar />
            <Swiper
                spaceBetween={100}
                slidesPerView={1}
                effect={'fade'}
                autoplay={{ delay: 1500 }}
                onSwiper={(swiper) => {
                    // console.log(swiper)
                }}
                onSlideChange={() => {
                    // console.log('slide change');
                }}
            >
                {
                    bannerImages && bannerImages.map((image, index) => (
                        <SwiperSlide key={index}>
                            <div className="h-100">
                                <img src={image} alt="banner" style={bannerImgStyle} />
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
};

export default Header;