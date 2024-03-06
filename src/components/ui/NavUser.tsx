import { useEffect, useRef, useState } from "react";
import { useAppSelector } from "../../redux/hook";
import { NavLink } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import { useGetUserQuery } from "../../redux/features/users/usersApi";

const NavUser = ({ handleLogout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const user = useAppSelector((state) => state.auth.user);
  const { data, isLoading } = useGetUserQuery(user?.email);

  const handleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="dropdown dropdown-end" ref={dropdownRef}>
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div onClick={handleDropdown} className=" rounded-full flex items-center gap-1">
          <div>
            <p className="text-xs text-end font-semibold">{data?.name}</p>
            <p className="text-xs text-end text-amber-700">
              {data?.role === "user" ? null : data?.role}
            </p>
          </div>
          {user && !isLoading ? (
            <img className="rounded-full size-8" alt="User icon" src={data?.image} />
          ) : (
            <FaRegUserCircle className="size-8 text-amber-500"></FaRegUserCircle>
          )}
        </div>
      </div>
      <ul
        tabIndex={0}
        className={`menu menu-sm dropdown-content mt-8 z-[1]  shadow bg-amber-500 rounded-b-md w-44 flex flex-col  px-3 py-2 absolute ${
          !isOpen ? "hidden" : null
        }`}
      >
        {!user ? (
          <div className="relative group py-1  tracking-wider font-roboto">
            <NavLink to="/login">Login</NavLink>
            <div className="w-1 rounded-e-3xl h-full group-hover:bg-white absolute -left-3 top-0 transition-all duration-500"></div>
          </div>
        ) : (
          <>
            <div className="relative group py-1  tracking-wider font-roboto">
              <NavLink to="#">Profile</NavLink>
              <div className="w-1 rounded-e-3xl h-full group-hover:bg-white absolute -left-3 top-0 transition-all duration-500"></div>
            </div>
            <div className="relative group py-1  tracking-wider font-roboto">
              <NavLink to="/dashboard">Dashboard</NavLink>
              <div className="w-1 rounded-e-3xl h-full group-hover:bg-white absolute -left-3 top-0 transition-all duration-500"></div>
            </div>
            <div className="relative group py-1  tracking-wider font-roboto">
              <NavLink onClick={handleLogout} to="#">
                Logout
              </NavLink>
              <div className="w-1 rounded-e-3xl h-full group-hover:bg-white absolute -left-3 top-0 transition-all duration-500"></div>
            </div>
          </>
        )}
      </ul>
    </div>
  );
};

export default NavUser;
