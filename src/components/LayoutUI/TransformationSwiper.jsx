import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { projectSliderProps } from "../../utils/sliderProps";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import React from "react";
const TransformationSwiper = () => {
  return (
    <div className="transform-swiper">
      <Swiper slidesPerView={1} {...projectSliderProps}>
        <SwiperSlide>
          <div className="gallery-image">
            <img
              src="/img/transformations/bath-transfo.webp"
              alt="bath transformation"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="gallery-image">
            <img
              src="/img/transformations/oven-transfo.webp"
              alt="oven transformation"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="gallery-image">
            <img
              src="/img/transformations/sink-transfo.webp"
              alt="sink transformation"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="gallery-image">
            <img
              src="/img/transformations/toilet-transfo.webp"
              alt="toilet transformation"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default TransformationSwiper;
