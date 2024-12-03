import backgroundLg1 from "../assets/bg-video-lg.mp4";
import backgroundLg2 from "../assets/bg-video2-lg.mp4";
import backgroundLg3 from "../assets/bg-video3-lg.mp4";

import ReactPlayer from "react-player";
import "./Main.scss";
import React, { useContext } from "react";
import { GlobalContext } from "../context";
import { useNavigate } from "react-router-dom";

export type CustomStyles = {
  "--x": string;
  "--y": string;
} & React.CSSProperties;

const Main = () => {
  const {
    state: { activeBg },
    dispatch,
  } = useContext(GlobalContext);
  const navigate = useNavigate();
  const bgs = [backgroundLg1, backgroundLg2, backgroundLg3];
  const [x, setX] = React.useState(0);
  const [y, setY] = React.useState(0);
  const [x2, setX2] = React.useState(0);
  const [y2, setY2] = React.useState(0);
  const styles: CustomStyles = {
    "--x": `${x}px`,
    "--y": `${y}px`,
  };
  const styles2: CustomStyles = {
    "--x": `${x2}px`,
    "--y": `${y2}px`,
  };
  const mouseMove =
    (text: string = "text") =>
    (event: React.MouseEvent<HTMLButtonElement | HTMLElement, MouseEvent>) => {
      if (typeof window === "undefined") return;
      event.preventDefault();
      console.log(
        event.nativeEvent.offsetX,
        event.nativeEvent.offsetY,
        event.nativeEvent
      );
      if (text === "text") {
        setX2(event.nativeEvent.offsetX);
        setY2(event.nativeEvent.offsetY);
      } else if (text === "btn") {
        setX(event.nativeEvent.offsetX);
        setY(event.nativeEvent.offsetY);
      }
    };

  return (
    <main className="h-[50vh]">
      <div className="mask">
        {" "}
        {bgs.map(
          (bg, i) =>
            activeBg.id === i + 1 && (
              <ReactPlayer
                key={i}
                className="main-bg"
                playing
                muted
                onDuration={(duration) =>
                  dispatch({ type: "Active", payload: { duration, id: i + 1 } })
                }
                onProgress={({ playedSeconds, ...theRemaining }) => {
                  dispatch({
                    type: "Running",
                    payload: { timeLapsed: playedSeconds, id: i + 1 },
                  });
                  console.log({ theRemaining, playedSeconds });
                }}
                onEnded={() =>
                  dispatch({
                    type: "Next",
                    payload: { id: (i % 3) + 1, duration: 1, timeLapsed: 0 },
                  })
                }
                url={bg}
                volume={0}
              />
            )
        )}
      </div>
      <div className="relative z-10 px-4">
        <div className="text-end font-[900] text-[#0e264874] flex items-center justify-center sm:justify-end flex-wrap">
          <div className="w-max h-max flex relative self-end">
            <abbr
              className="no-underline text-[clamp(96px_,15vw,_150px)]  text-animation leading-none"
              title="IURR Parents Developers Association 2024"
              onMouseMove={mouseMove("btn")}
              style={styles}
            >
              PDA{" "}
            </abbr>
          </div>
          <div className="w-max h-max rotate-90 sm:-translate-x-1/4 translate-y-2/3">
            <span
              onMouseMove={mouseMove("text")}
              style={styles2}
              className="text-[clamp(150px_,15vw,_250px)] w-max h-max text-animation leading-none "
            >
              2024
            </span>
          </div>
        </div>
        <p className="text-center sm:text-end italic font-semibold text-white/30">
          The very first IURR parents developers meeting
        </p>
      </div>
      <div className="w-max h-max bg-white/30 px-6 py-4 backdrop-blur-sm rounded-md inset-0 m-auto z-20 absolute">
        <button
          style={styles}
          onMouseMove={mouseMove("btn")}
          className="btn-animation  w-max h-max text-[32px]"
          onClick={() => navigate("/accept-invitation")}
        >
          Accept
        </button>
      </div>
    </main>
  );
};

export default Main;
