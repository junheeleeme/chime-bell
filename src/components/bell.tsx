import { useEffect, useState, useRef } from "react";
import { Box } from "@mui/material";
import { useLottie, Lottie } from "react-lottie-hook";
import bell from "../assets/bell-loop.json";

const Bell = () => {
  const [lottieRef, { isPaused, isStopped }, controls] = useLottie({
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
      progressiveLoad: false,
    },
    bell,
  });
  const [toggle, setToggle] = useState(false);

  useEffect(() => {}, []);
  const clickToggle = () => {
    setToggle((prev) => !prev);
  };

  return (
    <>
      <Box sx={{ width: 300, cursor: "pointer" }} onClick={clickToggle}>
        <Lottie lottieRef={lottieRef} width={300} />
      </Box>
    </>
  );
};
export default Bell;
