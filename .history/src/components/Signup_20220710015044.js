import React from 'react'

const Signup = () => {
  return (
    <div className='container'>
    <form>
  <div className="form-group">
    <label htmlFor="name">Email address</label>
    <input type="text" className="form-control" id="name" aria-describedby="emailHelp"/>
   
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label htmlFor="password">Password</label>
    <input type="password" className="form-control" id="password"/>
  </div>
  <div className="form-group">
    <label htmlFor="cpassword">Confirm Password</label>
    <input type="password" className="form-control" id="cpassword"/>
  </div>

  <button type="submit" className="btn btn-primary">Submit</button>
</form>    
    </div>
  )
}

export default Signup
  