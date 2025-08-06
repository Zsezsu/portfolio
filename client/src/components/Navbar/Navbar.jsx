import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { NavLink } from "react-router-dom";

const navItems = [
  { label: "About me", path: "/" },
  { label: "My Games", path: "/games" },
  { label: "My projects", path: "/projects" },
  // Add more items as needed
];

function Navbar() {
  return (
    <AppBar
      position='sticky'
      elevation={0}
      color='transparent'
      sx={{
        backdropFilter: "blur(6px)",
        backgroundColor: "rgba(255, 255, 255, 0.6)",
        borderBottom: "1px solid rgba(0,0,0,0.1)",
      }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography
          variant='h6'
          component='div'
          sx={{ fontWeight: "bold", color: "text.primary" }}>
          Zsu Juhász
        </Typography>

        {/* TODO: align center the buttons if I want */}
        <Box
          sx={{
            display: "flex",
            gap: 3,
          }}>
          {navItems.map((item) => (
            <Button
              key={item.label}
              component={NavLink}
              to={item.path}
              {...(item.path === "/" ? { end: true } : {})}
              variant='text'
              sx={{
                color: "text.primary",
                fontWeight: "medium",
                position: "relative",
                "&.active": {
                  borderBottom: "2px solid",
                  borderColor: "secondary.main",
                  color: "secondary.main",
                  fontWeight: "bold",
                },
                "&:hover": {
                  backgroundColor: "transparent",
                },
              }}>
              {item.label}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
