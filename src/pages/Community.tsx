import { useState } from "react";
import CommunityPost from "../components/community/CommunityPost";
import CommunitySidebar from "../components/community/CommunitySidebar";
import { useAppSelector } from "../redux/hook";
import { useGetSupplyQuery } from "../redux/features/addSupply/supplyApi";

const Community = () => {
  const [supplyData, setSupplyData] = useState(null);

  return (
    <div className="max-w-[1280px] mx-auto">
      <div className="mt-24 grid grid-cols-12 h-[calc(100%-64px)] min-h-[calc(100vh-160px)]">
        <CommunitySidebar></CommunitySidebar>
        <div className="col-span-9">
          {supplyData ? (
            /* Here goes the community wall or home */
            <div className="w-full h-96 bg-green-400 flex items-center justify-center text-2xl">
              <h3>this is community wall or home</h3>
            </div>
          ) : (
            <CommunityPost></CommunityPost>
          )}
        </div>
      </div>
    </div>
  );
};

export default Community;
