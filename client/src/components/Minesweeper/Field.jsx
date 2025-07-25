import { useState, useContext, useEffect } from "react";
import { ClickHandler } from "./hooks/useClickHandler";
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

function FieldDisplay({ isFlagged, isHidden, isMine, isEmpty, isGameOver, imgIndex, id }) {
  const [displayedImg, setDisplayedImg] = useState(HIDDEN_FIELD);
  const [fieldImg, setFieldImg] = useState(isMine ? BOMB_IMG_DEFAULT : FIELD_IMAGES[imgIndex]);

  const onClick = useContext(ClickHandler);
  //const FIELD_IMG = isMine ? BOMB_IMG_DEFAULT : FIELD_IMAGES[imgIndex];

  function handleClick() {
    if (isGameOver || isFlagged || !isHidden) return;
    console.log(id);
    const imgToShow = isMine ? BOMB_IMG_CLICKED : fieldImg;
    setFieldImg(imgToShow)
    setDisplayedImg(fieldImg);
    onClick(id, isMine);
  }

  function handleRightClick(e) {
    e.preventDefault();
    if (isGameOver) return;
    isHidden && setDisplayedImg(FLAG_FIELD);
    //TODO: call onClick with isFlagged true to communicate the parent the state
    // need to modify the onclick, or create a new handler
  }

    useEffect(() => {
      isGameOver && !isFlagged && !isEmpty && setDisplayedImg(fieldImg);
      
    }, [isGameOver, isFlagged, isEmpty, fieldImg, isHidden]);

    useEffect(() => {
      !isHidden && setDisplayedImg(fieldImg)
    }, [isHidden, fieldImg])

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
