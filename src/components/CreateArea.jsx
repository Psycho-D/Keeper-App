import React, {useState} from "react";

function CreateArea(props) {

  const [note, setNote] = useState({
    title: "",
    content: ""
  })

  const handleChange = (e) => {
    e.preventDefault();
    const {name, value} = e.target;
    setNote(prevValue => ({...prevValue, [name]: value}));
  }

  return (
    <div>
      <form>
        <input onChange={handleChange} name="title" placeholder="Title" value={note.title}/>
        <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows="3" value={note.content}/>
        <button onClick={(e) => {
          e.preventDefault();
          props.handleSubmit(note);
          setNote({title: "", content: ""})
        }}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
