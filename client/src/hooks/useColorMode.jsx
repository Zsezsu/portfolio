import { useContext } from "react";
import { ColorModeContext } from "../context/ColorModeContext";

export default function useColorMode() {
  return useContext(ColorModeContext);
}
