import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  HomeLayout,
  Landing,
  Register,
  Login,
  DashboardLayout,
  Error,
  AddBike,
  AllBikes,
  Profile,
  Admin,
  Stats,
  EditBike,
} from "./pages";

import { action as addBikeAction } from "./pages/AddBike";
import { loader as allBikesLoader } from "./pages/AllBikes";
import { loader as editBikeLoader } from "./pages/EditBike";
import { action as editBikeAction } from "./pages/EditBike";
import { action as deleteBikeAction } from "./pages/DeleteBike";

export const checkDefaultTheme = () => {
  const isDarkTheme = localStorage.getItem("darkTheme") === "true";
  document.body.classList.toggle("dark-theme", isDarkTheme);
  return isDarkTheme;
};

checkDefaultTheme();

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "dashboard",
        element: <DashboardLayout />,
        children: [
          {
            index: true,
            element: <AddBike />,
            action: addBikeAction,
          },
          {
            path: "stats",
            element: <Stats />,
          },
          {
            path: "all-bikes",
            element: <AllBikes />,
            loader: allBikesLoader,
          },
          {
            path: "profile",
            element: <Profile />,
          },
          {
            path: "admin",
            element: <Admin />,
          },
          {
            path: "edit-bike/:id",
            element: <EditBike />,
            loader: editBikeLoader,
            action: editBikeAction,
          },
          {
            path: "delete-bike/:id",
            action: deleteBikeAction,
          },
        ],
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;