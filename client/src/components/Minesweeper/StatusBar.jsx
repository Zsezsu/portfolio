import { Box, IconButton } from "@mui/material";
import styles from "./Minesweeper.module.css";

const faceByState = {
  ready: "🙂",
  running: "🙂",
  won: "😎",
  lost: "😵",
};

function SevenSeg({ value }) {
  const v = String(value).padStart(3, "0").slice(-3);
  return (
    <Box className={styles.sevenSeg}>{v}</Box>
  );
}

export default function StatusBar({ minesLeft, elapsed, gameState, onRestart }) {
  const face = faceByState[gameState] ?? "🙂";

  return (
    <Box className={styles.statusBar}>
      <SevenSeg value={minesLeft} />
      <IconButton
        className={styles.smiley}
        onClick={onRestart}
        disableRipple
        aria-label="Restart game"
      >
        {face}
      </IconButton>
      <SevenSeg value={elapsed} />
    </Box>
  );
}
