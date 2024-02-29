import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { FaXmark } from "react-icons/fa6";
import { closeUpdateSupplyModal } from "../../redux/features/updateSupplyModalSlice";
// import { useGetSupplyQuery } from "../../redux/features/addSupply/supplyApi";

const UpdateSupplyModal = () => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.updateSupplyModal.isOpen);
  // const id = useAppSelector((state) => state.updateSupplyModal.id);

  // const { data } = useGetSupplyQuery(id);

  //   console.log("Single supply data", id, data);

  const { register, handleSubmit } = useForm<FieldValues>();

  const handleUpdateSupply: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };

  const handleCloseUpdateSupplyModal = () => {
    dispatch(closeUpdateSupplyModal());
  };

  // set condition is !isOpen render nothing
  if (!isOpen) {
    return null;
  }

  return (
    <div className="bg-slate-500 bg-opacity-50 fixed top-0  right-0 w-10/12 z-50 h-screen  flex justify-center items-center ">
      <div className=" w-11/12 lg:w-9/12 2xl:w-7/12 px-5 sm:px-10 lg:px-16 py-8 border bg-white rounded-xl relative">
        <h2 className="text-[30px] lg:text-[48px] font-semibold text-center mb-8">Update Event</h2>
        <form className=" space-y-5" onSubmit={handleSubmit(handleUpdateSupply)}>
          <input
            className="outline-none py-2 px-3 w-full bg-transparent border border-amber-500 focus:text-black focus:bg-white  "
            type="text"
            placeholder="Title"
            {...register("title")}
          />
          <div className="flex gap-4">
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
              Update Supply Image
            </label>
            <input id="file" className="hidden" {...register("image")} type="file" />
          </div>

          <div className="w-full pt-5">
            <button
              className=" w-full bg-amber-500 hover:bg-amber-600 transition-all duration-500 px-3 py-3 border font-poppins border-white"
              type="submit"
            >
              Update Supply
            </button>
          </div>
        </form>
        <button>
          <FaXmark
            onClick={handleCloseUpdateSupplyModal}
            className="text-3xl rounded-full text-red-500 hover:text-white hover:p-1 hover:bg-red-500 absolute  top-1 right-1 transition-all duration-300"
          ></FaXmark>
        </button>
      </div>
    </div>
  );
};

export default UpdateSupplyModal;
