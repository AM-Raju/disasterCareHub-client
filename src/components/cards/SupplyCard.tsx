import Button from "../ui/Button";

import { Link } from "react-router-dom";
import { TSupply } from "../../types/supply.types";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

type TSupplyCardProps = {
  key: string;
  supply: TSupply;
};

const SupplyCard = ({ supply }: TSupplyCardProps) => {
  const { _id, title, category, amount, imageUrl } = supply;
  return (
    <div data-aos="flip-right" data-aos-duration="1000" className="border border-amber-500  p-5">
      <img className=" object-cover mx-auto h-72 w-[376px]" src={imageUrl} alt="" />

      <div className="mt-6 space-y-4">
        <div className="flex justify-between">
          <h4 className="text-xl font-semibold truncate">{title}</h4>
          <div className="flex gap-2">
            <svg
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-blue-500"
            >
              <path d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6Z" />
            </svg>

            <p className="font-semibold">{category}</p>
          </div>
        </div>
        <p>Supply Value: ${amount}</p>

        <Link to={`/supplies/${_id}`}>
          <Button className="bg-amber-500 hover:bg-amber-600 mt-5 transition-all duration-300">
            View Details
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default SupplyCard;
