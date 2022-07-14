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
                
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>


<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
    )
}

export default Notes