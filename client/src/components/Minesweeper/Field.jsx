import { useState, useContext, useEffect } from "react";
import { ClickHandler } from "./hooks/useClickHandler";

function Field({ field, isGameOver }) {
  const [hidden, setHidden] = useState(field.hidden);
  const [flagged, setFlagged] = useState(field.flagged);
  const [displayedImg, setDisplayedImg] = useState(field.hiddenFieldImg);

  const onClick = useContext(ClickHandler);

  function handleClick(){
    if (!isGameOver){
      field.img = field.isMine ? field.clickedBombImg : field.img;
      setDisplayedImg(field.img)
      onClick(field, field.isMine);
      setHidden(false);
    }
    
  }

  function handleRightClick(e){
    e.preventDefault();
    if (!isGameOver){
      hidden && setFlagged(!flagged);
    }
  }

  useEffect(() => {
    isGameOver && setDisplayedImg(field.img);
  }, [isGameOver, field.img]);

  return (
    <div className="field" id={field.id} onClick={handleClick} onContextMenu={handleRightClick}>
      <img src={flagged ? field.flaggedFieldImg : displayedImg} />
    </div>
  );
}

export default Field;
