import React from 'react'

const Signup = () => {
    const [credentials, setCredentials] = useState({email:"", password:""})
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
         navigate('/')
       }
       else{
         alert("Invalid credentials")
       }
     }
     const onChange = (e)=>{
         setCredentials({...credentials, [e.target.name]: e.target.value})
     }
  return (
    <div className='container'>
    <form>
  <div className="form-group">
    <label htmlFor="name">Name</label>
    <input type="text" className="form-control" id="name" onChange={onChange} aria-describedby="emailHelp"/>
   
  </div>
  <div className="form-group">
    <label htmlFor="email">Email address</label>
    <input type="email" className="form-control" onChange={onChange} id="email" aria-describedby="emailHelp"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label htmlFor="password">Password</label>
    <input type="password" className="form-control" onChange={onChange} id="password"/>
  </div>
  <div className="form-group">
    <label htmlFor="cpassword">Confirm Password</label>
    <input type="password" className="form-control" onChange={onChange} id="cpassword"/>
  </div>

  <button type="submit" className="btn btn-primary">Submit</button>
</form>    
    </div>
  )
}

export default Signup
  