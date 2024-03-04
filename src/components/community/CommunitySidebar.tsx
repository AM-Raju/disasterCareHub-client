import { useGetSuppliesQuery } from "../../redux/features/addSupply/supplyApi";
import SidebarItem from "./SidebarItem";

const CommunitySidebar = () => {
  const { data: supplyData, isLoading: supplyIsLoading } = useGetSuppliesQuery(undefined);

  return (
    <div className="col-span-3 p-3 lg:p-5 bg-slate-800  h-[calc(100vh-160px)] sticky top-0 left-0 overflow-auto ">
      <div className="space-y-2 ">
        {!supplyIsLoading &&
          supplyData.map((item) => <SidebarItem key={item?._id} item={item}></SidebarItem>)}
      </div>
    </div>
  );
};

export default CommunitySidebar;
