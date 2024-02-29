import { FaRegEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { TSupply } from "../../types/supply.types";
import { useAppDispatch } from "../../redux/hook";
import { openDeleteModal } from "../../redux/features/deleteModalSlice";
import { openUpdateSupplyModal } from "../../redux/features/updateSupplyModalSlice";

type TTableRowProps = {
  key: string;
  index: number;
  supply: TSupply;
};

const TableRow = ({ supply, index }: TTableRowProps) => {
  const dispatch = useAppDispatch();
  const { _id, title, category, amount, imageUrl } = supply;

  const handleDeleteModal = (id: string) => {
    dispatch(openDeleteModal(id));
  };

  const handleUpdateSupplyModal = (id: string) => {
    dispatch(openUpdateSupplyModal(id));
  };

  return (
    <>
      <tr className=" h-28 border-t-2 ">
        <td className="flex items-center justify-center   h-28">
          <p>{index + 1}</p>
        </td>
        <td>
          <div className="flex items-center justify-center">
            <div className=" w-36  p-3 ">
              <img className="rounded-md" src={imageUrl} />
            </div>
          </div>
        </td>
        <td>
          <div className="flex items-center justify-center ">
            <p>{title}</p>
          </div>
        </td>
        <td>{category}</td>
        <td>
          <p>${amount}</p>
        </td>
        <td>
          <div className="flex items-center justify-center">
            <FaRegEdit
              onClick={() => handleUpdateSupplyModal(_id)}
              className="size-5 text-amber-500 hover:text-amber-600 transition-all duration-300"
            ></FaRegEdit>
          </div>
        </td>
        <td>
          <div className="flex items-center justify-center">
            <FaTrash
              onClick={() => handleDeleteModal(_id)}
              className="size-5 text-red-500 hover:text-red-600 transition-all duration-300"
            ></FaTrash>
          </div>
        </td>
        <td>
          <Link to="/dashboard/create-supply">
            <div className="bg-amber-500 hover:bg-amber-600 transition-all duration-300 w-full px-3 py-2">
              Add Supply
            </div>{" "}
          </Link>
        </td>
      </tr>
    </>
  );
};

export default TableRow;
