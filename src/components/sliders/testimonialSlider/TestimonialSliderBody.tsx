import { useAppSelector } from "../../../redux/hook";
import { TTestimonial } from "../../../types/testimonial.types";

type TTestimonialSliderBodyProps = {
  testimonialData: TTestimonial;
};

const TestimonialSliderBody = ({
  testimonialData,
}: TTestimonialSliderBodyProps) => {
  const darkMode = useAppSelector((state) => state.theme.darkMode);
  const { testimonial, donor } = testimonialData;

  const { name, image, company, designation } = donor[0];

  return (
    <div className="max-w-5xl mx-auto lg:h-96 border  relative overflow-hidden">
      <div className="bg-gradient-to-tr from-red-500 via-purple-500 to-yellow-500 size-[5000px]  absolute  animate-pulse"></div>
      <div
        className={`${
          darkMode ? "bg-slate-700" : "bg-gray-100"
        } mx-1 z-30 relative`}
      >
        <div className="flex flex-col lg:flex-row justify-evenly items-center">
          <div className="w-96 lg:w-[500px] p-5 lg:p-10">
            <p>{testimonial}</p>
            <div className=" flex  items-center gap-5  mt-5 ">
              <div className="w-0.5 h-10 bg-amber-500"></div>
              <div className={`${darkMode ? "text-white" : "text-gray-600"}`}>
                <p className="font-poppins">{name}</p>
                {company && designation && (
                  <p className="font-poppins  text-xs">
                    {designation ? `${designation}, ` : null}
                    {company ? `${company}` : null}
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center h-96 ">
            <img className="size-72" src={image} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSliderBody;
