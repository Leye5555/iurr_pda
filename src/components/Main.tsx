import backgroundLg1 from "../assets/bg-video-lg.mp4";
import backgroundLg2 from "../assets/bg-video2-lg.mp4";
import backgroundLg3 from "../assets/bg-video3-lg.mp4";

import ReactPlayer from "react-player";
import "./Main.scss";
import React, { useContext } from "react";
import { GlobalContext } from "../context";

type CustomStyles = {
  "--x": string;
  "--y": string;
} & React.CSSProperties;

const Main = () => {
  const {
    state: { activeBg },
    dispatch,
  } = useContext(GlobalContext);

  const bgs = [backgroundLg1, backgroundLg2, backgroundLg3];
  const [x, setX] = React.useState(0);
  const [y, setY] = React.useState(0);
  const styles: CustomStyles = {
    "--x": `${x}px`,
    "--y": `${y}px`,
  };

  const mouseMove = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (typeof window === "undefined") return;
    event.preventDefault();
    setX(event.nativeEvent.offsetX);
    setY(event.nativeEvent.offsetY);
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

      <div className="w-max h-max bg-white/30 px-6 py-4 backdrop-blur-sm rounded-md inset-0 m-auto z-20 absolute">
        <button
          style={styles}
          onMouseMove={mouseMove}
          className="btn-animation  w-max h-max text-[32px]"
        >
          Accept
        </button>
      </div>
    </main>
  );
};

export default Main;
