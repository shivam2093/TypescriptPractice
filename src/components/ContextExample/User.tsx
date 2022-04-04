import React, { useContext } from 'react'
import { UserContext } from './UserContext'

  function User() {

    const userContext = useContext(UserContext)


let handlelogin = () => {
    
userContext?.setUser({
    name:'shivam',
    email:'shivam.patel222'
})

}
let handlelogout = () => {
  
      userContext?.setUser(null)
   
}
    return (
    <div style={{display:'flex', flexDirection:'column'}}>
    USER COMPONENT
        <button onClick={handlelogin}>LOGIN</button>
        <button onClick={handlelogout}>LOGOUT</button>
        <div>
            
             {
            //optional chaining operator '?'
            userContext?.user?.name}
            {userContext?.user?.email}
            </div>
    </div>
  )
}

export default User