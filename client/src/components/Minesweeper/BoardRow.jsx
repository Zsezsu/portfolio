import Field from "./Field";

function BoardRow({ rows }) {
  return (
    <div className='board-row'>
      {rows.map((field) => (
        <Field key={field.id} field={field} />
      ))}
    </div>
  );
}

export default BoardRow;
