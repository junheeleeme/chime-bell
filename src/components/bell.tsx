import { useState, useRef, useEffect } from "react";
import { Button } from "@mui/material";
import Lottie, { LottieProps } from "react-lottie-player";
import bell from "../assets/lottie/bell-loop.json";

const sound = new Audio("/sound/bell.mp3");

// Bell Size
const bellWH = "300px";

// Lottie Option
const defaultOptions: LottieProps = {
  loop: false,
  animationData: bell,
  style: {
    width: bellWH,
    height: bellWH,
    margin: "0",
  },
};

const Bell = () => {
  const bellRef = useRef<HTMLDivElement>(null);
  const [toggle, setToggle] = useState(false);
  const [goto, setGoto] = useState(0);

  const clickToggle = () => {
    if (toggle) {
      playSound();
      setToggle((prev) => !prev);
    }
  };

  const playSound = () => {
    sound.currentTime = 0;
    sound.pause();
    sound.play();
  };

  useEffect(() => {
    if (!toggle) {
      setGoto(0);
      setToggle(true);
    } else {
    }
  }, [toggle]);

  return (
    <>
      <Button
        onClick={clickToggle}
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: bellWH,
          height: bellWH,
          borderRadius: "50%",
        }}
      >
        <Lottie ref={bellRef} {...defaultOptions} play={toggle} goTo={goto} />
      </Button>
    </>
  );
};

export default Bell;
