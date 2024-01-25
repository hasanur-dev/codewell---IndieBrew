import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);
export default function App() {
  return <RouterProvider router={router} />;
}
