import { FaHome } from "react-icons/fa";
import { useGetSuppliesQuery } from "../../redux/features/supply/supplyApi";
import { TSupply } from "../../types/supply.types";
import SidebarItem from "./SidebarItem";
import { useAppDispatch } from "../../redux/hook";
import { removeSupplyId } from "../../redux/features/supply/supplyIdSlice";

const CommunitySidebar = () => {
  const dispatch = useAppDispatch();
  const { data: supplyData, isLoading: supplyIsLoading } =
    useGetSuppliesQuery(undefined);

  const showCommunityHome = () => {
    dispatch(removeSupplyId());
  };

  return (
    <div className="col-span-3 p-3 lg:p-5 bg-slate-800  h-[calc(100vh-160px)] sticky top-0 left-0 overflow-auto ">
      <div className="space-y-2 ">
        <button
          onClick={showCommunityHome}
          className="h-10 w-16 md:w-full bg-amber-500 flex items-center p-3 gap-3 truncate mx-auto"
        >
          <div className="flex items-center justify-center md:justify-start w-full">
            <FaHome className=" size-6 text-white shrink-0"></FaHome>
            <h3 className="truncate hidden md:block">Community Home</h3>
          </div>
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
