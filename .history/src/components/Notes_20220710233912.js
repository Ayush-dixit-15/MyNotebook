import React, { useContext, useEffect, useRef, useState } from 'react'
import noteContext from "../context/notes/noteContext"
import Noteitem from './Noteitem';
import AddNote from './Addnote';
import { useNavigate } from 'react-router';

const Notes = (props) => {
    const context = useContext(noteContext);
    let navigate= useNavigate();
    const { notes, getNotes, editNote } = context;
    useEffect(() => {
        if(localStorage.getItem('token')){
            getNotes()
            // eslint-disable-next-line 
        }
        else{
             navigate("./login")
        }
       
    }, [])
    const updateNote = (currentNote) => {
        ref.current.click();
        setNote({ id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag:currentNote.tag})
    }
    const ref = useRef(null)
    const refClose = useRef(null)
    const [note, setNote] = useState({ id:"", etitle: "", edescription: "", etag: ""})

   

    const handleClick = (e)=>{
        console.log("Updating the note...", note);
        editNote(note.id, note.etitle, note.edescription, note.etag)
       refClose.current.click();
       props.showAlert("Updated successfully", "success");
    }

    const onChange = (e)=>{
        setNote({...note, [e.target.name]: e.target.value})
    }

    return (
        <>
            <AddNote showAlert={props.showAlert} />
        
    
            <div className="row my-3">
                <h2>You Notes</h2>
                <div className="container mx-2">
                {notes.length===0 && 'No notes to display'}
                </div>
                {notes.map((note) => {
                    return <Noteitem key={note._id} updateNote={updateNote} note={note} showAlert={props.showAlert}/>
                })}
            </div>
        </>
    )
}

export default Notes