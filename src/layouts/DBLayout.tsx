import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const DBLayout = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-2">
        <Sidebar></Sidebar>
      </div>
      <div className="col-span-10">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DBLayout;
