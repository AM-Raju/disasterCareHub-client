import { setSupplyId } from "../../redux/features/supply/supplyIdSlice";
import { useAppDispatch } from "../../redux/hook";
import { TSupply } from "../../types/supply.types";

type TSidebarItemProps = {
  item: TSupply;
};

const SidebarItem = ({ item }: TSidebarItemProps) => {
  const dispatch = useAppDispatch();
  const { _id, title, imageUrl } = item;

  const showItem = (id: string) => {
    dispatch(setSupplyId(id));
  };

  return (
    <>
      <div
        title={title}
        onClick={() => showItem(_id)}
        className="flex cursor-pointer border bg-amber-500 w-16 md:w-full mx-auto"
      >
        <img className="size-16  shrink-0" src={imageUrl} alt="" />
        <div className="pl-3 p-1 truncate hidden md:block">
          <h3 className="font-semibold truncate">{title}</h3>
          <p className="text-sm truncate">Donor: Mark Gibson</p>
        </div>
      </div>
    </>
  );
};

export default SidebarItem;
