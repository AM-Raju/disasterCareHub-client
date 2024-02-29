import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import GSComponent1 from "./GSComponent1";
import GSComponent2 from "./GSComponent2";
import GSComponent3 from "./GSComponent3";

const GallerySliders = () => {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <GSComponent3></GSComponent3>
        </SwiperSlide>
        <SwiperSlide>
          <GSComponent1></GSComponent1>
        </SwiperSlide>
        <SwiperSlide>
          <GSComponent2></GSComponent2>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default GallerySliders;
