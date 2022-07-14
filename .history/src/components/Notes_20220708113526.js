import React ,{useContext, useEffect} from 'react'
import noteContext from "../context/notes/noteContext"
import Addnote from './Addnote';
import Noteitem from './Noteitem';

const Notes = () => {
    const context = useContext(noteContext);
  const {notes, getNotes} = context;
  useEffect(() => {
    getNotes()
    // eslint-disable-next-line
  }, [])
  const updateNote = (note) =>{
      
  }
  
  return (
  <>
    
    <Addnote/>
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  Launch demo modal
</button>
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
    <div className="row my-3">
    <h2>Your Notes</h2>
    {notes.map((note)=>{
     return <Noteitem key={note._id} note={note} updateNote={updateNote}/>
    })}
    </div>
    </>
  )
}

export default Notes
 