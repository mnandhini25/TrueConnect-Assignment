import React,{useContext, useState, useEffect} from "react";
import { UserContext } from "../contexts/userContext";


const initValue = {
    name:"",
    age: '' ,
    password:"",
    email:"",
    mobilenumber:''
}

export default function RegistrationComponent() {
    const {userList, setUserList} = useContext(UserContext);
    const [user, setUser] = useState({initValue})

    useEffect(()=>{
        console.log('userlist0::',userList)
    })

    function userinfo(e){
      setUser({...user,...{[e.target.name] : e.target.value}})
  }

  return (
    <div className="container">
      <h2>USER REGISTRATION FORM</h2><br/>
      
      <form>
        <div className="form-group">
        <label for="user">Username</label>
        <input type='text' className="form-control" id="user" name='name' value={user.name} onChange={userinfo}/>
        </div>
        <div className="form-group">
          <label for="pwd">Password</label>
          <input type="password" className="form-control" id="pwd" name='password' value={user.password} onChange={userinfo}/>
        </div>
        <div className="form-group">
          <label for="age">Age</label>
          <input type="number" className="form-control" id="age" name='age' value={user.age} onChange={userinfo}/>
        </div>
        <div className="form-group">
          <label for="email">Email</label>
          <input type="email" className="form-control" id="email" name='email' value={user.email} onChange={userinfo}/>
        </div>
        <div className="form-group">
          <label for="mno">Mobile number</label>
          <input type="number" className="form-control" id="mno" name='mobilenumber' value={user.mobilenumber} onChange={userinfo}/>
        </div>
      </form>
      <button onClick={()=>{
        setUserList([...userList, ...[user]]);
        setUser(initValue)
        }}>Register</button>
    </div>
  );
}
