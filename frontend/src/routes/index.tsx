import { createBrowserRouter } from "react-router-dom";
import PublicRoute from "../guards/PublicRoute";
import PrivateRoute from "../guards/PrivateRoute";

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Main from "../layout/Main";
import Home from "../pages/Home";
import StudentsSpaceSidebar from "../layout/StudentSpaceSidebar";
import Orientation from "../pages/Orientation";

const router = createBrowserRouter([
  {
    path: "/login",
    element: (
      <PublicRoute>
        <Login />
      </PublicRoute>
    ),
  },
  {
    path: "/register",
    element: (
      <PublicRoute>
        <Register />
      </PublicRoute>
    ),
  },
  {
    path: "/",
    element: <Main />,
    children: [
      {
        index: true,
        path: "/",
        element: (
          <PublicRoute>
            <Home />
          </PublicRoute>
        ),
      },
      {
        index: true,
        path: "/orientation",
        element: (
          <PublicRoute>
            <Orientation />
          </PublicRoute>
        ),
      },
    ],
  },
  {
    path: "/student-space",
    element: (
      <PublicRoute>
        <StudentsSpaceSidebar />
      </PublicRoute>
    ),
  },
]);

export default router;
