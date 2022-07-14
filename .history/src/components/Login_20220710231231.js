import React, {useState} from 'react'
import {  useNavigate } from 'react-router-dom';

const Login = (props) => {
    const [credentials, setCredentials] = useState({email:"", password:""})
    let navigate= useNavigate();
    const handleSubmit = async (e) =>{
       e.preventDefault();
       const response = await fetch(`http://localhost:5000/api/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          
        },
         body: JSON.stringify({email: credentials.email, password: credentials.password})
      });
      const json = await response.json()
      console.log(json);
      if (json.success){
        //redirect
        localStorage.setItem('token', json.authtoken);
        props.showAlert("Logged in Successfully", "success")
        navigate('/')
        
      }
      else{
        props.showAlert("Invalid credentials", "danger")
      }
    }
    const onChange = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }
  return (
    <div class="mt-3 md-3">
        <h2>Login to continue to MyNotebook</h2>
        <form onSubmit={handleSubmit}>
  <div className="form-group">
    <label htmlFor="email">Email address</label>
    <input type="email" className="form-control" name="email" id="email" aria-describedby="emailHelp" onChange={onChange} value={credentials.email} placeholder="Enter email"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>  
  </div>
  <div className="form-group">
    <label htmlFor="password">Password</label>
    <input type="password" className="form-control" id="password" name="password" onChange={onChange} value={credentials.password} placeholder="Password"/>
  </div>

  <button type="submit" className="btn btn-primary" >Submit</button>
</form>
    </div>
  )
}

export default Login