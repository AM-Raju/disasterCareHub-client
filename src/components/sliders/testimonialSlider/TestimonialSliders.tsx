import { useGetTestimonialsQuery } from "../../../redux/features/testimonial/testimonialApi";
import TestimonialSliderBody from "./TestimonialSliderBody";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const TestimonialSliders = () => {
  const { data: testimonials, isLoading } = useGetTestimonialsQuery(undefined);

  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {!isLoading &&
          testimonials.map((testimonialData) => (
            <SwiperSlide>
              <TestimonialSliderBody
                key={testimonialData?._id}
                testimonialData={testimonialData}
              ></TestimonialSliderBody>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};

export default TestimonialSliders;
