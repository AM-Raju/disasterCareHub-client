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
        path: "create-supply",
        element: <DBCreateSupply></DBCreateSupply>,
      },
      {
        path: "all-supplies",
        element: <DBAllSupplies></DBAllSupplies>,
      },
    ],
  },
]);

export default router;
