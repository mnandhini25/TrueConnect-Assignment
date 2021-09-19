import React,{createContext, useState} from 'react';

export const UserContext = createContext();
export default function UserProvider(props){
    const initValue = [{
        name: "abc",
        age : 20,
        password:"abc",
        email:'abc@gmail.com',
        mobilenumber:123456789
    }]
    const [userList, setUserList] = useState(initValue);

    

    return(
        <UserContext.Provider
      value={{
        userList,
        setUserList
      }}
    >
      {props.children}
    </UserContext.Provider>

    )

}