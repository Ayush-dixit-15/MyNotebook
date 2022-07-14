import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = "http://localhost:5000"
  const notesInitial = []
  const [notes, setNotes] = useState(notesInitial)

  // Get all Notes
  const getNotes = async () => {
    // API Call 
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJiZDRjNTg1YmM2MWRjMjI2ZTdmMTM4In0sImlhdCI6MTY1NjU4NTc5MX0.SPjxmP6siyQSC6uRF1wVAiVwVUu2CdhuAP4C2-A34_k"
      }
    });
    const json = await response.json()
    console.log(json)
    setNotes(json)
  }
  // add an note

  const addNote = async (title, description, tag) => {
    // TODO: API Call
    // API Call 
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJiZDRjNTg1YmM2MWRjMjI2ZTdmMTM4In0sImlhdCI6MTY1NjU4NTc5MX0.SPjxmP6siyQSC6uRF1wVAiVwVUu2CdhuAP4C2-A34_k"
      },
      body: JSON.stringify({title, description, tag})
    });
     
   
    const note = await response.json();
    setNotes(notes.concat(note))
  }


  // Delete a Note
  const deleteNote = async (id) => {
    // TODO: API Call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJiZDRjNTg1YmM2MWRjMjI2ZTdmMTM4In0sImlhdCI6MTY1NjU4NTc5MX0.SPjxmP6siyQSC6uRF1wVAiVwVUu2CdhuAP4C2-A34_k"
      }
    });
    const json = response.json();
    console.log(json);
    console.log("Deleting the note with id" + id);
    const newNotes = notes.filter((note) => { return note._id !== id })
    setNotes(newNotes)
  }
  // Edit a Note
  const editNote = async (id, title, description, tag) => {
    // API Call 
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJiZDRjNTg1YmM2MWRjMjI2ZTdmMTM4In0sImlhdCI6MTY1NjU4NTc5MX0.SPjxmP6siyQSC6uRF1wVAiVwVUu2CdhuAP4C2-A34_k"
      },
      body: JSON.stringify({title, description, tag})
    });
    const json = response.json();
   console.log(json);
    // Logic to edit in client
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }

    }
  }

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  )

}
export default NoteState;