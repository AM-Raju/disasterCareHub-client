import Spinner from "../components/ui/Spinner";
import UserTableRow from "../components/DBAllUsers/UserTableRow";
import { useGetAllUsersQuery } from "../redux/features/users/usersApi";
import { TUser } from "../types/user.type";

const DBAllUsers = () => {
  const { data, isLoading } = useGetAllUsersQuery(undefined);

  if (isLoading) {
    return <Spinner></Spinner>;
  }

  return (
    <div className="max-w-7xl mx-auto  pt-12">
      <h1 className=" text-amber-500 border-b-2  font-poppins text-5xl lg:text-6xl font-semibold text-center ">
        All Supplies
      </h1>
      <div className="overflow-x-auto mb-10 pt-10 border border-amber-500 p-10 mt-10">
        <table className="table text-center w-full ">
          {/* head */}
          <thead>
            <tr className="border-b-2 border-amber-500 text-amber-500">
              <th>SN</th>
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Change Role</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {data.map((user: TUser, index: number) => (
              <UserTableRow
                key={user?._id}
                index={index}
                user={user}
              ></UserTableRow>
            ))}
          </tbody>
        </table>
      </div>
      {/* <DeleteModal></DeleteModal> */}
      {/* <UpdateSupplyModal></UpdateSupplyModal> */}
    </div>
  );
};

export default DBAllUsers;
