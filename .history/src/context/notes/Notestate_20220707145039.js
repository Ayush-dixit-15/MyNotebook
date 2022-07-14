import React from "react";
import NoteContext from "./noteContext";
import { useState } from "react";



const NoteState =(props)=>{
  const host = "https://localhost:5000"
  const notesInitial= [
    {
      "_id": "62c12d8473a9ad87da31ca8e",
      "user": "62bd4c585bc61dc226e7f138",
      "title": "My title2",
      "description": "Training by 22 july",
      "tag": "personsal",
      "date": "2022-07-03T05:47:48.213Z",
      "__v": 0
    },
    {
      "_id": "62c12d8473a9ad87da31ca8e",
      "user": "62bd4c585bc61dc226e7f138",
      "title": "My title2",
      "description": "Training by 22 july",
      "tag": "personsal",
      "date": "2022-07-03T05:47:48.213Z",
      "__v": 0
    },
    {
      "_id": "62c12d8473a9ad87da31ca8e",
      "user": "62bd4c585bc61dc226e7f138",
      "title": "My title2",
      "description": "Training by 22 july",
      "tag": "personsal",
      "date": "2022-07-03T05:47:48.213Z",
      "__v": 0
    },
    {
      "_id": "62c12d8473a9ad87da31ca8e",
      "user": "62bd4c585bc61dc226e7f138",
      "title": "My title2",
      "description": "Training by 22 july",
      "tag": "personsal",
      "date": "2022-07-03T05:47:48.213Z",
      "__v": 0
    },
    {
      "_id": "62c12d8473a9ad87da31ca8e",
      "user": "62bd4c585bc61dc226e7f138",
      "title": "My title2",
      "description": "Training by 22 july",
      "tag": "personsal",
      "date": "2022-07-03T05:47:48.213Z",
      "__v": 0
    }
  ]
    const [notes, setNotes] = useState(notesInitial)
    //Add a note
   const addNote = (title, description, tag) => {
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
      
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
  
    },
  
    body: JSON.stringify(data)
  });
  return response.json(); 
}


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
        <NoteContext.Provider value={{notes, addNote, deleteNote, editNote}}>
            {props.children} 
        </NoteContext.Provider>
    )
}
export default NoteState
