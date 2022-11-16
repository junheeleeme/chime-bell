import { Box, AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import { pink } from "@mui/material/colors";

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ background: pink[50] }}>
        <Toolbar variant="dense">
          <IconButton edge="start" aria-label="menu" sx={{ color: pink[400] }}>
            <NotificationsActiveIcon />
          </IconButton>
          <Typography variant="h6" sx={{ color: pink[400] }} component="div">
            차임벨
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
