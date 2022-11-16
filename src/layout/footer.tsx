import { Box, Typography, Link } from "@mui/material";
import Copyright from "../components/copyright";

const Footer = () => {
  const date = new Date();

  return (
    <Box
      component="footer"
      sx={{
        position: "fixed",
        bottom: "0",
        left: "0",
        width: "100%",
        textAlign: "right",
      }}
    >
      <Typography variant="h3" sx={{ fontSize: "15px", color: "#474E68" }}>
        <Link
          href="https://juni-official.tistory.com/"
          underline="none"
          target="_blank"
          sx={{ color: "#393E46" }}
        >
          {date.getFullYear()}. 꾸생의 DevLog All rights reserved.
        </Link>
        <Copyright />
      </Typography>
    </Box>
  );
};

export default Footer;
