import { useState, useContext } from "react";
import { ClickHandler } from "./Minesweeper";
import hiddenField from "./assets/minesweeper_unopened.png";

function Field({ field }) {
  const [fieldImage, setFieldImage] = useState(hiddenField);
  const onClick = useContext(ClickHandler);

  return (
    <div className="field" id={field.id} onClick={() => setFieldImage(field.img)}>
      <img src={fieldImage} />
    </div>
  );
}

export default Field;
