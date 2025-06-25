import React, { useContext, useEffect, useRef, useState } from "react";
import contextValue from "../context/notes/NoteContext";
import Noteitem from "./Noteitem";
import AddNote from "./AddNote";
import { useNavigate } from "react-router-dom";

const Notes = (props) => {
  const context = useContext(contextValue);
  const { notes, getNote, editNote } = context;

const navigate = useNavigate();

  const [note, setNote] = useState({ _id: "", title: "", description: "", tag: "" });
  const closeRef = useRef(null);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      getNote(); // Fetch notes when component mounts
    } else {
     navigate("/login"); // Redirect to login if no token
    }
  }, []);

  const openUpdateModal = (currentNote) => {
    setNote(currentNote);
    const modal = new window.bootstrap.Modal(document.getElementById("exampleModal"));
    modal.show();
    
  };

  const handleUpdateClick = async () => {
    console.log("Updating note:", note);
    await editNote(note._id, note.title, note.description, note.tag);
    closeRef.current.click(); // Close modal after update
    getNote(); // Optional refresh
    props.showAlert("Updated successfully", "success");
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <>
      <AddNote showAlert={props.showAlert}/>

      {/* Modal */}
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Note</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                ref={closeRef}
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">Title</label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    name="title"
                    value={note.title}
                    onChange={onChange}
                    minLength={5} required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">Description</label>
                  <input
                    type="text"
                    className="form-control"
                    id="description"
                    name="description"
                    value={note.description}
                    onChange={onChange} minLength={5} required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="tag" className="form-label">Tag</label>
                  <input
                    type="text"
                    className="form-control"
                    id="tag"
                    name="tag"
                    value={note.tag}
                    onChange={onChange}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                ref={closeRef}
              >
                Close
              </button>
              <button disabled={note.title.length<5 || note.description.length<5}
                type="button"
                className="btn btn-primary"
                onClick={handleUpdateClick}
              >
                Update Note
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Display Notes */}
      <div className="row my-3">
        <h2>Your Notes</h2>
        <div className="container mx-2">
        {notes.length === 0 && 'No notes to display'}
        </div>
        {notes.map((note) => (
          <Noteitem key={note._id} note={note} updateNote={openUpdateModal} showAlert={props.showAlert}/>
        ))}
      </div>
    </>
  );
};

export default Notes;
