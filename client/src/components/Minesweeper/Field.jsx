import { useState, useContext, useEffect } from "react";
import { ClickHandler } from "./hooks/useClickHandler";

function Field({ field, hidden, isGameOver }) {
  console.log("rerendering field:" + field.id)
  const [flagged, setFlagged] = useState(field.flagged);
  const [displayedImg, setDisplayedImg] = useState(field.hiddenFieldImg);
  const [wasClicked, setWasClicked] = useState(false);

  const onClick = useContext(ClickHandler);

  function handleClick(){
    console.log(field)
    if (isGameOver || flagged || !hidden) return;
    const imgToShow = field.isMine ? field.clickedBombImg : field.img;
    setDisplayedImg(imgToShow);
    onClick(field.id, field.isMine);
    setWasClicked(true);
  }

  function handleRightClick(e){
    e.preventDefault();
    if (isGameOver) return;
    hidden && setFlagged(!flagged);
  }

  useEffect(() => {
    isGameOver && !field.isEmpty && !wasClicked && setDisplayedImg(field.img);
  }, [isGameOver, field.img, field.isEmpty, wasClicked]);

  return (
    <div className="field" id={field.id} onClick={handleClick} onContextMenu={handleRightClick}>
      <img src={flagged ? field.flaggedFieldImg : displayedImg} />
    </div>
  );
}

export default Field;
