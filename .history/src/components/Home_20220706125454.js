
import Notes from './Notes';

const Home = () => {
  
    return (
        <div>
          <div className="container my-3">
           <h2>Add a Note</h2>
           <form className="my-3">
  <div className="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="form-group form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
</div> 
 <Notes/>        
        </div>
    )
}

export default Home