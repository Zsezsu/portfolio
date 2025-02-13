import { useState, useContext } from "react";
import { ClickHandler } from "./Minesweeper";

function Field({ field }) {
    const [fieldImage, setFieldImage] = useState(field.img);
    const onClick = useContext(ClickHandler);

    console.log(onClick)

  return (
    <div id={field.id} onClick={onClick}>
      <img src={field.img} />
    </div>
  );
}

export default Field;
