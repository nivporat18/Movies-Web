import React, { useState } from "react";
import "./Register.css";
import authService from "./AuthService";
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successRegister,setSuccessRegister] = useState(false)


  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleClickRegister =  (e) => {
    e.preventDefault();
    const registerUser = {
      name:name,
      email:email
      ,password:password
    }


    setSuccessRegister(true)
    authService.register(registerUser).then((response)=>{
      console.log("click")
      console.log("Register " + response )
  
    }).catch(e=>{
      console.dir(`${e} Look`)
    })
  };
  

  return (

 

    <form className="allFrom" onSubmit={handleClickRegister} >
        <h1 className="titlePage">Register</h1>
        {successRegister ? <Stack sx={{ width: '100%' ,display:'flex',flexDirection:"row" ,justifyContent:"center"}} spacing={2}>  <Alert severity="success">Register Success!</Alert> </Stack>
      :
        <div className="registerPage">


        <label className="form-label">Name</label>
        <input
          onInput={handleName}
          type="text"
          className="form-field"
          placeholder="Name"
          autoComplete="text"
          required
        />



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
 

      <button className="form-button " type="submit">Register</button>
      </div>
    }
    </form>
       
  );
};
