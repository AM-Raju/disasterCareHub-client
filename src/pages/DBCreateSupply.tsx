import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { imageUpload } from "../api/utils";
import { useCreateSupplyMutation } from "../redux/features/supply/supplyApi";
import toast from "react-hot-toast";
import { useAppSelector } from "../redux/hook";

const DBCreateSupply = () => {
  const [createSupply] = useCreateSupplyMutation();
  const { register, handleSubmit, reset } = useForm<FieldValues>();
  const user = useAppSelector((state) => state.auth.user);

  const handleCreateSupply: SubmitHandler<FieldValues> = (data) => {
    try {
      const { title, category, amount, description, image } = data;

      if (image.length > 0) {
        // Get image url from imgbb
        imageUpload(image[0]).then(async (data) => {
          const imageUrl = data.data.display_url;

          if (imageUrl) {
            const newSupply = {
              title,
              category,
              amount,
              description,
              imageUrl,
              donatedBy: user?.email,
            };

            const res: any = await createSupply(newSupply);

            if (res?.data?.insertedId) {
              toast.success("Supply created successfully!");
              reset();
            }
          }
        });
      }
    } catch (error) {
      toast.error("Supply creation error!");
    }
  };

  return (
    <div className="max-w-4xl mx-auto  pt-12">
      <h1 className=" text-amber-500 border-b-2 font-poppins text-5xl lg:text-6xl font-semibold text-center ">
        Create A Supply
      </h1>
      <div className="overflow-x-auto  border border-amber-500 p-10 mt-16">
        <form
          className=" space-y-5"
          onSubmit={handleSubmit(handleCreateSupply)}
        >
          <input
            className="outline-none py-2 px-3 w-full bg-transparent border border-amber-500 focus:text-black focus:bg-white  "
            type="text"
            placeholder="Title"
            {...register("title")}
          />
          <div className="flex flex-col lg:flex-row gap-4">
            <select
              className="outline-none py-2 px-3 w-full bg-transparent border border-amber-500 focus:text-black focus:bg-white  "
              {...register("category")}
            >
              <option>Select Category</option>
              <option value="medicine">Medicine</option>
              <option value="infrastructure">Infrastructure</option>
              <option value="food">Food</option>
            </select>

            <input
              className="outline-none py-2 px-3 w-full bg-transparent border  focus:text-black focus:bg-white border-amber-500  "
              type="text"
              placeholder="Amount"
              {...register("amount")}
            />
          </div>
          <textarea
            className="outline-none py-2 px-3 w-full bg-transparent border border-amber-500 focus:text-black focus:bg-white resize-none min-h-40"
            placeholder="Description"
            id=""
            {...register("description")}
          ></textarea>
          {/* File upload filed */}
          <div className="w-full ">
            <label
              className=" w-full text-center bg-amber-500 cursor-pointer   block px-7 py-2 mt-1"
              htmlFor="file"
            >
              Upload Supply Image
            </label>
            <input
              id="file"
              className="hidden"
              {...register("image")}
              type="file"
            />
          </div>

          <div className="w-full pt-5">
            <button
              className=" w-full bg-amber-500 hover:bg-amber-600 transition-all duration-500 px-3 py-3 border font-poppins border-white"
              type="submit"
            >
              Create Supply
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DBCreateSupply;
