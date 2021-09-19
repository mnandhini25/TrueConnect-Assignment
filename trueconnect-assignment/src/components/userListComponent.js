import React,{useContext, useEffect} from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../contexts/userContext";


export default function UserListComponent() {
  const {userList, setUserList} = useContext(UserContext);
  let history = useHistory();

  
  const editFlag=(index)=>{
    let tempUserlist = [...userList]
    tempUserlist[index].editFlag = true;
    setUserList(tempUserlist);
    // tempUserlist[]

  }

  const deleteFlag=(index)=>{
    let tempUserlist=[...userList]
    tempUserlist.splice(index,1)
    setUserList(tempUserlist);
  }
  const handleChange = (event, index) => {
    console.log('index:',index, event);
    let tempUserlist = [...userList];
    tempUserlist[index][event.target.id] = event.target.value;
    setUserList(tempUserlist);

  }

  const changenavigation=(id)=>{
    history.push('/view/'+id);
  }
  const handleBlur = () => {
    let tempUserlist = [...userList];
    tempUserlist.map((user) => {
      user.editFlag = user.editFlag ? !user.editFlag: user.editFlag;
    })
    setUserList(tempUserlist)
  }
  useEffect(()=>{
    console.log('userList ::', userList)
  })

  return (
    <div class="container">
      <h2>Registered Users</h2>
            <table class="table">
        <thead>
          <tr>
            <th>Username</th>
            <th>Password</th>
            <th>Age</th>
            <th>Email</th>
            <th>Mobilenumber</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
           userList.length? userList.map((user, userIndex)=>{
              return (
                <tr key={userIndex}>
            <td>{user.editFlag ? (<div><input type="text" value={user.name} onBlur={()=>{handleBlur()}} id="name" onChange={(e)=>{handleChange(e, userIndex)}} /></div>) : (<div>{user.name}</div>)} </td>
            <td>{user.editFlag ? (<div><input type="password" value={user.password} onBlur={()=>{handleBlur()}} id="pwd" onChange={(e)=>{handleChange(e, userIndex)}} /></div>) : (<div>{user.password}</div>)} </td>
            <td>{user.editFlag ? (<div><input type="number" value={user.age} onBlur={()=>{handleBlur()}} id="age" onChange={(e)=>{handleChange(e, userIndex)}} /></div>) : (<div>{user.age}</div>)} </td>
            <td>{user.editFlag ? (<div><input type="email" value={user.email} onBlur={()=>{handleBlur()}} id="email" onChange={(e)=>{handleChange(e, userIndex)}} /></div>) : (<div>{user.email}</div>)} </td>
            <td>{user.editFlag ? (<div><input type="number" value={user.mobilenumber} onBlur={()=>{handleBlur()}} id="mno" onChange={(e)=>{handleChange(e, userIndex)}} /></div>) : (<div>{user.mobilenumber}</div>)} </td>

            <td>
              <button onClick={()=>{editFlag(userIndex)}}>Edit</button>
              <button onClick={()=>{deleteFlag(userIndex)}}>Delete</button>
              <button onClick={()=>{changenavigation(userIndex)}}>View</button>
            </td>
            
          </tr>
              )
            }) : ""
          }
          
        </tbody>
      </table>
    </div>
  );
}
