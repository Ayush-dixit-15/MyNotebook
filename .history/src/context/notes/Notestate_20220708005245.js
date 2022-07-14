import React from "react";
import NoteContext from "./noteContext";
import { useState } from "react";



const NoteState =(props)=>{
  const host = "https://localhost:5000"
  const notesInitial= []
    const [notes, setNotes] = useState(notesInitial)

         //Get all notes
   const getNotes = async () =>{
    //Api calls
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
     method: 'GET',
     headers: {
       'Content-Type': 'application/json',     
       "auth-token" :"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJiZDRjNTg1YmM2MWRjMjI2ZTdmMTM4In0sImlhdCI6MTY1NjU4NTc5MX0.SPjxmP6siyQSC6uRF1wVAiVwVUu2CdhuAP4C2-A34_k"
   
     },
   });
   const json = await response.json()
   console.log(json)
   setNotes(json)
  }
     
    //Add a note
   const addNote = async (title, description, tag) => {
     //Api calls
     const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',     
        "auth-token" :"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJiZDRjNTg1YmM2MWRjMjI2ZTdmMTM4In0sImlhdCI6MTY1NjU4NTc5MX0.SPjxmP6siyQSC6uRF1wVAiVwVUu2CdhuAP4C2-A34_k"
    
      },
    
      body: JSON.stringify({title, description, tag})
    });
    console.log("adding the new note ");
    const note =  {
      "_id": "62c12d8473a9ad87da31ca8e",
      "user": "62bd4c585bc61dc226e7f138",
      "title": title ,
      "description": description,
      "tag": tag,
      "date": "2022-07-03T05:47:48.213Z",
      "__v": 0
    };
          setNotes(notes.concat(note))
   }
    //Delete a node
    const deleteNote = (id) =>{ 
      console.log("deleting the note with id" + id)
      const newNotes= notes.filter((note)=>{return note._id!==id})
      setNotes(newNotes)
    }


    //edit a note
    const editNote = async (id, title, description, tag) =>{
      //Api calls
      const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',     
          "auth-token" :"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJiZDRjNTg1YmM2MWRjMjI2ZTdmMTM4In0sImlhdCI6MTY1NjU4NTc5MX0.SPjxmP6siyQSC6uRF1wVAiVwVUu2CdhuAP4C2-A34_k"
      
        },
      
        body: JSON.stringify({title, description, tag})
      });
   
    
      
      for (let index = 0; index < notes.length; index++) {
        const element = notes[index];
        if (element._id === id){
          element.title = title;
          element.description = description;
          element.tag = tag;
        }
      }
      
    }

    return(
        <NoteContext.Provider value={{notes, addNote, deleteNote, editNote, getNotes}}>
            {props.children} 
        </NoteContext.Provider>
    )
}
export default NoteState
