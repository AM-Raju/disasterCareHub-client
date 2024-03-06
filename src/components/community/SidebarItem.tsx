import { setSupplyId } from "../../redux/features/supply/supplyIdSlice";
import { useAppDispatch } from "../../redux/hook";

const SidebarItem = ({ item }) => {
  const dispatch = useAppDispatch();
  const { _id, title, imageUrl } = item;

  const showItem = (id: string) => {
    dispatch(setSupplyId(id));
  };

  return (
    <>
      <div onClick={() => showItem(_id)} className="flex cursor-pointer border bg-amber-500">
        <img className="size-16  shrink-0" src={imageUrl} alt="" />
        <div title={title} className="pl-3 p-1 truncate hidden md:block">
          <h3 className="font-semibold truncate">{title}</h3>
          <p className="text-sm truncate">Donor: Mark Gibson</p>
        </div>
      </div>
    </>
  );
};

export default SidebarItem;
