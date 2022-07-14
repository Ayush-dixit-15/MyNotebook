import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';

const Signup = (props) => {
    const [credentials, setCredentials] = useState({name:"" , email:"", password:"", cpassword:""})
    let navigate= useNavigate();
    const handleSubmit = async (e) =>{
        e.preventDefault();
       const  {name, email, password}= credentials;
        const response = await fetch(`http://localhost:5000/api/auth/createuser`, {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json',
           
         },
          body: JSON.stringify({name, email, password})
       });
       const json = await response.json()
       console.log(json);
       if (json.success){
         //redirect
         localStorage.setItem('token', json.authtoken);
         navigate('/')
         props.showAlert("Account Created Successfully", "success")
       }
       else{
         props.showAlert("Invalid details", "danger")
       }
     }
     const onChange = (e)=>{
         setCredentials({...credentials, [e.target.name]: e.target.value})
     }
  return (
    <div className='container mt-3'>
        <h2>Create an account to continue to MyNotebook</h2>
    <form onSubmit={handleSubmit}>
  <div className="form-group">
    <label htmlFor="name">Name</label>
    <input type="text" className="form-control" name="name" id="name" onChange={onChange} aria-describedby="emailHelp"/>
   
  </div>
  <div className="form-group">
    <label htmlFor="email">Email address</label>
    <input type="email" className="form-control" name="email" onChange={onChange} id="email" aria-describedby="emailHelp"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label htmlFor="password">Password</label>
    <input type="password" className="form-control" onChange={onChange} minLength={5}name="password" id="password" required/>
  </div>
  <div className="form-group">
    <label htmlFor="cpassword">Confirm Password</label>
    <input type="password" className="form-control" onChange={onChange} minLength={5}name="cpassword" id="cpassword" required/>
  </div>

  <button type="submit" className="btn btn-primary" onSubmit={handleSubmit}>Submit</button>
</form>    
    </div>
  )
}

export default Signup
  