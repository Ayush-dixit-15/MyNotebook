import React from 'react'

const Login = () => {
    const handleSubmit = async (e) =>{
       e.preventDefault();
       const response = await fetch(`localhost:5000/api/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          
        }
      });
      const json = await response.json()
      console.log(json);
    }
  return (
    <div>
        <form>
  <div className="form-group">
    <label for="email">Email address</label>
    <input type="email" className="form-control" name="email" id="email" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label for="password">Password</label>
    <input type="password" className="form-control" id="password" name="password" placeholder="Password"/>
  </div>

  <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
</form>
    </div>
  )
}

export default Login