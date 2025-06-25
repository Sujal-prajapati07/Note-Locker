import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  // Rename state to 'notes' (plural)
  const host="http://localhost:5000"; //  base URL for API calls
  const notesInitial = [];

  const [notes, setNotes] = useState(notesInitial);

  //Get all notes
   const getNote =async () => {
    //API call to add note to server can be added here
       const response=await fetch(`${host}/api/notes/fetchallnotes`,{
      method:'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth-token':localStorage.getItem('token') // Use token from localStorage
      },
    });

    const json = await response.json();
    console.log(json);
    setNotes(json); // Update state with fetched notes
  }


  // Add a note
  const addNote =async (title, description, tag) => {
    //API call to add note to server can be added here
       const response=await fetch(`${host}/api/notes/addnote`,{
      method:'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token':localStorage.getItem('token') // Use token from localStorage
      },
      body:JSON.stringify({title, description, tag})
    });

      const savedNote = await response.json();
      setNotes(prevNotes => prevNotes.concat(savedNote));
  };

  const deleteNote =async (id) => {
    //API call to delete note from server can be added here

    const response=await fetch(`${host}/api/notes/deletenote/${id}`,{
      method:'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'auth-token':localStorage.getItem('token') // Use token from localStorage
      },
    });
    const json= response.json();
    console.log(json);

    console.log("Deleting note with id:", id);
    const newNotes= notes.filter((note) =>{return note._id !== id});
    setNotes(newNotes); // Update state with filtered notes
    console.log("Note deleted successfully");
  };

  const editNote = async (id, title, description, tag) => {
  const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'auth-token': localStorage.getItem('token') // Use token from localStorage
    },
    body: JSON.stringify({ title, description, tag })
  });

  const json = await response.json();
  console.log("Update response:", json);

  const updatedNotes = notes.map(note => {
    if (note._id === id) {
      return { ...note, title, description, tag };
    }
    return note;
  });

  setNotes(updatedNotes);
};


  return (
    <NoteContext.Provider value={{ notes, setNotes, addNote, deleteNote, editNote, getNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
