import React, { useState } from 'react'

type AuthUser = {
    name: string,
    email: string
}


function User() {
const[user, setUser] = useState< AuthUser| null>(null)

let handlelogin = () => {
setUser({
    name: 'shiv',
    email:'shivam.patel2093'
})
}
let handlelogout = () => {
   setUser(null) 
}
    return (
    <div style={{display:'flex', flexDirection:'column'}}>
    USER COMPONENT
        <button onClick={handlelogin}>LOGIN</button>
        <button onClick={handlelogout}>LOGOUT</button>
        <div>
            
             {
            //optional chaining operator '?'
            user?.name}
            {user?.email}
            </div>
    </div>
  )
}

export default User