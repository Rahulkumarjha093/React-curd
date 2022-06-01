import React, { useEffect, useState } from "react";
function About() {
  const [user, setUser] = useState([])
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [userId, setUserId] = useState(null)

  useEffect(()=>{
     getList()
        
  },[]);

  function getList()
  {
    fetch("http://localhost:2022/idbi")
    .then((data)=>data.json())
    .then((result)=>{
      //console.log(result)

      setUser(result)
      setName(result[0].name)
      setEmail(result[0].email)
      setAddress(result[0].address)
      setUserId(result[0].id)
       
    });
  }

  function deleteUser(id)
  {
    fetch("http://localhost:2022/idbi/" + id, {
      method: "DELETE"
    }).then((result)=>{
      result.json().then((resp)=>{
        console.warn(resp)
        getList()
      })
    })
  }
   function selectUser(id)
   {
     let data = user[id-1]
    setName(data.name)
    setEmail(data.email)
    setAddress(data.address)
    setUserId(data.id)
   }

   function updateUser()
   {
     let abc={name,email,address,userId}
     fetch("http://localhost:2022/idbi/" + userId, {
       method: "PUT",
       headers:{
         "Accept": "application/json",
         "Content-Type": "application/json"
       },
       body: JSON.stringify(abc)
     }).then((result) => {
       result.json().then((resp) => {
         console.warn(resp)
         getList()
       })
     })
   }
  
  return (
    <div>
      <h2>About</h2>
      <p>This is About Page</p>
      
      <table border="1">
        <tr>
          <td>Id</td>
          <td>Name</td>
          <td>Email</td>
          <td>Address</td>
          <td>Operation</td>
        </tr>
        {
          user.map((item)=>(
          <tr>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.email}</td>
          <td>{item.address}</td>
          <td><button onClick={()=>deleteUser(item.id)}>Delete</button></td>
          <td><button onClick={()=>selectUser(item.id)}>Update</button></td>
          </tr>
          ))
        }
      </table>
      <div>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
        <br /><br />

        <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} />
        <br /><br />

        <input type="text"  value={address} onChange={(e)=>setAddress(e.target.value)} />
        <br /><br />

        <button onClick={updateUser}>Update User</button>
      </div>
      </div>
    
  );
}

export default About;