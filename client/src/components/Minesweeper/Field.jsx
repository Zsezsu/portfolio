import { useState, useContext } from "react";
import { ClickHandler } from "./Minesweeper";
import hiddenField from "./assets/32px-Minesweeper_unopened_square.svg.png";

function Field({ field }) {
  const [fieldImage, setFieldImage] = useState(hiddenField);
  const onClick = useContext(ClickHandler);

  return (
    <div id={field.id} onClick={onClick}>
      <img src={fieldImage} />
    </div>
  );
}

export default Field;
