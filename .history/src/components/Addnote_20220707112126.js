import React, {useContext} from 'react'
import noteContext from "../context/notes/noteContext"

function Addnote() {
    const context = useContext(noteContext);
    const {addNote} = context;
    const handleClick = () =>{

    }
  return (
    <div className="container my-3">
    <h2>Add a Note</h2>
    <form className="my-3">
    <div className="form-group">
<label htmlFor="title" className="form-label">Title</label>
<input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" onChange={onChnage}/>
</div>
<div className="form-group">
<label htmlFor="exampleInputPassword1">Password</label>
<input type="password" className="form-control" id="exampleInputPassword1" onChange={onChange}/>
</div>
<div className="form-group form-check">
<input type="checkbox" className="form-check-input" id="exampleCheck1"/>
<label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
</div>
<button type="submit" className="btn btn-primary" onClick={handleClick}>Submit</button>
</form>
</div> 

  )
}

export default Addnote