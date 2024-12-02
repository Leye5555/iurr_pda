import { useParams } from "react-router-dom";
import "./HeroText.scss";
import React from "react";

const HeroText = () => {
  const { name } = useParams();
  const [showStokes] = React.useState(true);
  const formattedName = name?.replace(/[_\-!/()+-^%#&~]/g, " ");
  console.log(formattedName);
  //   formattedName = formattedName?.replace(/.\s+/g, "")

  return (
    <div className="">
      <h1 className="hero-text capitalize text-[200px] z-10 absolute bottom-0 px-4 sm:px-10  text-ellipsis w-full whitespace-nowrap line-clamp-2 h-max">
        <span className="relative w-max h-max">
          <span className="leading-none">
            {" "}
            {formattedName ? formattedName.split(" ")[0] : ""}
          </span>
          <svg
            width="248"
            height="53"
            viewBox="0 0 248 53"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`absolute left-0 ${
              showStokes ? "show-stroke" : "hidden"
            }`}
          >
            <path
              d="M242.391 5.00106C242.198 16.8472 226.094 25.4052 211.314 32.7467C203.941 36.4092 189.842 37.8615 180.11 38.2823C160.171 39.1444 140.205 39.9519 120.672 36.1298C103.737 32.816 82.1947 25.7081 82.3768 14.5455C82.4308 11.2387 91.8098 11.4142 96.2689 11.4869C99.0948 11.5331 100.941 12.691 103.597 12.7892C108.559 12.9726 113.573 12.9519 118.538 13.033C128.431 13.1944 142.198 12.5387 148.969 17.3732C152.187 19.6707 148.734 25.5925 146.718 27.6848C141.204 33.4098 127.602 38.2026 117.227 40.8043C101.267 44.8069 87.5173 47.4156 69.7181 47.1252C52.7157 46.8478 36.4716 38.5825 24.7511 32.7579C21.3556 31.0705 17.819 29.281 13.8038 28.0129C12.0038 27.4444 11.1456 26.1814 9.43366 25.5763C7.43738 24.8706 5.98829 20.2974 5.13321 18.87"
              stroke="#0d3a78"
              strokeWidth="15"
              strokeLinecap="round"
            />
          </svg>
        </span>

        <br />
        <span className="leading-none">
          {" "}
          {formattedName ? formattedName.split(" ")[1] : "Everyone"}
        </span>
      </h1>
    </div>
  );
};

export default HeroText;
