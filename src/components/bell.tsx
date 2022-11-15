import { useState, useRef, useCallback, useEffect } from "react";
import { Box, Button } from "@mui/material";
import Lottie from "react-lottie-player";
import bell from "../assets/lottie/bell-loop.json";

const Bell = () => {
  const bellRef = useRef<HTMLDivElement>(null);
  const [toggle, setToggle] = useState(false);
  const [goto, setGoto] = useState(0);

  const clickToggle = useCallback(() => {
    setToggle((prev) => !prev);
  }, []);

  useEffect(() => {
    if (bellRef.current) {
      console.log(bellRef.current);
    }
  }, []);

  useEffect(() => {
    if (!toggle) setGoto(0);
  }, [toggle]);

  return (
    <>
      <Button
        onClick={clickToggle}
        sx={{
          position: "absolute",
          top: "calc(50% - 75px)",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "200px",
          height: "200px",
          borderRadius: "50%",
        }}
      >
        <Lottie
          ref={bellRef}
          animationData={bell}
          play={toggle}
          goTo={goto}
          style={{
            width: "200px",
            height: "200px",
            margin: "0",
          }}
        />
      </Button>
    </>
  );
};

export default Bell;
