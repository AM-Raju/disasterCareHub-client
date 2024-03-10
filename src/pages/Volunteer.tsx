import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import image from "../assets/volunteer/volunterBg.jpg";
import { imageUpload } from "../api/utils";
import toast from "react-hot-toast";
import { useCreateVolunteerMutation } from "../redux/features/volunteer/volunteerApi";

const Volunteer = () => {
  const [createVolunteer] = useCreateVolunteerMutation();
  const { handleSubmit, register, reset } = useForm<FieldValues>();

  const handleCreateVolunteer: SubmitHandler<FieldValues> = async (data) => {
    try {
      const { name, email, city, state, country, image } = data;
      let volunteer;
      if (image.length > 0) {
        // Get image url from imgbb
        imageUpload(image[0]).then((data) => {
          const imageUrl = data.data.display_url;

          if (imageUrl) {
            volunteer = {
              name,
              email,
              city,
              state,
              country,
              imageUrl,
            };

            console.log(volunteer);
          }
        });
      } else {
        volunteer = { name, email, city, state, country };
        const res: any = await createVolunteer(volunteer);
      }

      if (volunteer) {
        console.log('me', volunteer);
        

        if (res?.data?.insertedId) {
          toast.success("Volunteer created successfully!");
          reset();
        }
      }
    } catch (error) {
      toast.error("Error in volunteer creation!");
    }
  };

  return (
    <div className="max-w-7xl mx-auto min-h-[calc(100vh-64px)] pt-24 md:flex">
      <div className="flex-none relative  md:w-2/6 flex flex-col justify-center  ">
        <div className="text-center mb-6">
          <h3 className=" text-lg  relative top-8 right-4 tracking-wide">Be a helping hand to </h3>
          <h1 className="text-7xl font-semibold text-amber-500 relative">Humanity</h1>
        </div>
        <img className=" top-[calc(50%-212px)]" src={image} alt="" />
      </div>
      <div className=" w-full mx-auto bg-transparent my-auto px-5 md:px-0">
        <div className="overflow-x-auto max-w-2xl mx-auto  border border-amber-500 p-10 mb-10 md:mb-0">
          <form className=" space-y-5" onSubmit={handleSubmit(handleCreateVolunteer)}>
            <input
              className="outline-none py-2 px-3 w-full bg-transparent border border-amber-500 focus:text-black focus:bg-white  "
              type="text"
              placeholder="Name"
              {...register("name")}
            />
            <input
              className="outline-none py-2 px-3 w-full bg-transparent border  focus:text-black focus:bg-white border-amber-500  "
              type="email"
              placeholder="Email"
              {...register("email")}
            />
            <div className="flex flex-col lg:flex-row gap-4">
              <input
                className="outline-none py-2 px-3 w-full bg-transparent border  focus:text-black focus:bg-white border-amber-500  "
                type="text"
                placeholder="City"
                {...register("city")}
              />
              <input
                className="outline-none py-2 px-3 w-full bg-transparent border  focus:text-black focus:bg-white border-amber-500  "
                type="text"
                placeholder="State"
                {...register("state")}
              />
              <input
                className="outline-none py-2 px-3 w-full bg-transparent border  focus:text-black focus:bg-white border-amber-500  "
                type="text"
                placeholder="Country"
                {...register("country")}
              />
            </div>

            {/* File upload filed */}
            <div className="w-full ">
              <label
                className=" w-full text-center bg-amber-500 cursor-pointer   block px-7 py-2 mt-1"
                htmlFor="file"
              >
                Upload Photo
              </label>
              <input id="file" className="hidden" {...register("image")} type="file" />
            </div>

            <div className="w-full pt-5">
              <button
                className=" w-full bg-amber-500 hover:bg-amber-600 transition-all duration-500 px-3 py-3 border font-poppins border-white"
                type="submit"
              >
                Be a Volunteer
              </button>
            </div>
          </form>
        </div>{" "}
      </div>
    </div>
  );
};

export default Volunteer;
