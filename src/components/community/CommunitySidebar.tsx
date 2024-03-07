import { useGetSuppliesQuery } from "../../redux/features/supply/supplyApi";
import { TSupply } from "../../types/supply.types";
import SidebarItem from "./SidebarItem";

const CommunitySidebar = () => {
  const { data: supplyData, isLoading: supplyIsLoading } = useGetSuppliesQuery(undefined);

  return (
    <div className="col-span-3 p-3 lg:p-5 bg-slate-800  h-[calc(100vh-160px)] sticky top-0 left-0 overflow-auto ">
      <div className="space-y-2 ">
        {!supplyIsLoading &&
          supplyData.map((item: TSupply) => (
            <SidebarItem key={item?._id} item={item}></SidebarItem>
          ))}
      </div>
    </div>
  );
};

export default CommunitySidebar;
