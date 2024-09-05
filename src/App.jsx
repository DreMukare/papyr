import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/common/Layout";
import Login from "./components/pages/Login";
import SignUp from "./components/pages/SignUp";
import LandingHome from "./components/pages/LandingHome";
import Dashboard from "./components/pages/Dashboard";
import ViewPost from "./components/pages/ViewPost";
import CreatePost from "./components/pages/CreatePost";
import Profile from "./components/pages/Profile";
import AllPosts from "./components/pages/AllPosts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        index: true,
        element: <LandingHome />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
      {
        path: "create",
        element: <CreatePost />,
      },
      {
        path: "profile/:userId",
        element: <Profile />,
      },
      {
        path: "post/:postId",
        element: <ViewPost />,
      },
      {
        path: "posts",
        element: <AllPosts />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
