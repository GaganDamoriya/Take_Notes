import React from "react";

const Sidebar = (props) => {
  function handleChange() {
    props.onDelete(props.id);
  }
  return (
    <div className="sidebar-notes">
      <button className="Done" onClick={handleChange}>
        ✓
      </button>
      <h3>{props.deadLine} </h3>
    </div>
  );
};
export default Sidebar;
