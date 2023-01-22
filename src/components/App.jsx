import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNote] = useState([]);

  const addNote = (note) => {
    setNote(prevNote => ([...prevNote, note]));
  }

  const deleteNote = (id) =>{
    setNote(() => {
      return notes.filter((note, index) => {
        return index !== id
      })
    })
  }

  console.log(notes.length);

  return (
    <div>
      <Header />
      <CreateArea handleSubmit={addNote} />
      {notes.map((note, index) => (
        <Note key={index} title={note.title} content={note.content} handleDelete={deleteNote} id={index} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
