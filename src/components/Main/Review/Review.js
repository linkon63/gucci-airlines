import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import SwiperCore, { Navigation, Scrollbar, A11y, Pagination, Autoplay } from 'swiper';

//images
import review1 from '../../../images/review1.png';
import review2 from '../../../images/review2.png';
import review3 from '../../../images/review3.png';
import review4 from '../../../images/review4.png';

const reviewData = [
    {
        name: 'John Doe',
        img: review1,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore magna aliqua. Ut aliquip ex ea commodo consequat.'
    },
    {
        name: 'John Cena',
        img: review2,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore magna aliqua. Ut aliquip ex ea commodo consequat.'
    },
    {
        name: 'The Rock',
        img: review3,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore magna aliqua. Ut aliquip ex ea commodo consequat.'
    },
    {
        name: 'Ada Lables',
        img: review4,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore magna aliqua. Ut aliquip ex ea commodo consequat.'
    },
]

SwiperCore.use([Navigation, Scrollbar, A11y, Pagination, Autoplay]);
const Review = () => {
    return (
        <section className="bg-dark text-center text-white my-5 py-5">
            <h3>TESTIMONIALS</h3>
            <h2 className="pt-2 pb-4">WHAT OUR CUSTOMERS SAY</h2>
            <div className="container">
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    autoplay={{ delay: 2000 }}
                    pagination={{ clickable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    {
                        reviewData && reviewData.map(review => (
                            <SwiperSlide>
                                <div className="p-5 col-12 col-md-8 col-sm-12 col-lg-8 bg-light mx-auto text-dark text-center rounded">
                                    <blockquote>{review.review}</blockquote>
                                    <img src={review.img} alt={review.name} />
                                    <h3>{review.name}</h3>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </section>
    );
};

export default Review;