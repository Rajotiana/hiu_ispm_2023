import { createBrowserRouter } from "react-router-dom";
import PublicRoute from "../guards/PublicRoute";
import PrivateRoute from "../guards/PrivateRoute";

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Main from "../layout/Main";
import Home from "../pages/Home";
import StudentsSpaceSidebar from "../layout/StudentSpaceSidebar";
import Orientation from "../pages/Orientation";
import User from "../pages/student/User";
import Admin from "../pages/admin";

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
        path: "/orientation",
        element: (
          <PublicRoute>
            <Orientation />
          </PublicRoute>
        ),
      },
      {
        path: "/admin",
        element: (
          <PublicRoute>
            <Admin />
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
    children: [
      {
        path: "course",
        element: (
          <PublicRoute>
            <User />
          </PublicRoute>
        ),
      },
    ],
  },
]);

export default router;
