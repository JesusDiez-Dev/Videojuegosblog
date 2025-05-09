import callofduty from '../../img/callofduty.jpg';
// import callofduty from '../img/callofduty.jpg';
import rdr2 from '../../img/rdr2.jpg';
import gta from '../../img/gta.jpg';
import ac from '../../img/ac.jpg';
import ciber from '../../img/ciber.jpg';

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { EffectFade, Navigation, Pagination } from 'swiper/modules';

export default function App() {
  return (
    <>

        <Swiper
                spaceBetween={30}
                effect={'fade'}
                navigation={true}
                // pagination={{
                // clickable: true,
                // }}
                modules={[EffectFade, Navigation, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <p>Call of Duty: Black Ops 6 redefine la guerra moderna con innovadoras mecánicas y un nuevo modo de juego épico</p>
                    <img src={callofduty} alt="" /> 
                </SwiperSlide>

                <SwiperSlide>
                    <p>Red Dead Redemption 2: La experiencia definitiva del Salvaje Oeste, ahora con nuevas actualizaciones y mejoras para los jugadores</p>
                    <img src={rdr2} alt="" /> 
                </SwiperSlide>

                <SwiperSlide>
                    <p>Assassin's Creed Shadows: El regreso de los asesinos con una historia oscura y nuevas mecánicas furtivas</p>
                    <img src={ac} />
                </SwiperSlide>

                <SwiperSlide>
                    <p>Cyberpunk 2077: La actualización 2.0 transforma Night City con nuevas características y una experiencia más pulida</p>
                    <img src={ciber} />
                </SwiperSlide>

                <SwiperSlide>
                    <p>GTA San Andreas: The Definitive Edition llega con mejoras gráficas y contenido renovado para los fans</p>
                    <img src={gta} />
                </SwiperSlide>
                
        </Swiper>
        
    </>
  );
}
