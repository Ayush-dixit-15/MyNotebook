import React ,{useContext, useEffect} from 'react'
import noteContext from "../context/notes/noteContext"
import Addnote from './Addnote';
import Noteitem from './Noteitem';

const Notes = () => {
  const context = useContext(noteContext);
  const {notes, getNotes} = context;
  useEffect(() => {
    //eslient-disable-next-line
      getNotes()
  }, [])
  return (
      <>
      <AddNote/>
      <div className="row my-3">
          <h2>You Notes</h2> 
          {notes.map((note)=>{
              return <Noteitem key={note._id} note={note}/>  
          })}
          </div>
          </>
  )
}

export default Notes