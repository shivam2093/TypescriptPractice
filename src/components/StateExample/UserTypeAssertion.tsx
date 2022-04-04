import React,{useState} from 'react'

type AuthUser = {
    name:string,
    email:string
}

function UserTypeAssertion() {
const[user, setUser] = useState< AuthUser>({} as AuthUser)

let handlelogin = () => {
setUser({
    name: 'shiv',
    email:'shivam.patel2093'
})
}

    return (
    <div style={{display:'flex', flexDirection:'column'}}>
    USER COMPONENT
        <button onClick={handlelogin}>LOGIN</button>
        {/* <button onClick={handlelogout}>LOGOUT</button> */}
       
        <div>
            
             {
            //optional chaining operator '?'
            user.name}
            {user.email}
            </div>
    </div>
  )
}

export default UserTypeAssertion