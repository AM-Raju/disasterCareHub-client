import Container from "../layouts/Container";
import SupplyCard from "../components/cards/SupplyCard";
import { useGetSuppliesQuery } from "../redux/features/addSupply/supplyApi";

import Spinner from "../components/ui/Spinner";
import { TSupply } from "../types/supply.types";

const AllSupplies = () => {
  const { data, isLoading } = useGetSuppliesQuery(undefined);

  if (isLoading) {
    return <Spinner></Spinner>;
  }

  return (
    <Container>
      <div className="min-h-[calc(100vh-64px)] pt-32">
        <h1 className="text-amber-500 border-b-2 font-poppins text-6xl font-semibold text-center ">
          All Supplies
        </h1>
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  grid-rows-2 gap-3 mt-16">
          {data.map((supply: TSupply) => (
            <SupplyCard key={supply?._id} supply={supply}></SupplyCard>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default AllSupplies;
