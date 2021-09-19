import React,{useContext,useState, useEffect} from 'react'
import { UserContext } from '../contexts/userContext';

export default function ViewUserComponent(props) {

    const {userList, setUserList} = useContext(UserContext);
    const [state, setState] = useState([])

    console.log(props.match.params.id)
    useEffect(()=>{
      setState(userList[props.match.params.id])

    },[])
    


    return (
        <div className="viewcomp">
            Username: {state.name}<br/>
            Password: {state.password}<br/>
            Age: {state.age}<br/>
            Email: {state.email}<br/>
            Mobilenumber: {state.mobilenumber}
        </div>
    );
}
