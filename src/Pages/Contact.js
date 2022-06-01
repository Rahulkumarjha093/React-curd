//import { Button } from 'react-bootstrap';
//import Form from 'react-bootstrap/Form'
//import { type } from '@testing-library/user-event/dist/type';
import React, { useState } from 'react'
function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  function makeUser() {
    let data={name,email,address}
    console.warn("called",data)
    fetch("http://localhost:2022/idbi",{
      method:'POST',
      headers:{
        'Accept':'application/json',
         'Content-type': 'application/json'
      },
      body:JSON.stringify(data)
    }).then((result)=>{
       console.warn("result",result);
    })
  }
  return (
    <div>
      <h2>Contact</h2>
      <p>This is contact Page!</p>

      <input type="text" onChange={(e)=>setName(e.target.value)}
       placeholder="Enter Username" name="username" required value={name}/>
       <br/><br/>
        
        <input type="text" onChange={(e)=>setEmail(e.target.value)} 
          placeholder="Enter Email" name="email"  required value={email}/>
        <br/><br/>

       <input type="text" onChange={(e)=>setAddress(e.target.value)} 
        placeholder="Enter Address" name="address"  required value={address}/>
        <br/><br/>

          <button onClick={makeUser}>Login</button>

          </div>
          );
  
  }

          export default Contact;