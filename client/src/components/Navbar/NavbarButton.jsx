import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";

function NavbarButton({ item }) {
  return (
    <Button
      key={item.label}
      component={NavLink}
      to={item.path}
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
  );
}

export default NavbarButton;
