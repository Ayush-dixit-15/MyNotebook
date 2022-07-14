import React from 'react'

const Login = () => {
    const handleSubmit = async (e) =>{
       e.preventDefault();
       const response = await fetch(`localhost:5000/api/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          
        },
        body: JSON.stringify({title, description, tag})
      });
      const json = await response.json()
      console.log(json);
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
  <div className="form-group">
    <label htmlFor="email">Email address</label>
    <input type="email" className="form-control" name="email" id="email" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label htmlFor="password">Password</label>
    <input type="password" className="form-control" id="password" name="password" placeholder="Password"/>
  </div>

  <button type="submit" className="btn btn-primary" >Submit</button>
</form>
    </div>
  )
}

export default Login