import RoomServiceIcon from "@mui/icons-material/RoomService";
import { Box } from "@mui/material";
import { pink } from "@mui/material/colors";

const Load = () => {
  return (
    <Box className="load-wrap">
      <RoomServiceIcon sx={{ color: pink[500] }} />
    </Box>
  );
};

export default Load;
