import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

function CustomButton({ title, link, color, variant, className }) {
  const navigate = useNavigate();
  return (
    <Button
      variant={variant}
      color={color}
      onClick={() => navigate(link)}
      className={className}>
      {title}
    </Button>
  );
}

export default CustomButton;
