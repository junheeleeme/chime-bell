import { Box, AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import GitHubIcon from "@mui/icons-material/GitHub";

import { pink } from "@mui/material/colors";

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ background: pink[50] }}>
        <Toolbar
          variant="dense"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton
              title="Just ChimeBell"
              edge="start"
              aria-label="menu"
              sx={{ color: pink[400] }}
            >
              <NotificationsActiveIcon />
            </IconButton>
            <Typography variant="h6" sx={{ color: pink[400] }} component="div">
              차임벨
            </Typography>
          </Box>

          <IconButton
            title="GitHub Repository"
            href="https://github.com/juni-btc/chime-bell"
            target="_blank"
            size="small"
          >
            <GitHubIcon sx={{ color: "#000" }} />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
