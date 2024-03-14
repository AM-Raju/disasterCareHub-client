import { FaRegEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa6";

import { useEffect, useState } from "react";
import { useAppSelector } from "../../redux/hook";
import {
  useDeleteUserMutation,
  useGetUserQuery,
} from "../../redux/features/users/usersApi";
import toast from "react-hot-toast";
import { TUser } from "../../types/user.type";

type TUserTableRowProps = {
  user: TUser;
  index: number;
};

const UserTableRow = ({ user, index }: TUserTableRowProps) => {
  const [disabled, setDisabled] = useState(false);

  const [deleteUser] = useDeleteUserMutation();

  const userInfo = useAppSelector((state) => state.auth.user);

  const { data } = useGetUserQuery(userInfo?.email);

  useEffect(() => {
    // Update the disabled state based on the userRole
    if (data?.role !== "admin") {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [data?.role]);

  const { _id, name, email, image, role } = user;

  const handleDeleteUser = async (id: string) => {
    try {
      const res: any = await deleteUser(id);
      if (res?.data?.deletedCount > 0) {
        toast.success("User deleted successfully");
      }
    } catch (error) {
      toast.error("Error in user deletion");
    }
  };

  return (
    <>
      <tr className=" h-28 border-t-2 ">
        <td className="flex items-center justify-center   h-28">
          <p>{index + 1}</p>
        </td>
        <td>
          <div className="flex items-center justify-center">
            <div className="w-36 h-24 overflow-hidden rounded-md">
              <img src={image} />
            </div>
          </div>
        </td>
        <td>
          <div className="flex items-center justify-center ">
            <p>{name}</p>
          </div>
        </td>
        <td>
          <div className="flex items-center justify-center ">
            <p>{email}</p>
          </div>
        </td>
        <td>{role}</td>
        <td className="space-y-1 py-2  ">
          <button
            className={`block mx-auto w-24 px-2 py-1 rounded-md bg-amber-500  ${
              disabled ? "bg-gray-400" : "hover:bg-amber-600"
            }`}
            disabled={disabled}
          >
            User
          </button>
          <button
            className={`block mx-auto w-24 px-2 py-1 rounded-md bg-amber-500  ${
              disabled ? "bg-gray-400" : "hover:bg-amber-600"
            }`}
            disabled={disabled}
          >
            Volunteer
          </button>
          <button
            className={`block mx-auto w-24 px-2 py-1 rounded-md bg-amber-500  ${
              disabled ? "bg-gray-400" : "hover:bg-amber-600"
            }`}
            disabled={disabled}
          >
            Donor
          </button>
        </td>

        <td>
          <button
            className="flex items-center justify-center  w-full"
            disabled={disabled}
          >
            <FaRegEdit
              // onClick={() => handleUpdateSupplyModal(_id)}
              className={`size-5 text-amber-500 transition-all duration-300 ${
                disabled ? "text-gray-400" : "hover:text-amber-600"
              }`}
            ></FaRegEdit>
          </button>
        </td>
        <td>
          <button
            className="flex items-center justify-center w-full"
            disabled={disabled}
          >
            <FaTrash
              onClick={() => handleDeleteUser(_id)}
              className={`size-5 text-amber-500 transition-all duration-300 ${
                disabled ? "text-gray-400" : "hover:text-amber-600"
              }`}
            ></FaTrash>
          </button>
        </td>
      </tr>
    </>
  );
};

export default UserTableRow;
