import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Footer from "../components/Footer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [{ path: ":name", element: <Footer /> }],
  },
]);

export default router;
