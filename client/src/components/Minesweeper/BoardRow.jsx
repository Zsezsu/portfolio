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
          isEmpty={field.isEmpty}
          isGameOver={isGameOver}
          imgIndex={field.bombCount}
          id={field.id}
        />
      ))}
    </div>
  );
}

export default BoardRow;
