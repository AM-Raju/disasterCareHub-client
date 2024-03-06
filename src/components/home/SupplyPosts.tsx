import Container from "../../layouts/Container";
import Button from "../ui/Button";
import SupplyCard from "../cards/SupplyCard";
import { useGetSuppliesQuery } from "../../redux/features/supply/supplyApi";
import { TSupply } from "../../types/supply.types";
import Spinner from "../ui/Spinner";
import { Link } from "react-router-dom";

const SupplyPosts = () => {
  const { data, isLoading } = useGetSuppliesQuery(6);

  if (isLoading) {
    return <Spinner></Spinner>;
  }

  return (
    <Container>
      <div className="mt-40">
        <h1 className="text-6xl font-poppins font-semibold">Top Supplies</h1>
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  grid-rows-2 gap-3 mt-16">
          {data.map((supply: TSupply) => (
            <SupplyCard key={supply?._id} supply={supply}></SupplyCard>
          ))}
        </div>
        <div className="w-60 mx-auto mt-16">
          <Link to="/supplies">
            <Button className="bg-amber-500 hover:bg-amber-600 transition-all duration-300">
              {" "}
              View All
            </Button>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default SupplyPosts;
