import { useState, useContext, useEffect } from "react";
import { ClickHandlers } from "./hooks/useClickHandler";
import BOMB_IMG_CLICKED from "./assets/minesweeper_bomb_clicked.png";
import BOMB_IMG_DEFAULT from "./assets/minesweeper_bomb_default.png";
import HIDDEN_FIELD from "./assets/minesweeper_unopened.png";
import FLAG_FIELD from "./assets/minesweeper_flag.png";
import EMPTY_FIELD from "./assets/minesweeper_0.png";
import ONE_FIELD from "./assets/minesweeper_1.png";
import TWO_FIELD from "./assets/minesweeper_2.png";
import THREE_FIELD from "./assets/minesweeper_3.png";
import FOUR_FIELD from "./assets/minesweeper_4.png";
import FIVE_FIELD from "./assets/minesweeper_5.png";
import SIX_FIELD from "./assets/minesweeper_6.png";
import SEVEN_FIELD from "./assets/minesweeper_7.png";
import EIGHT_FIELD from "./assets/minesweeper_8.png";
import MISSED_FLAGGED from "./assets/minesweeper_missed_flagged.png";

const FIELD_IMAGES = [
  EMPTY_FIELD,
  ONE_FIELD,
  TWO_FIELD,
  THREE_FIELD,
  FOUR_FIELD,
  FIVE_FIELD,
  SIX_FIELD,
  SEVEN_FIELD,
  EIGHT_FIELD,
];

function FieldDisplay({
  flagged,
  hidden,
  isMine,
  isGameOver,
  imgIndex,
  id,
  exploded,
}) {
  const { onClick, onRightClick } = useContext(ClickHandlers);

  const contentImg = isMine
    ? exploded
      ? BOMB_IMG_CLICKED
      : BOMB_IMG_DEFAULT
    : FIELD_IMAGES[imgIndex];

  const imgSrc = hidden ? (HIDDEN_FIELD) : contentImg;

  function handleClick() {
    if (isGameOver || flagged || !hidden) return;
    console.log(id);
    onClick(id, isMine);
  }

  function handleRightClick(e) {
    e.preventDefault();
    if (isGameOver) return;
    hidden && onRightClick(id, flagged);
  }

  return (
    <div
      className='field'
      id={id}
      onClick={handleClick}
      onContextMenu={handleRightClick}>
      <img src={flagged ? (isGameOver && !isMine ? MISSED_FLAGGED : FLAG_FIELD) : imgSrc} />
    </div>
  );
}

export default FieldDisplay;
