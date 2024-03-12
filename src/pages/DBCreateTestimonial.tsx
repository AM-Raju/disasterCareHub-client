import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useAppSelector } from "../redux/hook";
import { useCreateTestimonialMutation } from "../redux/features/testimonial/testimonialApi";
import toast from "react-hot-toast";

const DBCreateTestimonial = () => {
  const user = useAppSelector((state) => state.auth.user);
  const [createTestimonial] = useCreateTestimonialMutation();

  const { register, handleSubmit, reset } = useForm<FieldValues>();

  const handleCreateTestimonial: SubmitHandler<FieldValues> = async (data) => {
    const { testimonial } = data;
    try {
      const testimonialData = { testimonial, testimonyBy: user?.email };
      console.log(testimonialData);
      const res: any = await createTestimonial(testimonialData);
      if (res?.data?.insertedId) {
        toast.success("Testimonial created successfully!");
        reset();
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error("Testimonial creation error");
    }
  };
  return (
    <div className="max-w-4xl mx-auto  pt-12">
      <h1 className=" text-amber-500 border-b-2 font-poppins text-5xl lg:text-6xl font-semibold text-center ">
        Submit Testimonial
      </h1>
      <div className="overflow-x-auto  border border-amber-500 p-10 mt-16">
        <form
          className=" space-y-5"
          onSubmit={handleSubmit(handleCreateTestimonial)}
        >
          <textarea
            className="outline-none py-2 px-3 w-full bg-transparent border border-amber-500 focus:text-black focus:bg-white resize-none min-h-40"
            placeholder="Testimonial"
            id=""
            {...register("testimonial")}
          ></textarea>

          <div className="w-full pt-5">
            <button
              className=" w-full bg-amber-500 hover:bg-amber-600 transition-all duration-500 px-3 py-3 border font-poppins border-white"
              type="submit"
            >
              Submit Testimonial
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DBCreateTestimonial;
