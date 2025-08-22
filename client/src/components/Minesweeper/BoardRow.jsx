import Field from "./Field";

function BoardRow({ rows, isGameOver }) {
  return (
    <div className='board-row'>
      {rows.map((field) => (
        <Field
          key={field.id}
          flagged={field.flagged}
          hidden={field.hidden}
          isMine={field.isMine}
          isGameOver={isGameOver}
          imgIndex={field.bombCount}
          id={field.id}
          exploded={field.exploded}
        />
      ))}
    </div>
  );
}

export default BoardRow;
