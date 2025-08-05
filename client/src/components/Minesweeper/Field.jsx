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
  isEmpty,
  isGameOver,
  imgIndex,
  id,
}) {
  const [displayedImg, setDisplayedImg] = useState(
    flagged ? FLAG_FIELD : HIDDEN_FIELD
  );
  const [fieldImg, setFieldImg] = useState(
    isMine ? BOMB_IMG_DEFAULT : FIELD_IMAGES[imgIndex]
  );

  const { onClick, onRightClick } = useContext(ClickHandlers);

  function handleClick() {
    if (isGameOver || flagged || !hidden) return;
    console.log(id);
    const imgToShow = isMine ? BOMB_IMG_CLICKED : fieldImg;
    setFieldImg(imgToShow);
    setDisplayedImg(fieldImg);
    onClick(id, isMine);
  }

  function handleRightClick(e) {
    e.preventDefault();
    if (isGameOver) return;
    hidden && onRightClick(id, flagged);

  }

  useEffect(() => {
    isGameOver && !flagged && !isEmpty && !hidden && setDisplayedImg(fieldImg);
  }, [isGameOver, flagged, isEmpty, fieldImg, hidden]);

  useEffect(() => {
    !hidden && setDisplayedImg(fieldImg);
    flagged && setDisplayedImg(FLAG_FIELD);
    // TODO: figure out logic for unflagging
  }, [hidden, fieldImg, flagged]);


  return (
    <div
      className='field'
      id={id}
      onClick={handleClick}
      onContextMenu={handleRightClick}>
      <img src={displayedImg} />
    </div>
  );
}

export default FieldDisplay;
