import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const TestimonialSliders = () => {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="max-w-5xl mx-auto lg:h-96 border  relative overflow-hidden">
            <div className="bg-gradient-to-tr from-red-500 via-purple-500 to-yellow-500 size-[5000px]  absolute  animate-pulse"></div>
            <div className=" bg-gray-100 mx-1 z-30 relative">
              <div className="flex flex-col lg:flex-row justify-evenly items-center">
                <div className="w-96 lg:w-[500px] p-10">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium officiis
                    asperiores natus quam quis et quae delectus repellendus tenetur magni cumque
                    suscipit, reprehenderit atque doloremque placeat unde ducimus ea fuga!
                  </p>
                  <div className=" flex items-center gap-5  mt-5 ">
                    <div className="w-0.5 h-10 bg-amber-500"></div>
                    <div>
                      <p className="font-poppins text-gray-600">Max Gilbert</p>
                      <p className="font-poppins text-gray-600 text-xs">CEO, Cevron</p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center items-center h-96 ">
                  <img
                    className="size-72"
                    src={"https://i.ibb.co/g7ScGKX/testimonial-img-1.png"}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="max-w-5xl mx-auto lg:h-96 border  relative overflow-hidden">
            <div className="bg-gradient-to-tr from-red-500 via-purple-500 to-yellow-500 size-[5000px]  absolute  animate-pulse"></div>
            <div className=" bg-gray-100 mx-1 z-30 relative">
              <div className="flex flex-col lg:flex-row justify-evenly items-center">
                <div className="w-96 lg:w-[500px] p-10">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium officiis
                    asperiores natus quam quis et quae delectus repellendus tenetur magni cumque
                    suscipit, reprehenderit atque doloremque placeat unde ducimus ea fuga!
                  </p>
                  <div className=" flex items-center gap-5  mt-5 ">
                    <div className="w-0.5 h-10 bg-amber-500"></div>
                    <div>
                      <p className="font-poppins text-gray-600">Willum Hofman</p>
                      <p className="font-poppins text-gray-600 text-xs">CEO, Galaxy Dreams</p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center items-center h-96 ">
                  <img
                    className="size-72"
                    src={"https://i.ibb.co/4s9B4g2/testimonial-img-2.jpg"}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="max-w-5xl mx-auto lg:h-96 border  relative overflow-hidden">
            <div className="bg-gradient-to-tr from-red-500 via-purple-500 to-yellow-500 size-[5000px]  absolute  animate-pulse"></div>
            <div className=" bg-gray-100 mx-1 z-30 relative">
              <div className="flex flex-col lg:flex-row justify-evenly items-center">
                <div className="w-96 lg:w-[500px] p-10 ">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium officiis
                    asperiores natus quam quis et quae delectus repellendus tenetur magni cumque
                    suscipit, reprehenderit atque doloremque placeat unde ducimus ea fuga!
                  </p>
                  <div className=" flex items-center gap-5  mt-5 ">
                    <div className="w-0.5 h-10 bg-amber-500"></div>
                    <div>
                      <p className="font-poppins text-gray-600">James Thomas</p>
                      <p className="font-poppins text-gray-600 text-xs">CEO, Navana</p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center items-center h-96 ">
                  <img
                    className="size-72"
                    src={"https://i.ibb.co/YXpc62F/testimonial-img-3.jpg"}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default TestimonialSliders;
