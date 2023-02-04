import React, { useState } from 'react'
import authService from './AuthService'
import { useDispatch } from 'react-redux';
import {login as loginAction} from './../../store/slices/AuthSlice'
import "./Login.css";
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';



function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch()
  const [successLogin,setSuccessLogin] = useState(false)

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };


  const handleClickLogin = (e) =>{
    e.preventDefault();
   const loginUser = {
    email,password
   }
   setSuccessLogin(true)
   authService.login(loginUser).then(response =>{
    setTimeout(()=>{
      dispatch(loginAction(response))
  },1000)

   }).catch(e=>{
    setSuccessLogin(false)
    alert(`Check your details`)
      
   })
  }



  return (

 
    <form onSubmit={handleClickLogin} className="allFrom">
   
    <h1 className="titlePage">Login</h1>
    {
      successLogin ? <Stack sx={{ width: '100%' ,display:'flex',flexDirection:"row" ,justifyContent:"center"}} spacing={2}>  <Alert severity="success">Welcome!</Alert> </Stack>
    :
    <div  className="loginPage">
      <label className="form-label">Email</label>
      <input
        onInput={handleEmail}
        type="email"
        className="form-field"
        placeholder="Email"
        autoComplete="email"
        required
      />


  
      <label className="form-label">Password</label>
      <input
        type="password"
        className="form-field"
        placeholder="Password"
        onInput={handlePassword}
        autoComplete="password"
        required
      />
    
      <button className='form-button' type="submit">LOGIN</button>

    
    </div>
        } 
     

  </form>
   

       
     
  )
}

export default Login