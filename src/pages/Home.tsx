import Header from "@/components/Header";
import Main from "../components/Main";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-screen h-screen relative">
      <Header />
      <Main />
      <Outlet />
    </div>
  );
};

export default Home;
