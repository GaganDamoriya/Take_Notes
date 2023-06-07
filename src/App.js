import "./App.css";
import Notes from "./components/dashboard";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import Footer from "./components/footer";
import Inputnotes from "./components/inputnotes";
import { useState, useEffect } from "react";
import Popform from "./components/Popform";

const getLocalItems = () => {
  let list = localStorage.getItem("lists");
  if (list) {
    return JSON.parse(localStorage.getItem("lists"));
  } else return [];
};

const getdeadItems = () => {
  let deadlineNote = localStorage.getItem("deadlines");
  if (deadlineNote) {
    return JSON.parse(localStorage.getItem("deadlines"));
  } else return [];
};

function App() {
  const [notes, setNotes] = useState(getLocalItems);
  const [deadlinenote, setDeadlinenote] = useState(getdeadItems);
  const [deadbtn, setDeadbtn] = useState(false);
  function addNote(newNote) {
    setNotes((prevValue) => {
      return [...prevValue, newNote];
    });
  }

  function addDeadLine(newNotes) {
    setDeadlinenote((prevNote) => {
      return [...prevNote, newNotes];
    });
  }
  function setbutton() {
    setDeadbtn(true);
  }
  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }
  function deleteDeadLinenote(id) {
    setDeadlinenote((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }
  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(notes));
  }, [notes]);
  useEffect(() => {
    localStorage.setItem("deadlines", JSON.stringify(deadlinenote));
  }, [deadlinenote]);

  return (
    <div className="App">
      <Header />
      <div className="view-page">
        <div className="dashboard">
          <h2 className="heading_1">TASKS TO COMPELETE</h2>
          <Inputnotes onAdd={addNote} />
          {notes.map((notesItem, index) => {
            return (
              <Notes
                key={index}
                id={index}
                title={notesItem.title}
                content={notesItem.content}
                onDelete={deleteNote}
              />
            );
          })}
        </div>
        <div className="sidebar">
          <h2>DEADLINES</h2>
          <button className="addDeadline" onClick={setbutton}>
            Add Deadline
          </button>
          <Popform
            trigger={deadbtn}
            setTrigger={setDeadbtn}
            onSubmit={addDeadLine}
          />
          {deadlinenote.map((noteItem, index) => {
            return (
              <Sidebar
                key={index}
                id={index}
                deadLine={noteItem}
                onDelete={deleteDeadLinenote}
              />
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
