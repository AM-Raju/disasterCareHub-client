import { ReactNode } from "react";
import { useAppSelector } from "../redux/hook";

import ProtectedPage from "../pages/ProtectedPage";

const DonorRoute = ({ children }: { children: ReactNode }) => {
  const role = useAppSelector((state) => state.role.role);

  if (role === "donor") {
    return children;
  }
  return <ProtectedPage permittedUser="Donor"></ProtectedPage>;
};

export default DonorRoute;
