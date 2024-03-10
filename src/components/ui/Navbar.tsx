import { useState } from "react";
import Container from "../../layouts/Container";
import Logo from "./Logo";
import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { logout } from "../../redux/features/auth/authSlice";
import { FaBars, FaXmark } from "react-icons/fa6";
import { motion, useAnimationControls } from "framer-motion";
import NavUser from "./NavUser";
import { removeSupplyId } from "../../redux/features/supply/supplyIdSlice";

const Navbar = () => {
  const controlNavItemContainer = useAnimationControls();

  const [toggleNav, setToggleNav] = useState(false);

  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.user);

  const handleLogout = () => {
    dispatch(logout());
    dispatch(removeSupplyId());
  };

  const handleToggleNav = () => {
    if (toggleNav) {
      controlNavItemContainer.start({
        x: -208,

        transition: { duration: 0.5, ease: "easeInOut" },
      });
    } else {
      controlNavItemContainer.start({
        x: 0,
        transition: { duration: 0.5, ease: "easeInOut" },
      });
    }

    setToggleNav(!toggleNav);
  };

  return (
    <>
      {/* Web Nav */}
      <div>
        <div className="hidden lg:block bg-white h-24 bg-opacity-60  absolute top-0 w-full  mx-auto border-b-[1px] border-amber-500 z-50">
          <Container>
            <div className="h-24 flex items-center justify-between">
              <NavLink to="/">
                {" "}
                <Logo></Logo>
              </NavLink>
              {/* Nav segment */}
              <div className="flex justify-center items-center gap-5">
                <nav className="flex gap-5 font-roboto tracking-widest ">
                  <div className="relative group">
                    <NavLink to="/supplies">All Supplies</NavLink>
                    <div className="w-full h-0.5 group-hover:bg-white absolute left-0 -bottom-9 transition-all duration-500"></div>
                  </div>
                  <div className="relative group">
                    <NavLink to="/leaderboard">LeaderBoard</NavLink>
                    <div className="w-full h-0.5 group-hover:bg-white absolute left-0 -bottom-9 transition-all duration-500"></div>
                  </div>
                  <div className="relative group">
                    <NavLink to="/community">Community</NavLink>
                    <div className="w-full h-0.5 group-hover:bg-white absolute left-0 -bottom-9 transition-all duration-500"></div>
                  </div>
                  <div className="relative group">
                    <NavLink to="/about-us">About Us</NavLink>
                    <div className="w-full h-0.5 group-hover:bg-white absolute left-0 -bottom-9 transition-all duration-500"></div>
                  </div>
                  <div className="relative group">
                    <NavLink to="/volunteer">Volunteer</NavLink>
                    <div className="w-full h-0.5 group-hover:bg-white absolute left-0 -bottom-9 transition-all duration-500"></div>
                  </div>
                </nav>

                {/* User segment */}
                <NavUser handleLogout={handleLogout}></NavUser>
              </div>
            </div>
          </Container>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className="absolute top-5 left-5 z-50">
        {
          <FaBars
            onClick={handleToggleNav}
            className={`${
              toggleNav ? "opacity-0 " : "opacity-100 transition-all delay-500 "
            } lg:hidden size-6 text-amber-500 `}
          ></FaBars>
        }
      </div>
      <div>
        {/* main block */}
        <motion.div
          animate={controlNavItemContainer}
          className="-translate-x-52 lg:hidden bg-gray-100 pb-10 px-6 pt-10 text-black h-fit  absolute w-fit mx-auto border-r-[1px] border-amber-500 transition-transform duration-500 ease-out"
        >
          <FaXmark
            onClick={handleToggleNav}
            className="lg:hidden size-7 text-red-500 absolute top-5 left-5"
          ></FaXmark>
          <div className=" mt-4">
            <NavLink to="/">
              <Logo></Logo>
            </NavLink>
            <nav className="  space-y-3 mt-5 font-roboto tracking-widest ">
              <div className="relative group">
                <NavLink to="/supplies">All Supplies</NavLink>
              </div>

              {!user ? (
                <div className="relative group">
                  <NavLink to="/login">Login</NavLink>
                </div>
              ) : (
                <>
                  <div className="relative group">
                    <NavLink to="/dashboard">Dashboard</NavLink>
                  </div>
                  <div className="relative group">
                    <NavLink onClick={handleLogout} to="#">
                      Logout
                    </NavLink>
                  </div>
                </>
              )}
            </nav>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Navbar;
