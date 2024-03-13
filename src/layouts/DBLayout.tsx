import { useAppSelector } from "../redux/hook";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const DBLayout = () => {
  const darkMode = useAppSelector((state) => state.theme.darkMode);

  return (
    <div
      className={`grid grid-cols-12 ${
        darkMode ? "bg-slate-900 text-white" : null
      }`}
    >
      <div className="col-span-2">
        <Sidebar></Sidebar>
      </div>
      <div className={`col-span-10 `}>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DBLayout;
