import { Navigate, createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import DBLayout from "../layouts/DBLayout";
import Home from "../pages/Home";
import DBHome from "../pages/DBHome";
import AllSupplies from "../pages/AllSupplies";
import Login from "../pages/Login";
import Register from "../pages/Register";
import DBAllSupplies from "../pages/DBAllSupplies";
import ErrorPage from "../pages/ErrorPage";
import SupplyDetails from "../pages/SupplyDetails";
import DBCreateSupply from "../pages/DBCreateSupply";
import ProtectedRoute from "./ProtectedRoute";
import LeaderBoard from "../pages/leaderBoard/LeaderBoard";
import Community from "../pages/Community";
import DonorRoute from "./DonorRoute";
import DBAllUsers from "../pages/DBAllUsers";
import Volunteer from "../pages/Volunteer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/supplies",
        element: <AllSupplies></AllSupplies>,
      },
      {
        path: "/leaderboard",
        element: <LeaderBoard></LeaderBoard>,
      },
      {
        path: "/community",
        element: <Community></Community>,
      },
      {
        path: "/volunteer",
        element: <Volunteer></Volunteer>,
      },
      {
        path: "/supplies/:id",
        element: <SupplyDetails></SupplyDetails>,
        loader: ({ params }) => fetch(`http://localhost:5000/supply/${params.id}`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <DBLayout></DBLayout>
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <Navigate to="/dashboard/home"></Navigate>,
      },
      {
        path: "home",
        element: <DBHome></DBHome>,
      },
      {
        path: "all-users",
        element: <DBAllUsers></DBAllUsers>,
      },
      {
        path: "create-supply",
        element: (
          <DonorRoute>
            <DBCreateSupply></DBCreateSupply>
          </DonorRoute>
        ),
      },
      {
        path: "all-supplies",
        element: <DBAllSupplies></DBAllSupplies>,
      },
    ],
  },
]);

export default router;
