import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, A11y } from 'swiper';

import electric from '../../assets/poke-types/electric.png';
import dark from '../../assets/poke-types/dark.png';
import ghost from '../../assets/poke-types/ghost.png';
import bug from '../../assets/poke-types/bug.png';
import flying from '../../assets/poke-types/flying.png';

import './styles.scss';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';


// install Swiper modules
SwiperCore.use([Navigation, A11y]);

const ItemCarousel: React.FC = () => {
    return (
        <div className="container-carousel">
            <h2>tipos</h2>

            <div className="swiper-container">
                <Swiper
                    slidesPerView={3}
                    navigation
                    loop={true}
                    breakpoints={{
                        '@0.00': {
                            slidesPerView: 1,
                            spaceBetween: 10,
                          },
                          '@0.75': {
                            slidesPerView: 2,
                            spaceBetween: 20,
                          },
                          '@1.00': {
                            slidesPerView: 3,
                            spaceBetween: 40,
                          },
                          '@1.50': {
                            slidesPerView: 4,
                            spaceBetween: 50,
                          }
                    }}
                >
                    <SwiperSlide>
                        <img src={electric} alt=""/>
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src={dark} alt=""/>
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src={ghost} alt=""/>
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src={bug} alt=""/>
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src={flying} alt=""/>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default ItemCarousel;