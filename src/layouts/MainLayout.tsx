import { Outlet } from "react-router-dom";

import Footer from "../components/ui/Footer";
import Navbar from "../components/ui/Navbar";

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
