import { FaHome, FaRegUserCircle } from "react-icons/fa";
import { FaLeftLong, FaList, FaPlus, FaUsers } from "react-icons/fa6";
import { BiMessageAltEdit } from "react-icons/bi";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-gray-600 w-full p-2 lg:p-8 h-screen sticky top-0 left-0 overflow-auto">
      <div className="w-full h-full flex flex-col justify-between">
        <div className=" w-full h-full flex flex-col gap-3">
          <NavLink
            className={({ isActive }) =>
              ` w-full px-3 py-2   hover:bg-amber-500 transition-all duration-300 flex gap-3 items-center justify-center lg:justify-start truncate ${
                isActive ? "bg-amber-500" : "bg-gray-300"
              }`
            }
            to="/dashboard/home"
          >
            <FaHome className={`shrink-0 size-6`}></FaHome>
            <span className="truncate hidden md:block">Dashboard Home</span>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `w-full px-3 py-2  hover:bg-amber-500 transition-all duration-300 flex gap-3 items-center justify-center lg:justify-start truncate ${
                isActive ? "bg-amber-500" : "bg-gray-300"
              }`
            }
            to="/dashboard/profile"
          >
            <FaRegUserCircle className="shrink-0 size-6"></FaRegUserCircle>
            <span className="truncate hidden md:block">Profile</span>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `w-full px-3 py-2  hover:bg-amber-500 transition-all duration-300 flex gap-3 items-center justify-center lg:justify-start truncate ${
                isActive ? "bg-amber-500" : "bg-gray-300"
              }`
            }
            to="/dashboard/all-users"
          >
            <FaUsers className="shrink-0 size-6" />
            <span className="truncate hidden md:block">All Users</span>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `w-full px-3 py-2  hover:bg-amber-500 transition-all duration-300 flex gap-3 items-center justify-center lg:justify-start truncate ${
                isActive ? "bg-amber-500" : "bg-gray-300"
              }`
            }
            to="/dashboard/create-supply"
          >
            <FaPlus className="shrink-0 size-6"></FaPlus>
            <span className="truncate hidden md:block">Create Supply</span>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `w-full px-3 py-2  hover:bg-amber-500 transition-all duration-300 flex gap-3 items-center justify-center lg:justify-start truncate ${
                isActive ? "bg-amber-500" : "bg-gray-300"
              }`
            }
            to="/dashboard/all-supplies"
          >
            <FaList className="shrink-0 size-6"></FaList>
            <span className="truncate hidden md:block">All Supplies</span>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `w-full px-3 py-2  hover:bg-amber-500 transition-all duration-300 flex gap-3 items-center justify-center lg:justify-start truncate ${
                isActive ? "bg-amber-500" : "bg-gray-300"
              }`
            }
            to="/dashboard/create-testimonial"
          >
            <BiMessageAltEdit className="shrink-0 size-6" />
            <span className="truncate hidden md:block">Create Testimonial</span>
          </NavLink>
        </div>

        <div className="w-full flex">
          <NavLink
            className={({ isActive }) =>
              `w-full px-3 py-2  hover:bg-amber-500 transition-all duration-300 flex gap-3 items-center justify-center lg:justify-start truncate ${
                isActive ? "bg-amber-500" : "bg-gray-300"
              }`
            }
            to="/"
          >
            <FaLeftLong className="shrink-0 size-6"></FaLeftLong>
            <span className="truncate hidden md:block">Home</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
