import React, {useContext,useState} from 'react';
import contextValue from '../context/notes/NoteContext';

const AddNote = (props) => {
     const context = useContext(contextValue);
      const {addNote} = context;

      const [note, setNote] = useState({ title: "", description: "", tag: "" });

      const handleClick = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        // addNote(note);
        setNote({ title: "", description: "", tag: "" }); // Reset the form after adding
        props.showAlert("Added Successfully", "success");
      }
      const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value });
    };
  return (
    <div>
      <h1>Add a Note</h1>
      <div className="container my-3">
      <form className='my-3'>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Title</label>
    <input type="text" className="form-control" id="title" name="title" value={note.title} aria-describedby="emailHelp" onChange={onChange} minLength={5} required/>
  </div>
  <div className="mb-3">
    <label htmlFor="description" className="form-label">Description</label>
    <input type="text" className="form-control" id="description" name="description" value={note.description} onChange={onChange} minLength={5} required/>
  </div>
  <div className="mb-3">
    <label htmlFor="tag" className="form-label">Tag</label>
    <input type="text" className="form-control" id="tag" name="tag" value={note.tag} onChange={onChange} minLength={5} required/>
    </div>
  <button disabled={note.title.length<5 || note.description.length<5} type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
</form>
</div>
    </div>
  )
}

export default AddNote;
