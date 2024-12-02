import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Footer from "../components/Footer";
import Invitation from "@/pages/Invitation";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [{ path: ":name", element: <Footer /> }],
  },
  {
    path : "accept-invitation",
    element : <Invitation />
  }
]);

export default router;
