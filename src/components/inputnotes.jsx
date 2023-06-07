import React from "react";
import { useState } from "react";

const Inputnotes = (props) => {
  const [notes, setNotes] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNotes((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }
  function submitNote(event) {
    props.onAdd(notes);
    setNotes({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  return (
    <form>
      <input
        name="title"
        type="text"
        placeholder="This is title"
        onChange={handleChange}
        value={notes.title}
      />
      <textarea
        name="content"
        placeholder="Take a note"
        cols="30"
        onChange={handleChange}
        value={notes.content}
      ></textarea>
      <button onClick={submitNote}>Add</button>
    </form>
  );
};
export default Inputnotes;
