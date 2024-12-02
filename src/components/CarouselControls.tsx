import React, { useContext, useEffect, useRef } from "react";
import { GlobalContext } from "../context";
import "./CarouselControls.scss";

type CarouselControlsProps = {
  position?: "top" | "right" | "bottom" | "left";
};

const CarouselControls = ({ position }: CarouselControlsProps) => {
  const {
    state: {
      activeBg: { id, duration },
    },
  } = useContext(GlobalContext);
  const canvasRef1 = useRef<HTMLCanvasElement>(null),
    canvasRef2 = useRef<HTMLCanvasElement>(null),
    canvasRef3 = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let animationFrameId: number;
    let ctx: CanvasRenderingContext2D | null;
    [canvasRef1, canvasRef2, canvasRef3].forEach((ref) => {
      if (!ref.current) return;
      console.log("started");
      ctx = ref.current.getContext("2d");
    });
    let prevTimeLapsed: number | null = null;
    const animation = (timeLapsed: number = 0) => {
      if (!prevTimeLapsed) prevTimeLapsed = timeLapsed;
      if (!ctx) return;
      const timeDelta = (timeLapsed - prevTimeLapsed) / (duration * 1000);
      ctx.clearRect(0, 0, 40, 40);
      ctx.beginPath();
      ctx.strokeStyle = "#031756";
      ctx.arc(20, 20, 18, 0, Math.PI * 2 * timeDelta);
      ctx.stroke();

      if (timeDelta <= 1) {
        animationFrameId = requestAnimationFrame(animation);
      } else {
        cancelAnimationFrame(animationFrameId);
        console.log("wrong");
      }
    };

    animation();

    return () => cancelAnimationFrame(animationFrameId);
  }, [duration, id]);

  return (
    <div
      className={`absolute z-10 left-0 right-0 mx-auto w-max text-white gap-2 flex carousel-controls ${
        position ? `${position}-0` : `top-4`
      }`}
    >
      {[canvasRef1, canvasRef2, canvasRef3].map(
        (ref: React.Ref<HTMLCanvasElement>, index: number) => (
          <button
            className="rounded-full w-10 h-10 bg-white/20 backdrop-blur-md"
            key={index + 1}
            data-id={`${index + 1}`}
          >
            {id === index + 1 && (
              <canvas
                data-id={`${index + 1}`}
                width={"40px"}
                height={"40px"}
                ref={ref}
              ></canvas>
            )}
          </button>
        )
      )}
    </div>
  );
};

export default CarouselControls;
