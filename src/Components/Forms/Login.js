import React from 'react';
import { useState } from 'react';
import img from './Rolex.png'
function Login() {
  const [UserName,setUserName]=useState('');
  const[Password,setPassword]=useState('');
  const [Email,setEmail]=useState('');
  const[error,setError]=useState(false);
  const formHandler=(event)=>
  {
    event.preventDefault();
    if(UserName.length===0 && Password.length===0)
    {
         setError(true);
    }
    if(UserName && Password)
    {
    const loginObj={
      name:UserName,
      pwd:Password,
      email:Email
    }
    console.log(loginObj);
    alert(JSON.stringify(loginObj));
    //axios.post(url/obj)
  }
  }
  return (
    <div>
    <h3>Registration Page</h3>
    <form onSubmit={formHandler}>
        UserName :<input type="text" value={UserName} placeholder=' 👨‍🎓 User Name' 
        onChange={(e)=>setUserName(e.target.value)}/>  <br/>
        <div>
        {error && UserName.length ===0?
        <label style={{color:'blue'}}>
          UserName is required
        </label>:""}
        </div>

        Password :<input type="password" value={Password} placeholder=' 🔒 password' 
        onChange={(e)=>setPassword(e.target.value)}/>  <br/>
        <div>
        {error && Password.length ===0?
        <label style={{color:'blue'}}>
          Password is required
        </label>:""}
        </div>
        E_mail Id:<input type="text" value={Email} placeholder=' ✉ Email' 
        onChange={(e)=>setEmail(e.target.value)}/>  <br/>
    <button type="submit">Register</button><br/>
    <img src={img} id='rolex' alt="Rolex"/>
    </form>
    </div>
  )

}
export default Login