import { useGetSuppliesQuery } from "../redux/features/addSupply/supplyApi";
import TableRow from "../components/DBAllSupplies/TableRow";
import Spinner from "../components/ui/Spinner";
import { TSupply } from "../types/supply.types";
import DeleteModal from "../components/modals/DeleteModal";
import UpdateSupplyModal from "../components/modals/UpdateSupplyModal";

const DBAllSupplies = () => {
  const { data, isLoading } = useGetSuppliesQuery(undefined);

  if (isLoading) {
    return <Spinner></Spinner>;
  }
  return (
    <div className="max-w-6xl mx-auto  pt-12">
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
              <th>Title</th>
              <th>Category</th>
              <th>Amount</th>
              <th>Update</th>
              <th>Delete</th>
              <th>Add Supply</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {data.map((supply: TSupply, index: number) => (
              <TableRow key={supply?._id} index={index} supply={supply}></TableRow>
            ))}
          </tbody>
        </table>
      </div>
      <DeleteModal></DeleteModal>
      <UpdateSupplyModal></UpdateSupplyModal>
    </div>
  );
};

export default DBAllSupplies;
