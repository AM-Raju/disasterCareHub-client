import CommunityPost from "../components/community/CommunityPost";
import CommunitySidebar from "../components/community/CommunitySidebar";
import CommunityWall from "../components/community/CommunityWall";
import { useAppSelector } from "../redux/hook";

const Community = () => {
  const user = useAppSelector((state) => state.auth.user);
  const supplyId = useAppSelector((state) => state.supplyId.id);

  console.log(supplyId);

  return (
    <div className="max-w-[1280px] mx-auto">
      <div className="mt-24 grid grid-cols-12 h-[calc(100%-64px)] min-h-[calc(100vh-160px)]">
        <div className="col-span-3 h-full bg-slate-800">
          <CommunitySidebar></CommunitySidebar>
        </div>
        <div className="col-span-9">
          {!supplyId ? (
            /* Here goes the community wall or home */
            <CommunityWall></CommunityWall>
          ) : (
            <CommunityPost></CommunityPost>
          )}
        </div>
      </div>
    </div>
  );
};

export default Community;
