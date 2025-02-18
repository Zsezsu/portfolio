import { useState, useContext } from "react";
import { ClickHandler } from "./Minesweeper";
import hiddenField from "./assets/minesweeper_unopened.png";

function Field({ field }) {
  const [fieldImage, setFieldImage] = useState(field.img);
  const onClick = useContext(ClickHandler);

  return (
    <div className="field" id={field.id} onClick={onClick}>
      <img src={fieldImage} />
    </div>
  );
}

export default Field;
