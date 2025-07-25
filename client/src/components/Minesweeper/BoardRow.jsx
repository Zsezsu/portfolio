import Field from "./Field";

function BoardRow({ rows, isGameOver }) {
  return (
    <div className='board-row'>
      {rows.map((field) => (
        <Field key={field.id} field={field} hidden={field.hidden} isGameOver={isGameOver} />
      ))}
    </div>
  );
}

export default BoardRow;
