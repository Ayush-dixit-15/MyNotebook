import React from "react";
import NoteContext from "./noteContext";
import { useState } from "react";



const NoteState =(props)=>{
  const notesInitial= [
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
    return(
        <NoteContext.Provider value={{notes, setNotes}}>
            {props.children} 
        </NoteContext.Provider>
    )
}
export default NoteState
