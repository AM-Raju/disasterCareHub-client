import { useGetSupplyQuery } from "../../redux/features/addSupply/supplyApi";
import { useAppSelector } from "../../redux/hook";

const CommunityPost = () => {
  const supplyId = useAppSelector((state) => state.supplyId.id);

  const { data } = useGetSupplyQuery(supplyId);

  return (
    <div className="bg-amber-500 w-full h-full">
      <div className="relative ">
        {/* Community Post Header */}
        <div className=" bg-amber-100 flex">
          <img className="w-[600px] h-96" src={data?.imageUrl} alt="" />

          {/* Text block */}
          <div className="h-72 border border-amber-500 md:border-e-0 p-5 md:p-8 top-[calc(50%-144px)] absolute right-0">
            <div className=" p-5 md:p-8 md:w-[400px] h-full  bg-white  bg-opacity-70">
              <h3 className="z-10 text-3xl md:text-4xl  tracking-wider leading-tight font-semibold">
                {data?.title}
              </h3>
              <div className="md:flex justify-between mt-5 ">
                <p>Donor: Mark David</p>
                <p>Category: {data?.category}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Post section */}
      <div className="max-w-3xl bg-zinc-200 mx-auto min-h-96">
        <form className="w-10/12 mx-auto pt-5">
          <div className="p-3 bg-white rounded-lg flex justify-center items-center">
            <textarea
              className="w-full p-3 mx-auto outline-none resize-none min-h-24 rounded-lg focus:bg-slate-200 my-auto"
              name=""
              id=""
            ></textarea>
          </div>
          <button className="px-4 py-2 mt-2 bg-amber-500 hover:bg-amber-600 rounded-lg float-end transition-all duration-300">
            Share Thought
          </button>
        </form>
      </div>
    </div>
  );
};

export default CommunityPost;
