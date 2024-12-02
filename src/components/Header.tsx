import { Cross as Hamburger } from "hamburger-react";
import logo from "../assets/logo.svg";
import CarouselControls from "./CarouselControls";

const Header = () => {
  return (
    <header className="w-full h-20 flex items-center justify-between px-4 md:px-10 z-10 relative">
      <div className="w-max p-2 bg-white/30 backdrop-blur-[50px] rounded-lg shadow">
        <img
          src={logo}
          width={100}
          className="w-[80px] md:w-[100px]"
          alt="iurr Parents developers association"
        />
      </div>
      <CarouselControls />
      <nav>
        <Hamburger color="white" />
      </nav>
    </header>
  );
};

export default Header;
