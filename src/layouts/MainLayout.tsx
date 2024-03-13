import { Outlet } from "react-router-dom";

import Footer from "../components/ui/Footer";
import Navbar from "../components/ui/Navbar";
import { useAppSelector } from "../redux/hook";

const MainLayout = () => {
  const darkMode = useAppSelector((state) => state.theme.darkMode);
  return (
    <div className={`${darkMode ? "bg-slate-900 text-white" : null}`}>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
