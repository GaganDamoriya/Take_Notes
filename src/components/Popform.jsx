import React from "react";
import { useState } from "react";

const Popform = (props) => {
  const [impnote, setImpnote] = useState();

  function handleChange(event) {
    const newnote = event.target.value;
    setImpnote(newnote);
  }

  function submitNote() {
    props.onSubmit(impnote);
    setImpnote("");
  }
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <h1>Add DeadLine</h1>
        <input
          type="text"
          placeholder="Add the deadLine"
          onChange={handleChange}
          value={impnote}
        />
        <button className="close_btn" onClick={() => props.setTrigger(false)}>
          X
        </button>

        <button
          className="pop-submit-button"
          onClick={() => {
            props.setTrigger(false);
            {
              submitNote();
            }
          }}
        >
          Submit
        </button>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
};
export default Popform;
