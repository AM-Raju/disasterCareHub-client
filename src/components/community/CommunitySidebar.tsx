import { FaHome } from "react-icons/fa";
import { useGetSuppliesQuery } from "../../redux/features/supply/supplyApi";
import { TSupply } from "../../types/supply.types";
import SidebarItem from "./SidebarItem";
import { useAppDispatch } from "../../redux/hook";
import { removeSupplyId } from "../../redux/features/supply/supplyIdSlice";

const CommunitySidebar = () => {
  const dispatch = useAppDispatch();
  const { data: supplyData, isLoading: supplyIsLoading } = useGetSuppliesQuery(undefined);

  const showCommunityHome = () => {
    dispatch(removeSupplyId());
  };

  return (
    <div className="col-span-3 p-3 lg:p-5 bg-slate-800  h-[calc(100vh-160px)] sticky top-0 left-0 overflow-auto ">
      <div className="space-y-2 ">
        <button
          onClick={showCommunityHome}
          className="h-10 w-full bg-amber-500 flex items-center p-3 gap-3"
        >
          <FaHome className=" size-6 text-white"></FaHome>
          <h3>Community Home</h3>
        </button>
        {!supplyIsLoading &&
          supplyData.map((item: TSupply) => (
            <SidebarItem key={item?._id} item={item}></SidebarItem>
          ))}
      </div>
    </div>
  );
};

export default CommunitySidebar;
