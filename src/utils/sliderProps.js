import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
SwiperCore.use([Pagination, Navigation, EffectFade, Autoplay]);
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
export const projectSliderProps = {
  slidesPerView: 1,
  spaceBetween: 50,
  loop: true,
  pagination: {
    clickable: true,
  },
  autoplay: {
    delay: 1500,
  },
  effect: "coverflow",
  speed: 3000,
  breakpoints: {
    0: { slidesPerView: 1 },
    768: { slidesPerView: 1, spaceBetween: 250 },
    1040: { slidesPerView: 1, spaceBetween: 200 },
  },
};
