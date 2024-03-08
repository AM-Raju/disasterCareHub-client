import { ReactNode } from "react";
import { SlBadge } from "react-icons/sl";

const DonorBadge = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative text-amber-500">
      <SlBadge className="text-7xl "></SlBadge>
      <p className="absolute top-2 left-6 text-2xl font-bold w-6 text-center">{children}</p>
    </div>
  );
};

export default DonorBadge;
