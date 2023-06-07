import React from "react";

const Notes = (props) => {
  function handleClick() {
    props.onDelete(props.id);
  }
  return (
    <div className="Notes">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>Delete</button>
    </div>
  );
};
export default Notes;
