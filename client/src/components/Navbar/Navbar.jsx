import {
  AppBar,
  Toolbar,
  Typography,
  Box,
} from "@mui/material";
import NavbarButton from "./NavBarButton";

const navItems = [
  { label: "About me", path: "/" },
  { label: "My Games", path: "/games" },
  { label: "My projects", path: "/projects" },
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

        <Box
          sx={{
            display: "flex",
            gap: 3,
          }}>
          {navItems.map((item, index) => (
            <NavbarButton key={index} item={item}/>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
